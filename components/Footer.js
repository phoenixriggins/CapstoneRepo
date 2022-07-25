import html from "html-literal";

let year = new Date().getFullYear();

export default () => html`
  <footer>
    &copy;${year}
    <a href="https://www.linkedin.com/in/phoenix-riggins-b80b63241/"
      >LinkedIn</a
    >
  </footer>
`;
