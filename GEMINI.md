# Project: Personal Portfolio Website

## Project Overview

This is a personal portfolio website for Kiss Márton (online alias: Ophiuchus), designed to showcase his profile, professional experience, education, and skills. The website is built using fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity. It features a clean, modern, and elegant design with a focus on readability and user experience.

Key features include:
-   **Responsive Design Principles:** Styled to look good across various screen sizes (though further refinement for specific breakpoints could be added).
-   **Smooth Scrolling Navigation:** Navigation links in the header smoothly scroll to their respective sections on the page.
-   **"Back to Top" Button:** A button appears when the user scrolls down, allowing for quick navigation back to the top of the page.
-   **Language Switcher:** Users can switch between Hungarian (HU) and English (EN) versions of the content, enhancing accessibility for a broader audience.
-   **Personalized Content:** All content is integrated from Kiss Márton's provided profile information.

## Building and Running

### Local Development

The project is a static website and can be easily run locally using Python's built-in HTTP server.

1.  **Navigate to the project root directory** in your terminal or command prompt:
    ```bash
    cd C:\Users\kissm\gemini-cli
    ```
2.  **Start the local HTTP server:**
    ```bash
    python -m http.server
    ```
3.  **Open your web browser** and go to:
    ```
    http://localhost:8000
    ```

### Deployment

The project is deployed using GitHub Pages. It is configured to be unindexed by search engines via a `robots.txt` file, making it accessible only to those with the direct link.

**Deployment Steps (via GitHub Pages):**

1.  **Initialize Git:** Ensure Git is installed and initialized in the project directory (`git init`).
2.  **Configure Git Identity:** Set your Git user name and email (`git config --global user.name "Your Name"`, `git config --global user.email "you@example.com"`).
3.  **Add Files:** Stage all project files for commit (`git add .`).
4.  **Commit Changes:** Commit the staged files (`git commit -m "Initial commit"`).
5.  **Create GitHub Repository:** Create a new **public** repository on GitHub (do not initialize with README, .gitignore, etc.).
6.  **Push to GitHub:** Link your local repository to the GitHub remote and push your code (e.g., `git remote add origin <repo_url>`, `git branch -M main`, `git push -u origin main`).
7.  **Enable GitHub Pages:** In your GitHub repository settings, navigate to "Pages", select "Deploy from a branch", choose the `main` branch and `/ (root)` folder, then click "Save".
8.  **Access Live Site:** Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/` after a few minutes.

## Development Conventions

*   **HTML Structure:** Uses semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) for clear document outline and accessibility.
*   **CSS Styling:** All styling is managed in an external `style.css` file. It employs a clean aesthetic with a dark header/footer, light content sections, and subtle use of different gray shades for visual hierarchy. Flexbox is used for layout (e.g., navigation, skill tags).
*   **JavaScript Interactivity:** All dynamic behavior is handled by an external `script.js` file. This includes:
    *   Smooth scrolling for internal navigation links.
    *   A "Back to Top" button that appears on scroll.
    *   A comprehensive language switching mechanism using a `translations` JavaScript object and `data-key` attributes in HTML.
*   **Internationalization (i18n):** Content is prepared for two languages (Hungarian and English) using `data-key` attributes on HTML elements and a centralized `translations` object in JavaScript for easy management and switching.
*   **Version Control:** The project is managed with Git, facilitating tracking changes and collaboration (though currently a solo project).
*   **Search Engine Opt-out:** A `robots.txt` file is included to explicitly disallow all web crawlers, ensuring the site is not indexed by search engines.
*   **File Organization:** A simple, flat file structure is used for this small project, with HTML, CSS, and JS files in the root directory.
