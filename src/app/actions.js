"use server";

import Hello from "./_components/hello";
export async function addPerson(userName) {
  return {
    ui: (
      <div id="streamed component">
        <Hello name={userName} />
      </div>
    ),
  };
}
