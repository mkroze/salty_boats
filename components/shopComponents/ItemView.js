const ItemView = ({ item, addToCartHandler }) => {
  
  
  const printStars = (rating) => {
    // Initialize the string of stars
    let stars = [];
    rating = Math.floor(rating);

    // Add yellow stars for the rating
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          className="w-5 h-5 text-lgreen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Add white stars for any remaining stars
    for (let i = rating; i < 5; i++) {
      stars.push(
        <svg
          className="w-5 h-5 text-cpink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    console.log(stars);
    return stars;
  };
  
  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold text-dblue lg:text-3xl">{item.name}</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src={item.image}
                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-0">
            <div className="space-y-4 lg:pt-8">
              <div className="flex justify-between">
                <legend className="text-xl font-bold text-lgreen">{item.category}</legend>
                <legend className="text-s font-medium text-cpink bg-dblue px-4 rounded-md">{item.brand}</legend>
              </div>

              <div className="flex flex-row rounded-md justify-around items-center">
                <div className="flex">{printStars(item.rating)}</div>
                {` `}
                <p> of {item.numReviews} reviews</p>
              </div>

              <div className="prose max-w- bg-cpink">
                <p>{item.description}</p>
              </div>

              <div>
                <p className="text-xl font-bold text-dblue">{item.price}MAD</p>
                <p className="text-s font-light text-lgreen">
                  {item.countInStock} in stock
                </p>
              </div>

              <button
                onClick={addToCartHandler}
                className="w-full rounded bg-lgreen hover:bg-dblue px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
