import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Assignments") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        classname: inputList.class1.value,
        assingmentname: inputList.as1.value,
        assignmentdesc: inputList.ad1.value,
        duedate: inputList.due.value,
        priority: inputList.priority.value,
        timedue: inputList.time.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.TO_DO_API}/trackers`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Tracker.tArray.push(response.data);
          router.navigate("/Todo");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      // case "Home": {
      //   axios.get(`https://oober-tracker.herokuapp.com/trackers`);
      //   break;
      // }
      case "Tracker": {
        axios
          .get(`${process.env.TO_DO_API_URL}`)
          .then(response => {
            store.Tracker.trackers = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
          });
        break;
      }
      default: {
        done();
      }
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
