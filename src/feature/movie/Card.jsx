import { useState } from "react";
import { getImageurl } from "../../utils/getImageUrl";
import AddToCartBtn from "./AddToCartBtn";
import Modal from "./Modal";
import Rating from "./Rating";

function Card({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetail = (e) => {
    e.stopPropagation();
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      {showModal && <Modal movie={selectedMovie} onClose={handleClose} />}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col jus h-full"
        onClick={(e) => handleDetail(e)}
      >
        <img
          className="w-full object-cover"
          src={getImageurl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4 ">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <AddToCartBtn movie={movie} />
        </figcaption>
      </figure>
    </>
  );
}

export default Card;
