# Personal Portfolio Site: A Meta Adventure in Self-Promotion

[![Portfolio Screenshot](./static/img/portfolio.png)](https://willmaddock.github.io/dev/)

Welcome to my personal portfolio site! This is a fast, responsive static site built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. It's deployed on GitHub Pages and serves as a showcase for my skills, projects, experience, education, and certifications in software engineering, data science, and cloud computing. 

Think of it as a meta masterpiece: a site that documents my work while demonstrating my web development prowess. It's professional yet playful, with searchable content, embedded media, and even a self-referential project page (because why not?).

Live site: [willmaddock.github.io/dev](https://willmaddock.github.io/dev)

## Features

- **Responsive Design**: Looks great on any device, thanks to PaperMod's flexible theme.
- **Search Functionality**: Powered by Fuse.js—quickly find content like projects or skills.
- **Custom Navigation**: Easy access to sections: About, Experience, Resume, Projects, Education, and Search.
- **Embedded Media**: Includes PDFs (e.g., resumes, reports), images, and links to external repos/tools.
- **Meta Fun**: Self-documenting elements, like a project page about the site itself—recursion at its finest!
- **Automated Deployment**: GitHub Actions handles builds and deploys on every push to `main`.
- **Open-Source Ready**: Fork and customize it for your own portfolio.

## Technologies Used

- **Static Site Generator**: Hugo (Go-based for speed and simplicity).
- **Theme**: PaperMod (responsive and customizable Hugo theme).
- **Content**: Markdown files for easy editing, TOML for configuration.
- **Deployment**: GitHub Pages with GitHub Actions (YAML workflows for CI/CD).
- **Search**: Fuse.js integrated via PaperMod.
- **Version Control**: Git, with submodules for themes.
- **Other**: HTML/CSS/JS tweaks, SEO optimizations, and open-source best practices.

## Installation and Setup

To run this site locally or customize it for yourself:

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (extended version recommended for SCSS support).
- Git.

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/willmaddock/dev.git
   cd dev
   ```

2. Initialize and update submodules (for the PaperMod theme):
   ```
   git submodule update --init --recursive
   ```

3. Install Hugo if not already installed (e.g., on macOS via Homebrew):
   ```
   brew install hugo
   ```

4. Run the local server:
   ```
   hugo server
   ```
   Visit [http://localhost:1313/dev/](http://localhost:1313/dev/) in your browser. The `/dev/` path is the baseURL set in `hugo.toml`.

5. Make changes: Edit content in the `content/` directory (Markdown files), static assets in `static/`, or config in `hugo.toml`.

## Usage

- **Adding Content**: Create new Markdown files in `content/projects/`, `content/experience/`, etc. Follow the frontmatter format (e.g., title, date, tags).
- **Customizing Theme**: Modify layouts or styles in `themes/PaperMod/` (but consider forking the theme for updates).
- **Building the Site**: Run `hugo` to generate static files in `public/`.
- **Fun Tip**: Add your own "Easter eggs" like meta references to keep it entertaining!

## Deployment

This site deploys automatically to GitHub Pages via GitHub Actions:

1. Push changes to the `main` branch.
2. The workflow in `.github/workflows/hugo.yaml` builds the site and deploys to the `gh-pages` branch.
3. Custom domain? Update `hugo.toml` baseURL and add a CNAME file in `static/`.

For manual deployment:
```
hugo
```
Then commit the `public/` folder or use GitHub Pages settings.

## Repository Structure

- `content/`: All site pages (about.md, projects/, etc.).
- `static/`: Images, PDFs, resumes.
- `themes/PaperMod/`: Theme submodule.
- `.github/workflows/`: GitHub Actions for CI/CD.
- `hugo.toml`: Site configuration (menu, theme settings, search options).
- `README.md`: This file!
- `.gitignore`: Ignores generated files like `public/`.

## Contributing

Feel free to fork and remix! If you'd like to contribute:
- Open an issue for suggestions.
- Submit a pull request with improvements.
- Licensed under MIT—see [LICENSE](LICENSE) for details.

## Acknowledgments

- Huge thanks to the [Hugo team](https://gohugo.io/) for an awesome SSG.
- Shoutout to [adityatelange](https://github.com/adityatelange) for the PaperMod theme.
- Props to GitHub for free hosting and Actions.
- Special mention to Grok (by xAI) for brainstorming ideas—AI-assisted creativity rocks!

If this project sparks joy or inspiration, star the repo or drop a note. Let's build cool things! 🚀

© 2025 William Maddock
