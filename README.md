# Abby Photography
This webpage is designed to showcase my friend's passion for photography, allowing users to browse diverse range of subjects and have access updated content. It features a dynamic gallery and through the contact form the user is free to reach out and share their thoughts with the photographer.

## Technologies
- HTML5 & CSS
- JavaScript(for contact form)
- Elastic Email (for contact form)
- GitHub Actions (for CI/CD)

## Branches

### `main` Branch
- The `main` branch contains the core development of the project.
- It includes all the folders and files for the website's structure, such as:
  - **Home**, **Gallery**, **Portraits**, **Street**, and **Travel** directories.
  - Configuration files like `.htmlhintrc`, `.stylelintrc`, `robots.txt`.
  - HTML files like `404.html`,`index.html`,`gallery.html`, `about.html`, `contact.html`, `portraits.html`, `travel.html`, `street.html`,
  - Style and script files: `style.css`, `myScript.js`.

### `gh-pages` Branch
- The `gh-pages` branch is used for deploying the website using GitHub Pages.
- This branch is automatically generated from the content of the `main` branch and is configured to deploy the site.
- When new changes are pushed to `main`, the `gh-pages` branch can be updated to reflect those changes for deployment.

### Deployment Process
1. Develop and commit changes to the `main` branch.
2. After testing, merge the changes into the `gh-pages` branch for deployment.
3. GitHub Pages will serve the site from the `gh-pages` branch, making the site live at `https://your-username.github.io/your-repository/`.

### Deployment Automation using GitHub Actions
- A workflow file located in `.github/workflows` automatically triggers the deployment to the `gh-pages` branch whenever changes are pushed to `main`.
- The workflow builds the project and pushes the build output to the `gh-pages` branch for deployment.


## Project Structure
├── .github
│   └── workflows          # CI/CD configuration files
├── Gallery
│   └── gallery.html       # Gallery page displaying various images
├── Home
│   └── index.html         # Home page of the website
├── Portraits
│   └── portraits.html     # Portrait photography page
├── Street
│   └── street.html        # Street photography page
├── Travel
│   └── travel.html        # Travel photography page
├── .htmlhintrc            # Configuration file for HTMLHint
├── .stylelintrc           # Configuration file for Stylelint
├── 404.html               # Custom 404 error page
├── index.html             # Home page displaying various images
├── gallery.html           # Gallery page displaying various images
├── about.html             # About page of the website
├── contact.html           # Contact page with form functionality
├── robot.txt              # Directives for search engine crawlers
├── style.css              # Main stylesheet for the website
├── myScript.js            # Custom JavaScript for interactivity
