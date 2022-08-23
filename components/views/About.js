import html from "html-literal";
export default () => html`
  <div class="container">
    <section id="about">
      <p>
        Throughout most of my highschool career, I struggled with staying
        organized with my work. So for my capstone project, I made an assignment
        tracking website. While in school, most tracking apps I used were
        time-consuming to use. I wanted to create something that you could pull
        out when your teachers starts a sentence and have in your calendar by
        the time they’re done. I wanted for my website to be easy and quick to
        use so I made sure the user could enter multiple assignments at once. I
        used javascript, html5, css, etc.
      </p>

      <form action="https://formspree.io/f/mpzbgdbn" method="POST">
        <p>Feel free to contact me here!</p>
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
`;
