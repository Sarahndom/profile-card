
🌟 HNG Profile Site (Stages 0 & 1)

A responsive, accessible multi-page profile site built for the HNG Internship (Stages 0 and 1). This project includes a dynamic Profile Card, an "About Me" page, and a "Contact Us" page with form validation.

🚀 Features

* **General**
    * Fully responsive design (mobile, tablet, desktop)
    * Semantic HTML5 structure across all pages
    * Accessible (WCAG) with alt text, ARIA attributes, and keyboard navigation
    * Includes `data-testid` attributes for all key elements for automated testing
    * Consistent multi-page navigation

* **Stage 0: Profile Card (`index.html`)**
    * Displays user profile information (avatar, bio, social links).
    * Shows the dynamic current time in milliseconds (`Date.now()`).

* **Stage 1: About Page (`about.html`)**
    * A structured, reflective page detailing goals, experiences, and notes.

* **Stage 1: Contact Page (`contact.html`)**
    * A complete contact form with client-side validation using vanilla JavaScript.
    * Shows accessible error messages and a success confirmation.

🧩 Technologies

* **HTML5** (Semantic)
* **CSS3** (Flexbox, Media Queries)
* **Vanilla JavaScript** (DOM manipulation, Date object, Form validation)

📂 Project Structure

/
├── index.html     (Stage 0: Profile Card)
├── about.html     (Stage 1: About Me)
├── contact.html   (Stage 1: Contact Us)
├── style.css      (Shared Styles)
├── script.js      (JS for Profile Card time)
└── contact.js     (JS for Contact Form validation)

🖼️ Live Demo

🔗 **[View Live on Netlify] (https://hng-project-profile-card.netlify.app/)**


💻 How to Run Locally

1.  Clone the repo:
    ```sh
    git clone [https://github.com/Sarahndom/profile-card.git](https://github.com/Sarahndom/profile-card.git)
    ```
2.  Navigate to the directory:
    ```sh
    cd profile-card
    ```
3.  Open `index.html` in your browser.