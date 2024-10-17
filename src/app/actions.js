"use server";

import Hello from "./_components/hello";
import { Counter } from "./_components/counter";

export async function addPerson(userName) {
  return {
    ui: (
      <div id="streamed component">
        <Hello name={userName} />
      </div>
    ),
  };
}

// export async function getComponent() {
//   return (
//     <div id="streamed">
//       <Counter />
//     </div>
//   );
// }
