"use client";

import React, { useState, cloneElement } from "react";
import { addPerson } from "../actions";
import Counter from "./counter";

export default function Person() {
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addPerson(e.currentTarget.elements.username.value);
    // now we can append a new child either at top or at last of the strmaed response
    const originalChildren = data.ui.props.children;
    console.log({ originalChildren });
    // here we append a new children to the original element as a last child
    const CounterEl1 = <Counter base={true} />;
    const CounterEl2 = <Counter base={false} />;
    const ui = cloneElement(data.ui, {}, [
      CounterEl1,
      originalChildren,
      CounterEl2,
    ]);

    setResult({
      ui: ui,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
      {result ? result.ui : null}
    </form>
  );
}
