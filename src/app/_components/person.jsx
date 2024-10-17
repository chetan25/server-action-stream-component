"use client";

import React, { useState, cloneElement, useEffect } from "react";
import { addPerson } from "../actions";

export default function Person({ getComponent }) {
  const [result, setResult] = useState();
  const [comp, setComp] = useState();

  useEffect(() => {
    getComponent().then(setComp);
  }, []);

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
      {comp}
    </form>
  );
}
