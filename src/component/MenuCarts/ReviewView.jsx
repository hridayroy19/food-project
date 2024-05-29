const ReviewView = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* avater */}
          <div className="avatar">
            <div className="w-14 mb-3 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div>
            <h2 className="card-title  ">Hridoy Roy!</h2>
            <p> regular coustomer </p>
            <div className="rating rating-sm mt-1 ">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewView;
