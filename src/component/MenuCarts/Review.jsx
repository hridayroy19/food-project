

const Review = () => {
    return (
        <div className="max-w-md  mt-8 p-4 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating:
            </label>
            <input
              type="text"
              id="rating"
              min="1"
              max="5"
            //   value={rating}
              name="rating"
            //   onChange={(e) => setRating(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment:
            </label>
            <textarea
              id="comment"
            //   value={comment}
            //   onChange={(e) => setComment(e.target.value)}
              name="comment"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit Review
          </button>
        </form>
      </div>
    );
};

export default Review;