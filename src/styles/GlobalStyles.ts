import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  /*  Brand Colors */
  --wa-green: #25D366;
  --wa-dark-green: #128C7E;
  --wa-teal-green: #075E54;
  --wa-light-green: #DCF8C6;
  --wa-blue-accent: #34B7F1;

  /* Light Theme */
  --wa-bg-light: #e9e3ddff;
  --wa-chat-bg-light: #FFFFFF;
  --wa-incoming-msg-light: #FFFFFF;
  --wa-sent-msg-light: #DCF8C6;
  --wa-text-primary-light: #111B21;
  --wa-text-secondary-light: #667781;
  --wa-input-bg-light: #F0F2F5;
  --wa-border-light: #E9EDEF;

  /* Dark Theme */
  --wa-bg-dark: #121B22;
  --wa-chat-bg-dark: #0B141A;
  --wa-incoming-msg-dark: #202C33;
  --wa-sent-msg-dark: #005C4B;
  --wa-text-primary-dark: #E9EDEF;
  --wa-text-secondary-dark: #8696A0;
  --wa-input-bg-dark: #2A3942;
  --wa-border-dark: #233138;

  /* Notifications & Status */
  --wa-online-dot: #25D366;
  --wa-unread-badge: #25D366;
  --wa-voice-bar: #128C7E;
  --wa-status-ring-seen: #34B7F1;
  --wa-status-ring-unseen: #25D366;

  /* Neutral & Utility */
  --wa-white: #FFFFFF;
  --wa-black: #000000;
  --wa-light-gray: #F5F6F6;
  --wa-gray: #f4f5f5ff;
  --wa-medium-gray: #D4D4D4;
  --wa-medium-50-gray: #e4e4e4;
  --wa-dark-gray: #3C424A;

  /* Shadows & Overlays */
  --wa-shadow-light: rgba(0, 0, 0, 0.08);
  --wa-shadow-dark: rgba(0, 0, 0, 0.3);
  --wa-overlay: rgba(0, 0, 0, 0.5);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  color: var(--wa-text-primary-light)
}

.active {
    background-color: var(--wa-medium-50-gray);
}

.active::after {
    content: "";
    padding: 1px;
    background-color: var(--wa-teal-green);
    width: 2.5px;
    border-radius: 10px;
    height: 50%;
    position: absolute;
    top: 10px;
}
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
