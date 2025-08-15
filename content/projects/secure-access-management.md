---
title: "Secure Access Management System"
date: 2024-12-31T00:00:00-06:00
draft: false
description: "Founded and developed a Rails-based web app with role-based access control and accessibility-first design."
tags: ["Ruby on Rails", "Web Development", "RBAC", "Security", "Accessibility"]
linkTitle: "Secure Access Management"
author: "William Maddock"
showToc: true
TocOpen: false
hidemeta: false
comments: false
canonicalURL: "https://willmaddock.github.io/dev/projects/secure-access-management/"
disableHLJS: false
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
  image: "./img/msu.png"
  alt: "Secure Access Management System"
  caption: "Professor Deb with me and my Family"
  relative: true
  hidden: false
editPost:

---

<p style="text-align:center;">
  <img src="../../img/secure.png" alt="Secure Access Management System" style="width:100%; max-width:800px;" />
</p>

From **September 2024 to December 2024**, I founded and led the **Secure Access Management System** as part of my B.S. in Computer Science (expected 2025) at MSU Denver. This Ruby on Rails web application implements **role-based access control (RBAC)**, **security clearance management**, and **accessibility-first design** for secure, user-friendly workflows.

👉 <a href="https://final-project-jk9d.onrender.com" target="_blank" rel="noopener noreferrer"><strong>View Live Application Website</strong></a>  
👉 <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment" target="_blank" rel="noopener noreferrer"><strong>View GitHub Repository</strong></a>  
▶️ <a href="https://www.youtube.com/watch?v=8h-CNthscBM" target="_blank" rel="noopener noreferrer"><strong>Project Presentation Video</strong></a>

---

🔑 **Default Login Credentials**  
Use this seeded account to access the app for testing purposes only:
- **Email**: logistics_manager@example.com
- **Password**: password

**Note**: These credentials are for demonstration and evaluation purposes. Please do not use them for any real-world operations or share them beyond authorized testing. For security, I recommend creating your own account for extended use.

---

### 🔍 Project Highlights

- Built a **Ruby on Rails** web app with dynamic **RBAC** for Admin, Shipping Agent, and Logistics Manager roles across four development sprints.
- Integrated **Google Cloud Storage** for persistent file uploads.
- Implemented **accessibility-first** design with ARIA roles, high contrast, and keyboard navigation.
- Deployed on **Render** with zero downtime on a 256 MB free tier.

---

### 📦 My Role: Founder and Lead Developer

- **Vision and Leadership**: Defined the project’s scope for secure, accessible access management.
- **Development**: Designed and coded the app, including RBAC, UI, and cloud storage integration.
- **Testing**: Wrote RSpec and Capybara tests, achieving 97% model coverage.
- **Deployment**: Configured Puma and Render for low-RAM production deployment.

This role enhanced my skills in **web development**, **security**, and **accessibility**.

---

### 👥 Contributors and Credits

A solo-led project developed for educational purposes, with potential for future open-source contributions. Licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 4.0</a>.

---

### ✨ Key Features

The Secure Access Management System offers:

1. **Dynamic RBAC**: Role-based access for Admin, Shipping Agent, and Logistics Manager.
2. **Real-Time Feedback**: Alerts for unauthorized access attempts.
3. **Persistent Uploads**: File storage via Google Cloud Storage.
4. **Responsive UI**: Bootstrap with Dark Mode toggle.
5. **Upload Validation**: Prevents memory overload.
6. **Seed System**: Instant demo data setup.
7. **Accessibility-First**: ARIA roles, high contrast, keyboard navigation.

**Integrations**: Google Cloud Storage, PostgreSQL, Bootstrap, Render.

---

### 🛠️ Technologies Used

- **Languages/Frameworks**: Ruby on Rails, HTML5, CSS3, JavaScript, Bootstrap
- **Database**: PostgreSQL
- **Storage**: Google Cloud Storage (Active Storage)
- **Testing**: RSpec, Capybara
- **Deployment**: Render, Puma
- **Methodologies**: Agile, DevOps
- **Documentation**: <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/README.md" target="_blank" rel="noopener noreferrer">README</a>, <a href="https://guides.rubyonrails.org" target="_blank" rel="noopener noreferrer">Technical Documentation</a>

---

### 📁 Repository Contents

| Resource | Description |
|----------|-------------|
| <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment/app/models" target="_blank" rel="noopener noreferrer">app/models</a> | ActiveRecord models and validations |
| <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment/app/controllers" target="_blank" rel="noopener noreferrer">app/controllers</a> | Controller logic and seed trigger |
| <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment/app/views" target="_blank" rel="noopener noreferrer">app/views</a> | Responsive ERB templates |
| <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment/db/migrate" target="_blank" rel="noopener noreferrer">db/migrate</a> | Database schema migrations |
| <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/db/seeds.rb" target="_blank" rel="noopener noreferrer">db/seeds.rb</a> | Demo dataset creation |
| <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment/spec" target="_blank" rel="noopener noreferrer">spec/</a> | RSpec unit and system tests |
| <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/config/puma.rb" target="_blank" rel="noopener noreferrer">config/puma.rb</a> | Puma config for low-RAM environments |
| <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/config/storage.yml" target="_blank" rel="noopener noreferrer">config/storage.yml</a> | Google Cloud Storage configuration |

---

### 📈 Project Rigor

The <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment" target="_blank" rel="noopener noreferrer">GitHub repository</a> showcases:
- Detailed commit history across four development sprints (September 2024 – December 2024).
- Comprehensive test coverage (97% model coverage) with RSpec and Capybara.
- Production-ready deployment on Render with optimized Puma settings.

**Setup**:
1. Clone: `git clone https://github.com/willmaddock/final-project.git`
2. Install dependencies: `bundle install`
3. Setup database: `bundle exec rails db:drop db:create db:migrate db:seed`
4. Start server: `rails server`
5. See <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/README.md" target="_blank" rel="noopener noreferrer">README</a> for details.

**System Architecture**:
<svg aria-roledescription="flowchart-v2" role="graphics-document document" viewBox="0 0 751.34375 582" style="max-width: 751.34375px;" class="flowchart" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" id="mermaid-diagram-mermaid-ik6hf5q"><style>#mermaid-diagram-mermaid-ik6hf5q{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#mermaid-diagram-mermaid-ik6hf5q .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#mermaid-diagram-mermaid-ik6hf5q .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#mermaid-diagram-mermaid-ik6hf5q .error-icon{fill:#a44141;}#mermaid-diagram-mermaid-ik6hf5q .error-text{fill:#ddd;stroke:#ddd;}#mermaid-diagram-mermaid-ik6hf5q .edge-thickness-normal{stroke-width:1px;}#mermaid-diagram-mermaid-ik6hf5q .edge-thickness-thick{stroke-width:3.5px;}#mermaid-diagram-mermaid-ik6hf5q .edge-pattern-solid{stroke-dasharray:0;}#mermaid-diagram-mermaid-ik6hf5q .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-diagram-mermaid-ik6hf5q .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-diagram-mermaid-ik6hf5q .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-diagram-mermaid-ik6hf5q .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-diagram-mermaid-ik6hf5q .marker.cross{stroke:lightgrey;}#mermaid-diagram-mermaid-ik6hf5q svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-diagram-mermaid-ik6hf5q p{margin:0;}#mermaid-diagram-mermaid-ik6hf5q .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}#mermaid-diagram-mermaid-ik6hf5q .cluster-label text{fill:#F9FFFE;}#mermaid-diagram-mermaid-ik6hf5q .cluster-label span{color:#F9FFFE;}#mermaid-diagram-mermaid-ik6hf5q .cluster-label span p{background-color:transparent;}#mermaid-diagram-mermaid-ik6hf5q .label text,#mermaid-diagram-mermaid-ik6hf5q span{fill:#ccc;color:#ccc;}#mermaid-diagram-mermaid-ik6hf5q .node rect,#mermaid-diagram-mermaid-ik6hf5q .node circle,#mermaid-diagram-mermaid-ik6hf5q .node ellipse,#mermaid-diagram-mermaid-ik6hf5q .node polygon,#mermaid-diagram-mermaid-ik6hf5q .node path{fill:#1f2020;stroke:#ccc;stroke-width:1px;}#mermaid-diagram-mermaid-ik6hf5q .rough-node .label text,#mermaid-diagram-mermaid-ik6hf5q .node .label text,#mermaid-diagram-mermaid-ik6hf5q .image-shape .label,#mermaid-diagram-mermaid-ik6hf5q .icon-shape .label{text-anchor:middle;}#mermaid-diagram-mermaid-ik6hf5q .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-diagram-mermaid-ik6hf5q .rough-node .label,#mermaid-diagram-mermaid-ik6hf5q .node .label,#mermaid-diagram-mermaid-ik6hf5q .image-shape .label,#mermaid-diagram-mermaid-ik6hf5q .icon-shape .label{text-align:center;}#mermaid-diagram-mermaid-ik6hf5q .node.clickable{cursor:pointer;}#mermaid-diagram-mermaid-ik6hf5q .root .anchor path{fill:lightgrey!important;stroke-width:0;stroke:lightgrey;}#mermaid-diagram-mermaid-ik6hf5q .arrowheadPath{fill:lightgrey;}#mermaid-diagram-mermaid-ik6hf5q .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#mermaid-diagram-mermaid-ik6hf5q .flowchart-link{stroke:lightgrey;fill:none;}#mermaid-diagram-mermaid-ik6hf5q .edgeLabel{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-diagram-mermaid-ik6hf5q .edgeLabel p{background-color:hsl(0, 0%, 34.4117647059%);}#mermaid-diagram-mermaid-ik6hf5q .edgeLabel rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-diagram-mermaid-ik6hf5q .labelBkg{background-color:rgba(87.75, 87.75, 87.75, 0.5);}#mermaid-diagram-mermaid-ik6hf5q .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#mermaid-diagram-mermaid-ik6hf5q .cluster text{fill:#F9FFFE;}#mermaid-diagram-mermaid-ik6hf5q .cluster span{color:#F9FFFE;}#mermaid-diagram-mermaid-ik6hf5q div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(20, 1.5873015873%, 12.3529411765%);border:1px solid rgba(255, 255, 255, 0.25);border-radius:2px;pointer-events:none;z-index:100;}#mermaid-diagram-mermaid-ik6hf5q .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#ccc;}#mermaid-diagram-mermaid-ik6hf5q rect.text{fill:none;stroke-width:0;}#mermaid-diagram-mermaid-ik6hf5q .icon-shape,#mermaid-diagram-mermaid-ik6hf5q .image-shape{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-diagram-mermaid-ik6hf5q .icon-shape p,#mermaid-diagram-mermaid-ik6hf5q .image-shape p{background-color:hsl(0, 0%, 34.4117647059%);padding:2px;}#mermaid-diagram-mermaid-ik6hf5q .icon-shape rect,#mermaid-diagram-mermaid-ik6hf5q .image-shape rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-diagram-mermaid-ik6hf5q :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker orient="auto" markerHeight="8" markerWidth="8" markerUnits="userSpaceOnUse" refY="5" refX="5" viewBox="0 0 10 10" class="marker flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"></path></marker><marker orient="auto" markerHeight="8" markerWidth="8" markerUnits="userSpaceOnUse" refY="5" refX="4.5" viewBox="0 0 10 10" class="marker flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"></path></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="11" viewBox="0 0 10 10" class="marker flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="-1" viewBox="0 0 10 10" class="marker flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="12" viewBox="0 0 11 11" class="marker cross flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="-1" viewBox="0 0 11 11" class="marker cross flowchart-v2" id="mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_A_B_0" d="M375.828,62L375.828,68.167C375.828,74.333,375.828,86.667,375.828,98.333C375.828,110,375.828,121,375.828,126.5L375.828,132"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_B_C_0" d="M303.406,181.758L274.294,189.298C245.182,196.839,186.958,211.919,157.846,224.96C128.734,238,128.734,249,128.734,254.5L128.734,260"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_B_D_0" d="M375.828,190L375.828,196.167C375.828,202.333,375.828,214.667,375.828,226.333C375.828,238,375.828,249,375.828,254.5L375.828,260"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_B_E_0" d="M448.25,181.708L477.473,189.256C506.695,196.805,565.141,211.903,594.363,224.951C623.586,238,623.586,249,623.586,254.5L623.586,260"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_C_F_0" d="M128.734,318L128.734,324.167C128.734,330.333,128.734,342.667,128.734,354.333C128.734,366,128.734,377,128.734,382.5L128.734,388"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_D_G_0" d="M375.828,318L375.828,324.167C375.828,330.333,375.828,342.667,375.828,354.333C375.828,366,375.828,377,375.828,382.5L375.828,388"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_E_H_0" d="M623.586,318L623.586,324.167C623.586,330.333,623.586,342.667,623.586,354.333C623.586,366,623.586,377,623.586,382.5L623.586,388"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_F_I_0" d="M128.734,446L128.734,452.167C128.734,458.333,128.734,470.667,128.734,482.333C128.734,494,128.734,505,128.734,510.5L128.734,516"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_G_J_0" d="M375.828,446L375.828,452.167C375.828,458.333,375.828,470.667,375.828,482.333C375.828,494,375.828,505,375.828,510.5L375.828,516"></path><path marker-end="url(#mermaid-diagram-mermaid-ik6hf5q_flowchart-v2-pointEnd)" style="" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" id="L_H_K_0" d="M623.586,446L623.586,452.167C623.586,458.333,623.586,470.667,623.586,482.333C623.586,494,623.586,505,623.586,510.5L623.586,516"></path></g><g class="edgeLabels"><g transform="translate(375.828125, 99)" class="edgeLabel"><g transform="translate(-48.59375, -12)" class="label"><foreignObject height="24" width="97.1875"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>authenticates</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 227)" class="edgeLabel"><g transform="translate(-30.171875, -12)" class="label"><foreignObject height="24" width="60.34375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>accesses</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 227)" class="edgeLabel"><g transform="translate(-30.171875, -12)" class="label"><foreignObject height="24" width="60.34375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>accesses</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 227)" class="edgeLabel"><g transform="translate(-30.171875, -12)" class="label"><foreignObject height="24" width="60.34375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>accesses</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 355)" class="edgeLabel"><g transform="translate(-30.6875, -12)" class="label"><foreignObject height="24" width="61.375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>manages</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 355)" class="edgeLabel"><g transform="translate(-13.7109375, -12)" class="label"><foreignObject height="24" width="27.421875"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>logs</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 355)" class="edgeLabel"><g transform="translate(-29.9140625, -12)" class="label"><foreignObject height="24" width="59.828125"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>requests</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 483)" class="edgeLabel"><g transform="translate(-21.1171875, -12)" class="label"><foreignObject height="24" width="42.234375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>stores</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 483)" class="edgeLabel"><g transform="translate(-21.1171875, -12)" class="label"><foreignObject height="24" width="42.234375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>stores</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 483)" class="edgeLabel"><g transform="translate(-19.421875, -12)" class="label"><foreignObject height="24" width="38.84375"><div class="labelBkg" xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="edgeLabel"><p>sends</p></span></div></foreignObject></g></g></g><g class="nodes"><g transform="translate(375.828125, 35)" id="flowchart-A-0" class="node default"><rect height="54" width="91.40625" y="-27" x="-45.703125" style="" class="basic label-container"></rect><g transform="translate(-15.703125, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="31.40625"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>User</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 163)" id="flowchart-B-1" class="node default"><rect height="54" width="144.84375" y="-27" x="-72.421875" style="" class="basic label-container"></rect><g transform="translate(-42.421875, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="84.84375"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Role System</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 291)" id="flowchart-C-3" class="node default"><rect height="54" width="182.75" y="-27" x="-91.375" style="" class="basic label-container"></rect><g transform="translate(-61.375, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="122.75"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Admin Dashboard</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 291)" id="flowchart-D-5" class="node default"><rect height="54" width="211.4375" y="-27" x="-105.71875" style="" class="basic label-container"></rect><g transform="translate(-75.71875, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="151.4375"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Shipping Agent Portal</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 291)" id="flowchart-E-7" class="node default"><rect height="54" width="184.078125" y="-27" x="-92.0390625" style="" class="basic label-container"></rect><g transform="translate(-62.0390625, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="124.078125"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Logistics Manager</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 419)" id="flowchart-F-9" class="node default"><rect height="54" width="241.46875" y="-27" x="-120.734375" style="" class="basic label-container"></rect><g transform="translate(-90.734375, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="181.46875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Access Point Management</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 419)" id="flowchart-G-11" class="node default"><rect height="54" width="141.890625" y="-27" x="-70.9453125" style="" class="basic label-container"></rect><g transform="translate(-40.9453125, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="81.890625"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Access Logs</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 419)" id="flowchart-H-13" class="node default"><rect height="54" width="239.515625" y="-27" x="-119.7578125" style="" class="basic label-container"></rect><g transform="translate(-89.7578125, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="179.515625"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Elevated Access Requests</p></span></div></foreignObject></g></g><g transform="translate(128.734375, 547)" id="flowchart-I-15" class="node default"><rect height="54" width="211.65625" y="-27" x="-105.828125" style="" class="basic label-container"></rect><g transform="translate(-75.828125, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="151.65625"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Google Cloud Storage</p></span></div></foreignObject></g></g><g transform="translate(375.828125, 547)" id="flowchart-J-17" class="node default"><rect height="54" width="138.171875" y="-27" x="-69.0859375" style="" class="basic label-container"></rect><g transform="translate(-39.0859375, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="78.171875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>PostgreSQL</p></span></div></foreignObject></g></g><g transform="translate(623.5859375, 547)" id="flowchart-K-19" class="node default"><rect height="54" width="193.6875" y="-27" x="-96.84375" style="" class="basic label-container"></rect><g transform="translate(-66.84375, -12)" style="" class="label"><rect></rect><foreignObject height="24" width="133.6875"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Email Notifications</p></span></div></foreignObject></g></g></g></g></g></svg>

**Testing**:
- Unit tests: `bundle exec rspec spec/models/user_spec.rb`
- System tests: `bundle exec rspec spec/system/agent_login_spec.rb`, `bundle exec rspec spec/system/restricted_area_access_spec.rb`

---

### 🔗 Links and Resources

- <a href="https://final-project-jk9d.onrender.com" target="_blank" rel="noopener noreferrer">Live Application Website</a>
- <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
- <a href="https://www.youtube.com/watch?v=8h-CNthscBM" target="_blank" rel="noopener noreferrer">Project Presentation Video</a>
- <a href="https://github.com/willmaddock/final-project/blob/SprintDeployment/README.md" target="_blank" rel="noopener noreferrer">Project README</a>
- <a href="../../Proposal.pdf" target="_blank" rel="noopener noreferrer">Project Proposal</a>
- <a href="../../Final Project Exploration Approval.pdf" target="_blank" rel="noopener noreferrer">Exploration Approval</a>
- <a href="../../Customer%20Requirements%20Report.pdf" target="_blank" rel="noopener noreferrer">Requirements Report</a>
- <a href="../../Wills Final Project Sprint 01.pdf" target="_blank" rel="noopener noreferrer">Sprint 01 Report</a>
- <a href="../../Final_Project_Sprint02_Presentation.pdf" target="_blank" rel="noopener noreferrer">Sprint 02 Presentation</a>
- <a href="../../Final_Project_Presentation.pdf" target="_blank" rel="noopener noreferrer">Final Presentation</a>
- <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>
- <a href="https://guides.rubyonrails.org" target="_blank" rel="noopener noreferrer">Ruby on Rails Guides</a>
- <a href="https://accessibility.blog.gov.uk" target="_blank" rel="noopener noreferrer">GOV.UK Accessibility Blog</a>
- <a href="https://render.com/docs" target="_blank" rel="noopener noreferrer">Render Deployment Docs</a>

*© 2024 William Maddock - All Rights Reserved*
