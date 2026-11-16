(()=>{
'use strict';
const nav=[...document.querySelectorAll('[data-section]')];
const out=document.querySelector('#chapter-output');
const search=document.querySelector('#search');
const filterPane=document.querySelector('#skill-controls');
const empty=document.querySelector('#empty');
const title=document.querySelector('#content-heading');
const eyebrow=document.querySelector('#content-eyebrow');
const progress=document.querySelector('#chapter-progress');
let data=null;
let active='projects',q='',category='All',experienceMode='complete';
const visited=new Set();
const labels={projects:['01 / PROOF OF WORK','Featured engineering projects'],skills:['02 / SKILL TREE','Technical capabilities'],education:['03 / EDUCATION','Degrees & coursework'],experience:['04 / CAREER HISTORY','Employment, service and engineering work'],credentials:['05 / ACHIEVEMENTS','Credentials & honors']};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const match=(...fields)=>fields.some(f=>String(f??'').toLowerCase().includes(q));
const link=(href,label,cls='')=>`<a ${cls?'class="'+cls+'" ':''}href="${esc(href)}" ${/^https?:/.test(href)?'target="_blank" rel="noopener noreferrer"':'target="_top"'}>${esc(label)} <span aria-hidden="true">↗</span></a>`;
function logo(domain,initials,explicitUrl){
 if(!domain)return `<span class="brand-tile is-fallback" aria-hidden="true"><span class="initials">${esc(initials)}</span></span>`;
 const local=(window.LOGO_FILES||{})[domain];
 const remote=explicitUrl||`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
 const src=local?`logos/${local}`:remote;
 return `<span class="brand-tile" aria-hidden="true"><img src="${esc(src)}" data-remote="${esc(remote)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="if(this.dataset.remote&&this.src.indexOf(this.dataset.remote)<0){this.src=this.dataset.remote}else{this.parentElement.classList.add('is-fallback')}"><span class="initials">${esc(initials)}</span></span>`;
}
const ALIAS={'android studio':['android'],'aws':['cloud'],'google cloud storage':['cloud'],'ci/cd':['github actions','ci/cd'],'testing':['vitest','pytest','rspec','capybara'],'rest apis':['apis','fastapi'],'technical leadership':['leadership'],'github pages':['github actions','hugo'],'github':['github actions','git']};
function projectsFor(skill){const sl=skill.toLowerCase();const keys=[sl,...(ALIAS[sl]||[])];return data.projects.filter(p=>p.tags.some(t=>keys.includes(t.toLowerCase())))}
const isMobile=()=>window.matchMedia('(max-width:650px)').matches;
let showAll=false;
function capped(cards,noun,limit){if(isMobile()&&!showAll&&!q&&cards.length>limit)return cards.slice(0,limit).join('')+`<button class="show-all" type="button" data-showall>Show all ${cards.length} ${noun}</button>`;return cards.join('')}
const ORDER=['projects','skills','education','experience','credentials'];
const nextWrap=document.querySelector('#next-wrap');
function renderNext(){const i=ORDER.indexOf(active),n=ORDER[(i+1)%ORDER.length];const last=i===ORDER.length-1;nextWrap.innerHTML=`<button class="next-chapter" type="button" data-next="${n}">${last?'Back to ':'Next: '}${esc(labelNames[n])} <span aria-hidden="true">${last?'↺':'→'}</span></button>`}
const labelNames={projects:'Projects',skills:'Skill tree',education:'Education',experience:'Career history',credentials:'Achievements'};
function tags(ts){return `<div class="tags">${(ts||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>`}
function projectCard(p){return `<article class="project"><div class="project-image"><img src="${esc(p.image)}" alt="Screenshot or illustration from ${esc(p.name)}" loading="lazy"><span>${esc(p.class)}</span></div><div class="project-body"><h3>${esc(p.name)}</h3><p class="meta">${esc(p.role)} · ${esc(p.dates)}</p><p class="desc">${esc(p.desc)}</p>${tags(p.tags)}<div class="project-links">${link(p.url,'View details')}${p.repo?link(p.repo,'Source code'):''}</div></div></article>`}
function eduCard(e){return `<article class="detail-card"><div class="detail-top">${logo(e.domain,e.initials)}<div><h3>${esc(e.name)}</h3><p class="meta">${esc(e.dates)}</p></div></div><p class="sub">${esc(e.qual)}</p><p class="desc">${esc(e.detail)}</p><span class="mini-badge">${esc(e.status)}</span></article>`}
function jobCard(j){return `<article class="detail-card"><div class="detail-top">${logo(j.domain,j.initials,j.logo)}<div><h3>${esc(j.company)}</h3><p class="meta">${esc(j.dates)}</p></div></div><p class="sub">${esc(j.title)}</p><p class="desc">${esc(j.detail)}</p><span class="mini-badge">${esc(j.type)}</span></article>`}
function credentialCard(c){return `<article class="detail-card"><div class="detail-top">${logo(c.domain,c.initials)}<div><h3>${esc(c.name)}</h3><p class="meta">${esc(c.issuer)}</p></div></div><p class="desc">${esc(c.date)}</p>${c.url?link(c.url,'Credential link'):''}</article>`}
function projectMatches(p){return match(p.name,p.role,p.desc,p.dates,...p.tags)}
function render(){if(!data)return;out.innerHTML='';empty.hidden=true;filterPane.hidden=true;filterPane.innerHTML='';eyebrow.textContent=labels[active][0];title.textContent=labels[active][1];const term=search.value.trim().toLowerCase();q=term;
 let html='';
 if(active==='projects'){const ps=data.projects.filter(projectMatches);html=capped(ps.map(projectCard),'projects',3)}
 else if(active==='education'){
  const ed=data.education.filter(e=>match(e.name,e.qual,e.dates,e.detail));
  const cs=data.courses.filter(c=>match(c));
  html=ed.map(eduCard).join('');
  if(cs.length){html+=`<h3 class="timeline-heading">Transcript-supported coursework</h3><div class="course-grid">${cs.map(c=>`<span>${esc(c)}</span>`).join('')}</div>`}
 }
 else if(active==='credentials'){html=data.credentials.filter(c=>match(c.name,c.issuer,c.date)).map(credentialCard).join('')}
 else if(active==='experience'){
  html=`<div class="experience-mode" role="group" aria-label="Choose career history"><button data-mode="complete" class="${experienceMode==='complete'?'active':''}" aria-pressed="${experienceMode==='complete'}">Employment & service</button><button data-mode="engineering" class="${experienceMode==='engineering'?'active':''}" aria-pressed="${experienceMode==='engineering'}">Engineering projects</button></div>`;
  if(experienceMode==='engineering'){let p=data.projects.filter(projectMatches);html+=capped(p.map(projectCard),'projects',3)}
  else{const j=data.jobs.filter(j=>match(j.company,j.title,j.dates,j.detail,j.type));html+=capped(j.map(jobCard),'roles',4)}
 }
 else if(active==='skills'){
  const groups=Object.entries(data.skills),cats=['All',...groups.map(([k])=>k)];
  filterPane.hidden=false;filterPane.innerHTML=cats.map(c=>`<button class="filter ${category===c?'active':''}" data-category="${esc(c)}" aria-pressed="${category===c}">${esc(c)}</button>`).join('');
  const sg=groups.filter(([g])=>category==='All'||g===category).map(([g,ss])=>[g,ss.filter(s=>match(s,g))]).filter(([,ss])=>ss.length);
  html=`<div class="skill-grid">${sg.map(([g,ss])=>`<div class="skill-card"><h3>${esc(g)}</h3>${[...ss].map((s,i)=>[s,projectsFor(s).length,i]).sort((a,b)=>b[1]-a[1]||a[2]-b[2]).map(([s,n])=>`<button class="skill-node${n?' has-evidence':''}" data-skill="${esc(s)}" title="${n?'Used in '+n+' project'+(n>1?'s':''):'Coursework and training'}">${esc(s)}${n?`<span class="skill-count" aria-label="used in ${n} project${n>1?'s':''}">${n}</span>`:''}</button>`).join('')}</div>`).join('')}</div>`;
  if(!term)html+='<div class="skill-evidence" id="skill-evidence">Select a skill to see where it was used. The number on a skill is how many of my projects use it; skills with the most project evidence are listed first. Others reflect coursework and training.</div>';
 }
 if(!html||(!(active==='skills'||active==='experience')&&!html.trim()))empty.hidden=false;
 if(active==='experience' && !term && experienceMode==='engineering' && data.projects.length===0)empty.hidden=false;
 out.innerHTML=html;
 const contentItems=out.querySelectorAll('.project,.detail-card,.skill-card,.course-grid');
 if(contentItems.length===0)empty.hidden=false;
 renderNext();
 notifySize();
}
let lastH=0;
function notifySize(){if(window.top===window)return;try{const m=document.querySelector('main');const h=Math.ceil(m.getBoundingClientRect().height)+8;if(h===lastH)return;lastH=h;window.parent.postMessage({type:'artifact-height',height:h},'*')}catch(_){}}
function switchSection(section,focus=true){if(!labels[section])return;active=section;showAll=false;visited.add(section);progress.textContent=`${visited.size} / 5 chapters explored`;nav.forEach(b=>{const current=b.dataset.section===section;b.classList.toggle('active',current);b.setAttribute('aria-selected',String(current));b.tabIndex=current?0:-1});search.value='';q='';category='All';render();if(focus){document.querySelector('#career-content').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}try{history.replaceState(null,'','#'+section)}catch(_){};}
nav.forEach(b=>{b.addEventListener('click',()=>switchSection(b.dataset.section));b.addEventListener('keydown',e=>{let i=nav.indexOf(b);if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();nav[(i+1)%nav.length].focus()}else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();nav[(i+nav.length-1)%nav.length].focus()}else if(e.key==='Home'){e.preventDefault();nav[0].focus()}else if(e.key==='End'){e.preventDefault();nav[nav.length-1].focus()}})});
search.addEventListener('input',render);
filterPane.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;render()});
out.addEventListener('click',e=>{if(e.target.closest('[data-showall]')){showAll=true;render();return}const mode=e.target.closest('[data-mode]');if(mode){experienceMode=mode.dataset.mode;showAll=false;render();return}const node=e.target.closest('[data-skill]');if(node){const skill=node.dataset.skill;const sl=skill.toLowerCase();out.querySelectorAll('[data-skill]').forEach(b=>b.classList.toggle('active',b===node));const matches=projectsFor(skill);const target=out.querySelector('#skill-evidence');if(target){if(matches.length){target.innerHTML=`<strong>${esc(skill)}</strong> used in: `+matches.map(p=>`<a href="${esc(p.url)}" ${/^https?:/.test(p.url)?'target="_blank" rel="noopener noreferrer"':'target="_top"'}>${esc(p.name)}</a>`).join('')}else{target.innerHTML=`<strong>${esc(skill)}</strong>: coursework and training. See <em>Education</em> and <em>Achievements</em> for related study and credentials.`}}}});
nextWrap.addEventListener('click',e=>{const b=e.target.closest('[data-next]');if(b)switchSection(b.dataset.next)});
document.querySelector('#start-quest').addEventListener('click',()=>switchSection('projects'));
window.addEventListener('resize',notifySize);if('ResizeObserver'in window)new ResizeObserver(notifySize).observe(document.querySelector('main'));
data=window.CAREER_DATA || null;
if(data){let first=decodeURIComponent(location.hash.slice(1));switchSection(labels[first]?first:'projects',false)}else{out.innerHTML='<p class="notice">Career data is unavailable. Confirm that career-data.js is alongside this file.</p>';notifySize()}
})();
