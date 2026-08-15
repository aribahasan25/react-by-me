import { useState } from "react";

function RatingButton() {
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold mb-4">
        Rate this product
      </h2>

      <div className="flex justify-center gap-2 text-4xl">
        {stars.map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300"
            }
          >
            ★
          </button>
        ))}
      </div>

      <p className="mt-4 text-lg">
        Your Rating: {rating}
      </p>
    </div>
  );
}

export default RatingButton;