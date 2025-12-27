import Cards from "@/Cards";
import Header from "@/Header";
import SideBar from "@/SideBar";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <Header />

      <main className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <SideBar />
        <Cards />
      </main>
    </body>
  );
}

export default App;
