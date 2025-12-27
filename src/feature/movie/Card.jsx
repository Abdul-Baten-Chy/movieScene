import movieImage from "@/assets/movie-1.png";
import starIcon from "@/assets/star.svg";
import tagIcon from "@/assets/tag.svg";
function Card() {
  return (
    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img class="w-full object-cover" src={movieImage} alt="" />
      <figcaption class="pt-4">
        <h3 class="text-xl mb-1">Iron Man</h3>
        <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div class="flex items-center space-x-1 mb-5">
          <img src={starIcon} width="14" height="14" alt="" />
          <img src={starIcon} width="14" height="14" alt="" />
          <img src={starIcon} width="14" height="14" alt="" />
          <img src={starIcon} width="14" height="14" alt="" />
          <img src={starIcon} width="14" height="14" alt="" />
        </div>
        <a
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={tagIcon} alt="" />
          <span>$100 | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
}

export default Card;
