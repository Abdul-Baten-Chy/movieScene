import tagIcon from "@/assets/tag.svg";
import { useCartContext } from "@/hooks/useCartContext";
import { toast } from "react-toastify";
function AddToCartBtn({ movie }) {
  const { state, dispatch } = useCartContext();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    const alredatAdded = state.cart.find((item) => item.id === movie.id);
    console.log(alredatAdded);

    if (!alredatAdded) {
      dispatch({ type: "ADD_TO_CART", payload: movie });
      toast.success(`${movie.title} added to cart!`, { position: "top-right" });
    } else {
      toast.error(`${movie.title} is already in the cart.`, {
        position: "top-right",
      });
    }
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
