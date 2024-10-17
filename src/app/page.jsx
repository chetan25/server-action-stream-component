import Person from "./_components/person";
import Header from "./_components/header";
import Counter from "./_components/counter";

export default function Home() {
  async function getComponent() {
    "use server";
    return (
      <div id="streamed">
        <Counter />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Person getComponent={getComponent} />
    </main>
  );
}
