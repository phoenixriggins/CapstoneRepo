import html from "html-literal";

let year = new Date().getFullYear();

export default () => html`
  <footer>
    &copy;${year}
    <a href="./about">about!</a>
  </footer>
`;
