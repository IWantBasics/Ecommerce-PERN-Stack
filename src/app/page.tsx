import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestSeeds from "./components/LatestSeeds";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <LatestSeeds/>
    </>
  );
}
