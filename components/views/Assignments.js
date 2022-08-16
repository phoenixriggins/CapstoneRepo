import html from "html-literal";
export default () => html`
  <div class="container">
    <section>
      <form>
        <div id="assignments">
          <div class="assignment 1">
            <section>
              <label for="class1">Class:</label>
              <input type="text" id="class1" required />

              <label for="as1">assignment name:</label>
              <input type="text" id="as1" required />

              <label for="ad1">assignment description:</label>
              <input type="text" id="ad1" />

              <label for="priority">Priority:</label>
              <select name="priority" required>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>

              <label for="date due">Date Due:</label>
              <select name="Due date" required>
                <option></option>
              </select>
              <label for="time due">Time Due:</label>
              <select name="time due" required>
                <option></option>
              </select>
            </section>
          </div>

          <div class="assignment 2">
            <section>
              <form>
                <label for="class2">Class:</label>
                <input type="text" id="class2" />
              </form>

              <label for="as2">assignment name:</label>
              <input type="text" id="as2" required />

              <label for="ad2">assignment description:</label>
              <input type="text" id="ad2" />

              <label for="priority">Priority:</label>
              <select name="priority">
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>

              <label for="date due">Date Due:</label>
              <select>
                <option></option>
              </select>
              <label for="time due"> Due</label>
              <select>
                <option></option>
              </select>
            </section>
          </div>

          <div class="assignment 3">
            <section>
              <form>
                <label for="class3">Class:</label>
                <input type="text" id="class3" />
              </form>

              <label for="as3">assignment name:</label>
              <input type="text" id="as3" required />

              <label for="ad3">assignment description:</label>
              <input type="text" id="ad3" />

              <label for="priority">Priority:</label>
              <select name="priority">
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>

              <label for="date due">Date Due:</label>
              <select>
                <option></option>
              </select>
              <label for="time due">Time Due</label>
              <select>
                <option></option>
              </select>
            </section>
          </div>

          <div class="assignment 4">
            <section>
              <form>
                <label for="class4">Class:</label>
                <input type="text" id="class4" />
              </form>

              <label for="as4">assignment name:</label>
              <input type="text" id="as4" required />

              <label for="ad4">assignment description:</label>
              <input type="text" id="ad4" />

              <label for="priority">Priority:</label>
              <select name="priority">
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>

              <label for="date due">Date Due:</label>
              <select>
                <option></option>
              </select>
              <label for="time due">Time Due</label>
              <select>
                <option></option>
              </select>
            </section>
          </div>

          <div class="assignment 5">
            <section>
              <form>
                <label for="class5">Class:</label>
                <input type="text" id="class5" />
              </form>

              <label for="as5">assignment name:</label>
              <input type="text" id="as5" required />

              <label for="ad5">assignment description:</label>
              <input type="text" id="ad5" />

              <label for="priority">Priority:</label>
              <select name="priority">
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>

              <label for="date due">Date Due:</label>
              <select>
                <option></option>
              </select>
              <label for="time due">Time Due</label>
              <select>
                <option></option>
              </select>
            </section>
          </div>
        </div>
        <input type="submit" />
      </form>
      <footer></footer>
      <script src="index.js"></script>
    </section>
  </div>
`;
