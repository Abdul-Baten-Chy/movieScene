import star from "@/assets/star.svg";

function Rating({ value }) {
  const rating = Array(value).fill(star);
  return (
    <>
      {rating.map((starImg, index) => (
        <img key={index} src={starImg} alt="star" width="14" height="14" />
      ))}
    </>
  );
}

export default Rating;
