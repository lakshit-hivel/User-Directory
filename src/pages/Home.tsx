import { useState } from "react";
import Header from "../components/header/header";
import Hero from "../components/Hero/Hero";
import MainConatiner from "../components/mainContainer/MainContainer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Header />
      <Hero onSearchChange={setSearchQuery} />
      <MainConatiner searchQuery={searchQuery} />
    </div>
  );
}
