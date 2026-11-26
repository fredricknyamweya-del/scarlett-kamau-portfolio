/* Portfolio content lives here so the profile can be edited in one place. */
const profile = {
  name: "Scarlett Wanjiru Kamau",
  title: "Occupational Therapy Graduate | Paediatric & Rehabilitation Care",
  tagline: "Empowering independence, one small step at a time.",
  location: "Nairobi, Kenya",
  email: "wanjirukamau311@gmail.com",
  emailSubject: "Hello%20Scarlett",
  linkedin: "https://www.linkedin.com/in/scarlet-kamau-79871341b/",
  about: "Dedicated and compassionate Occupational Therapy graduate with clinical attachment experience at Kenyatta National Hospital (KNH) and the Kenya Institute of Special Education (KISE). She supports children and adults through interventions that improve functional independence, participation and quality of life. She is looking for a role in a healthcare, rehabilitation, school or special-needs setting.",
  skills: [
    "Paediatric Occupational Therapy", "Sensory Integration", "Fine and Gross Motor Activities",
    "Play-Based Intervention", "Activities of Daily Living (ADLs)", "Self-Care Training",
    "Functional Assessment", "Therapeutic Activities", "Developmental Support",
    "Child-Centred Intervention", "Environmental Modification", "Documentation and Reporting",
    "Multidisciplinary Collaboration"
  ],
  experience: [
    {
      title: "Paediatric Occupational Therapy Clinical Attachment, Kenya Institute of Special Education (KISE)",
      bullets: [
        "Supported children with developmental and functional difficulties.",
        "Took part in fine motor and gross motor activities.",
        "Assisted with sensory integration and sensory-based activities.",
        "Used play-based activities to promote development and participation.",
        "Supported self-care and activities of daily living.",
        "Worked alongside professionals and caregivers to meet children's individual needs."
      ]
    },
    {
      title: "Occupational Therapy Clinical Attachment, Kenyatta National Hospital (KNH)",
      bullets: [
        "Took part in occupational therapy assessment and intervention under supervision.",
        "Supported patients in activities of daily living and functional activities.",
        "Delivered therapeutic activities aimed at improving independence and participation.",
        "Gained experience in rehabilitation and multidisciplinary healthcare practice.",
        "Assisted with documentation and communication on patient progress."
      ]
    }
  ],
  education: "Diploma in Occupational Therapy, Kenya Medical Training College (KMTC), Machakos",
  research: {
    title: "Effects of Burn Injury on Activities of Daily Living among Patients Aged 19–60 Years at Kenyatta National Hospital.",
    description: "She took part in data collection, analysis and interpretation, and developed skills in research, communication and professional documentation."
  },
  sdgs: [
    { number: "3", label: "Good Health & Well-being", colour: "#3FA535", note: "Supporting health, participation and independence through occupational therapy." },
    { number: "4", label: "Quality Education", colour: "#C8202F", note: "Supporting children's development and participation in learning environments." },
    { number: "5", label: "Gender Equality", colour: "#F57C1F", note: "Promoting inclusive, person-centred support for every individual." },
    { number: "10", label: "Reduced Inequalities", colour: "#E5247F", note: "Helping individuals access opportunities for greater functional independence." }
  ],
  referees: "Available upon request",
  footerYear: "2026"
};

const qs = (selector) => document.querySelector(selector);

/* Render the profile content from the object above. */
qs("#nav-name").textContent = profile.name;
qs("#hero-name").textContent = profile.name;
qs("#hero-title").textContent = profile.title;
qs("#hero-tagline").textContent = profile.tagline;
qs("#hero-location").textContent = profile.location;
qs("#linkedin-label").textContent = "Connect on LinkedIn";
qs("#email-label").textContent = "Email Me";
qs("#about-text").textContent = profile.about;
qs("#education-text").textContent = profile.education;
qs("#research-title").textContent = profile.research.title;
qs("#research-description").textContent = profile.research.description;
qs("#contact-location").textContent = profile.location;
qs("#referees-text").textContent = profile.referees;
qs("#email-visible").textContent = profile.email;
qs("#footer-location").textContent = profile.location;
qs("#footer-text").textContent = `© ${profile.footerYear} ${profile.name}`;
qs("#footer-email").textContent = profile.email;

const mailto = `mailto:${profile.email}?subject=${profile.emailSubject}`;
["#email-hero", "#email-contact", "#footer-email"].forEach((selector) => {
  qs(selector).setAttribute("href", mailto);
});
["#linkedin-hero", "#linkedin-contact"].forEach((selector) => {
  qs(selector).setAttribute("href", profile.linkedin);
});

const skillList = qs("#skill-list");
profile.skills.forEach((skill) => {
  const pill = document.createElement("span");
  pill.className = "skill-pill";
  pill.textContent = skill;
  skillList.appendChild(pill);
});

const experienceList = qs("#experience-list");
profile.experience.forEach((item) => {
  const article = document.createElement("article");
  article.className = "timeline-item reveal";

  const marker = document.createElement("span");
  marker.className = "timeline-marker";
  marker.setAttribute("aria-hidden", "true");

  const card = document.createElement("div");
  card.className = "timeline-card";
  const heading = document.createElement("h3");
  heading.textContent = item.title;
  const list = document.createElement("ul");
  item.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    list.appendChild(li);
  });
  card.append(heading, list);
  article.append(marker, card);
  experienceList.appendChild(article);
});

const sdgList = qs("#sdg-list");
profile.sdgs.forEach((sdg) => {
  const card = document.createElement("article");
  card.className = "sdg-card reveal";
  const badge = document.createElement("div");
  badge.className = "sdg-badge";
  badge.style.backgroundColor = sdg.colour;
  const number = document.createElement("strong");
  number.textContent = sdg.number;
  const label = document.createElement("span");
  label.textContent = sdg.label;
  badge.append(number, label);
  const note = document.createElement("p");
  note.className = "sdg-note";
  note.textContent = sdg.note;
  card.append(badge, note);
  sdgList.appendChild(card);
});

/* Light and dark theme toggle, with saved preference support. */
const themeToggle = qs("#theme-toggle");
const savedTheme = (() => {
  try { return localStorage.getItem("portfolio-theme"); }
  catch (_error) { return null; }
})();
const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  const dark = theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
};
applyTheme(preferredTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try { localStorage.setItem("portfolio-theme", nextTheme); }
  catch (_error) { /* Theme still works when storage is unavailable. */ }
});

/* Mobile navigation */
const menuToggle = qs(".menu-toggle");
const navLinks = qs("#nav-links");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
  menuToggle.classList.toggle("open", !open);
  navLinks.classList.toggle("open", !open);
});
navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  }
});

/* Scroll reveal with reduced-motion support. */
const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

/* Draw the hero heartbeat once when it is visible. */
const heartbeat = qs(".heartbeat-line");
if (reduceMotion) {
  heartbeat.style.strokeDashoffset = "0";
} else {
  const heartbeatObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      heartbeat.classList.add("draw");
      observer.disconnect();
    }
  }, { threshold: 0.2 });
  heartbeatObserver.observe(qs(".heartbeat-divider"));
}

/* Highlight the navigation link for the section nearest the top. */
const navItems = [...navLinks.querySelectorAll("a")];
const sections = navItems.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
sections.forEach((section) => activeObserver.observe(section));

/* Copy email with keyboard-accessible feedback. */
const copyButton = qs("#copy-email");
const copyFeedback = qs("#copy-feedback");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch (_error) {
    const input = document.createElement("textarea");
    input.value = profile.email;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  copyFeedback.textContent = "Copied!";
  copyButton.textContent = "Email copied";
  window.setTimeout(() => {
    copyFeedback.textContent = "";
    copyButton.textContent = "Copy email";
  }, 2200);
});

/* Back to top */
qs("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});
