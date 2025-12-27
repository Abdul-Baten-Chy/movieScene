import Card from "@/feature/movie/Card";

function Cards() {
  return (
    <div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
