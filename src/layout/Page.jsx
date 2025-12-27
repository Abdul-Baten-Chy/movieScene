import Cards from "@/feature/movie/Cards";
import Header from "@/shared/Header";
import SideBar from "@/shared/SideBar";

function Page() {
  return (
    <>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <SideBar />
        <Cards />
      </main>
    </>
  );
}

export default Page;
