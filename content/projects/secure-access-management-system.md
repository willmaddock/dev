---
title: "Secure Access Management System"
date: "2025-08-13T03:44:17-06:00"
draft: false
description: "Rails-based web application implementing secure role-based access control, clearance management, and accessibility-first design."
tags: ["ruby-on-rails", "web-development", "rbac", "security", "accessibility"]
linkTitle: "Secure Access Management"
menu:
  projects:
    weight: 2
---

<p style="text-align:center;">
  <img src="../../img/secure.png" alt="Secure Access Management System" style="width:200%; max-width:800px;" />
</p>

As the founder and lead developer, I designed and implemented this Rails-based application to provide **role-based access control (RBAC)**, **security clearance management**, and an **accessibility-focused user experience**.

👉 <a href="https://final-project-jk9d.onrender.com" target="_blank" rel="noopener noreferrer"><strong>View Live Application Website</strong></a> — <a href="https://final-project-jk9d.onrender.com" target="_blank" rel="noopener noreferrer">https://final-project-jk9d.onrender.com</a>

👉 <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment" target="_blank" rel="noopener noreferrer"><strong>View GitHub Repository</strong></a> — <a href="https://github.com/willmaddock/final-project/tree/SprintDeployment" target="_blank" rel="noopener noreferrer">https://github.com/willmaddock/final-project/tree/SprintDeployment</a>

▶️ <a href="https://www.youtube.com/watch?v=8h-CNthscBM" target="_blank" rel="noopener noreferrer"><strong>Project Presentation Video</strong></a> — <a href="https://www.youtube.com/watch?v=8h-CNthscBM" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=8h-CNthscBM</a>

---

### 🔍 Project Highlights
- **Dynamic RBAC** for Admin, Shipping Agent, and Logistics Manager
- **Real-time feedback** for unauthorized access attempts
- **Persistent file uploads** via Google Cloud Storage
- **Responsive UI** with Bootstrap and Dark Mode toggle
- **Upload validation** to prevent memory overload
- **Seed system** for instant demo data
- **Accessibility-first** design (ARIA roles, high contrast, keyboard nav)

---

### 📦 Tools & Skills
- **Languages/Frameworks**: Ruby on Rails, HTML5, CSS3, JavaScript, Bootstrap
- **Database**: PostgreSQL
- **Storage**: Google Cloud Storage via Active Storage
- **Testing**: RSpec, Capybara
- **Deployment**: Render (256 MB free tier)
- **DevOps**: Puma tuning, asset pipeline
- **Focus Areas**: Secure onboarding, reproducibility, accessibility

---

### 📁 Repository Structure
| File/Folder | Description |
|-------------|-------------|
| `app/models` | ActiveRecord models and validations |
| `app/controllers` | Controller logic and seed trigger |
| `app/views` | Responsive ERB templates |
| `db/migrate` | Database schema migrations |
| `db/seeds.rb` | Demo dataset creation |
| `spec/` | RSpec unit and system tests |
| `config/puma.rb` | Puma config for low-RAM environments |
| `config/storage.yml` | Google Cloud Storage configuration |

---

### 📈 Key Outcomes
- Zero downtime during uploads on 256 MB RAM
- Persistent assets via cloud-backed storage
- Fast onboarding with auto-seeding
- Production-ready secure access workflows
- Comprehensive test coverage (97% model coverage)

📄 **Project Documentation**:  
<a href="../../Proposal.pdf" target="_blank" rel="noopener noreferrer">Proposal</a> •
<a href="../../Final Project Exploration Approval.pdf" target="_blank" rel="noopener noreferrer">Approval</a> •
<a href="../../Customer%20Requirements%20Report.pdf" target="_blank" rel="noopener noreferrer">Requirements Report</a> •
<a href="../../Wills Final Project Sprint 01.pdf" target="_blank" rel="noopener noreferrer">Sprint01</a> •
<a href="../../Final_Project_Sprint02_Presentation.pdf" target="_blank" rel="noopener noreferrer">Sprint02</a> •
<a href="../../Final_Project_Presentation.pdf" target="_blank" rel="noopener noreferrer">Final Presentation</a> 

---

### 💡 Reproduction & Deployment
```bash
# Clone repository
git clone https://github.com/willmaddock/final-project.git
cd final-project

# Install dependencies
bundle install

# Setup database
bundle exec rails db:drop db:create db:migrate
bundle exec rails db:seed

# Start server
rails server
```

# Default Login:
### 📧 logistics_manager@example.com
### 🔑 password

# Render Deployment:
- Build Command: bundle install && bundle exec rails assets:precompile
- Start Command: bundle exec puma -C config/puma.rb

# Environment Variables:

- RAILS_ENV: production
- RAILS_MASTER_KEY: your_master_key
- DATABASE_URL: postgres://user:pass@host:port/dbname
- WEB_CONCURRENCY: 1
- RAILS_MAX_THREADS: 3

# Google Cloud Storage credentials...

## 🧠 System Architecture

```mermaid
graph TD
    A[User] -->|authenticates| B[Role System]
    B --> C[Admin Dashboard]
    B --> D[Shipping Agent Portal]
    B --> E[Logistics Manager]
    C --> F[Access Point Management]
    D --> G[Access Logs]
    E --> H[Elevated Access Requests]
    F --> I[Google Cloud Storage]
    G --> J[PostgreSQL]
    H --> K[Email Notifications]
```

# Run unit tests
- bundle exec rspec spec/models/user_spec.rb

# Run system tests
- bundle exec rspec spec/system/agent_login_spec.rb
- bundle exec rspec spec/system/restricted_area_access_spec.rb

# Test coverage includes:

- Role permission validations
- Dark mode toggle functionality
- Unauthorized access redirects
- File upload constraints
- Accessibility compliance checks

# 🗓️ Development Sprints

- Sprint 01: Project setup, model scaffolding, routing
- Progress Report
- Sprint 02: RBAC implementation, UI enhancements
- Progress Report
- Sprint 03: Accessibility features, deployment prep
- Sprint 04: Final Presentation, Deployed via Render

### 📚 Resources

<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>  
<a href="https://guides.rubyonrails.org" target="_blank" rel="noopener noreferrer">Ruby on Rails Guides</a>  
<a href="https://accessibility.blog.gov.uk" target="_blank" rel="noopener noreferrer">GOV.UK Accessibility Blog</a>  
<a href="https://render.com/docs" target="_blank" rel="noopener noreferrer">Render Deployment Docs</a>

This project was developed for educational purposes.


*© 2025 William Maddock - All Rights Reserved*

