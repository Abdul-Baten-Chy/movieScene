import tagIcon from "@/assets/tag.svg";
import { useCartContext } from "@/hooks/useCartContext";
function AddToCartBtn({ movie }) {
  const { dispatch } = useCartContext();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: movie });
  };
  return (
    <button
      className="w-full bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
      onClick={(e) => handleAddToCart(e)}
    >
      <img src={tagIcon} alt="" />
      <span>${movie.price} | Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;
