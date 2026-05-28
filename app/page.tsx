import packageJson from "../package.json";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-16 sm:px-10 sm:py-20">
      <main className="mx-auto w-full max-w-5xl">
        <Hero version={packageJson.version} />
      </main>
      <p>Un cambio mas - quiza otro - parece que YARN es una mejor opcion para deployments</p>
    </div>
  );
}
