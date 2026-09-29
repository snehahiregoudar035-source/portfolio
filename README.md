# Sneha B H — Personal Portfolio

A responsive, single-page portfolio for Sneha B H, a second-year Computer Science and Engineering student and aspiring software developer. Built with semantic HTML, CSS, and vanilla JavaScript; it does not require a backend or package installation.

## Features

- Responsive layouts for desktop, tablet, and mobile
- Fixed navigation, mobile menu, and active-section highlighting
- Light and dark themes with the selected theme saved in the browser
- Scroll reveal effects, smooth anchor scrolling, and back-to-top control
- Skills, education timeline, project cards, certificate placeholders, and editable achievement placeholders
- Client-side contact validation that opens a prefilled email in the visitor's mail app
- A generated starter resume download that can be replaced with a real PDF

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Folder structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    ├── certificates/
    └── resume/
```

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` in a browser, or install the **Live Server** VS Code extension, right-click `index.html`, and select **Open with Live Server**.
3. No build step or dependencies are required. Google Fonts and the sample photos load from the internet; the system font fallbacks still work offline.

## Customize

- **Contact and social links:** Search `sneha@example.com`, `https://github.com/`, and `https://www.linkedin.com/` in `index.html`. Replace the placeholders with your actual details. Also update the recipient in the contact form handler in `script.js`.
- **Profile photo:** Replace the `src` on the `.portrait-frame img` element in `index.html` with a photo placed in `assets/images/`, for example `assets/images/profile.jpg`.
- **Project links:** Replace each project card's GitHub placeholder URL. Replace its `#contact` Live demo link with a deployed demo URL when one exists.
- **Resume:** The current button downloads a starter `.txt` resume assembled in `script.js`. Add a PDF to `assets/resume/` and update the resume button/handler when ready.
- **Certificates:** Put certificate images in `assets/certificates/`, then duplicate and edit a `.credential-card` in the certificates section of `index.html`.
- **Achievements and education:** Edit the matching section content directly in `index.html`; no dates or institution names have been invented.
- **Colors and layout:** Edit the CSS custom properties at the top of `style.css`.

The contact form is frontend-only. It validates the fields in the browser and opens a prefilled email; it does not send or store messages itself.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the contents of this project folder (keep `index.html` at the repository root).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to finish its deployment and open the URL shown on the Pages settings screen.

Use a public repository for a free GitHub Pages site. After changing links or assets, commit and push the updated files; Pages will redeploy automatically.
