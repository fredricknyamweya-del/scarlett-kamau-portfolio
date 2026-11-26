# Scarlett Wanjiru Kamau | Portfolio

A single-page portfolio website for **Scarlett Wanjiru Kamau**, an Occupational Therapy graduate based in Nairobi, Kenya. It presents her clinical experience, skills, education, research and commitment to the Sustainable Development Goals, with direct links to her LinkedIn profile and email.

**Live site:** https://fredricknyamweya-del.github.io/scarlett-kamau-portfolio/

## Features

- Single-page layout with smooth scrolling and a sticky navigation bar
- Sections: Hero, About, Skills, Clinical Experience, Education and Research, SDGs, Contact
- Links to LinkedIn and email, plus a copy-email button
- Light and dark theme toggle
- Fully responsive, from small phones to wide desktops
- Accessible: semantic HTML, keyboard navigation and visible focus states
- All content kept in one file for easy editing

## Tech stack

- HTML5, CSS3 and vanilla JavaScript
- [Bootstrap 5.3](https://getbootstrap.com/) for the grid, navbar and scrollspy
- [Tailwind CSS](https://tailwindcss.com/) (CDN, `tw-` prefix) for utility styling
- Google Fonts: Playfair Display and Nunito Sans

Bootstrap handles structure and behaviour. Tailwind handles visual polish. Tailwind runs with `prefix: 'tw-'` and `preflight: false`, so the two frameworks do not clash.

## Folder structure

```
scarlett-kamau-portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css        # theme variables, gradients, overrides
├── js/
│   ├── data.js          # all editable content (profile object)
│   └── main.js          # rendering, nav highlight, copy email, theme toggle
├── images/
│   ├── profile.jpg      # profile photo
│   ├── banner.png       # LinkedIn banner / Open Graph image
│   └── favicon.svg
└── assets/
    └── svg/             # decorative line-art
```

## Run locally

No build step is needed.

```bash
git clone git@github.com:fredricknyamweya-del/scarlett-kamau-portfolio.git
cd scarlett-kamau-portfolio
open index.html
```

Or serve it with a simple local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customise

- **Content:** edit `js/data.js` (name, about text, skills, experience, education, research, SDGs, links).
- **Photo:** save her photo as `images/profile.jpg`. If it is missing, the page shows her initials.
- **Colours and fonts:** change the CSS variables at the top of `css/style.css` and the matching colours in the Tailwind config inside `index.html`.

## Deploy on GitHub Pages

1. Push the files to the `main` branch.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Save. The site goes live in a minute or two.

## Contact

- LinkedIn: [scarlet-kamau](https://www.linkedin.com/in/scarlet-kamau-79871341b/)
- Email: wanjirukamau311@gmail.com

© 2026 Scarlett Wanjiru Kamau
