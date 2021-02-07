import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        <List people={people} />
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
