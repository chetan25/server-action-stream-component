import Person from "./_components/person";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Person />
    </main>
  );
}
