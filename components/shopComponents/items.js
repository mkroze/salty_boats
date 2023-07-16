const Items = ({ items }) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-dblue sm:text-3xl">
            Our merch
          </h2>

          <p className="max-w-md mx-auto mt-4 text-lgreen">
            You can support us by getting the latest merch !
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            return (
              <li>
                <a
                  href={`shop/${item.slug}`}
                  className="block overflow-hidden group"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-t-xl"
                  />

                  <div className="relative pt-3 bg-cpink rounded-b-xl text-center font-medium">
                    <h3 className="text-l text-lgreen">{item.name}</h3>

                    <p className="mb-2">
                      <span className="tracking-wider text-dblue bg-cpink">
                        {' '}
                        ${item.price}{' '}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Items;
