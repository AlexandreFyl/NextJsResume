import Education from "./components/Education";
import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <WhoAmI />
      <Education />
      <Work />
    </main>
  );
}
