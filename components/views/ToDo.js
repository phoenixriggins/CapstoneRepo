import html from "html-literal";
export default () => html`
  <div class="container">
    <section id="ToDo">
      <table id="ToDos">
        <tr>
          <th>Class Name</th>
          <th>Assignment Name</th>
          <th>Assignment Description</th>
          <th>Priority</th>
          <th>Date Due</th>
          <th>Time Due</th>
        </tr>
      </table>
    </section>
  </div>
`;
