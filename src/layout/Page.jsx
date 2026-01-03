import Cards from "@/feature/movie/Cards";

import Header from "@/shared/Header";
import SideBar from "@/shared/SideBar";
import { useThemeContext } from "../hooks/useThemeContex";
function Page() {
  const { theme } = useThemeContext();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <SideBar />
        <Cards />
      </main>
    </div>
  );
}

export default Page;
