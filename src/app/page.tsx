import Education from "./components/Education";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <WhoAmI />
      <Education />
    </main>
  );
}
