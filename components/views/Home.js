import html from "html-literal";
export default st => html`
  <section></section>
  <h3>
    The weather in ${st.weather.city} is ${st.weather.description}. Temperature
    is ${st.weather.temp}F, and it feels like ${st.weather.feelsLike}F.
  </h3>
`;
