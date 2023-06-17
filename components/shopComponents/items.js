const Items = () => {
  const items = [
    {
      name: "Adventure Awaits T-Shirt",
      price: 19.99,
      quantity: 50,
      image: "/shirt1.png",
    },
    {
      name: "Sail the Seas Tee",
      price: 17.99,
      quantity: 35,
      image: "/shirt1.png",
    },
    {
      name: "Embroidered Captain Hat",
      price: 24.99,
      quantity: 20,
      image: "/shirt1.png",
    },
    {
      name: "Classic Sailor Cap",
      price: 19.99,
      quantity: 30,
      image: "/shirt1.png",
    },
    {
      name: "Anchor Enamel Pin",
      price: 7.99,
      quantity: 100,
      image: "/shirt1.png",
    },
    {
      name: "Compass Rose Pin",
      price: 6.99,
      quantity: 80,
      image: "/shirt1.png",
    },
    {
      name: "Ocean Explorer Water Bottle",
      price: 29.99,
      quantity: 50,
      image: "/shirt1.png",
    },
    {
      name: "Seafarer Stainless Steel Bottle",
      price: 27.99,
      quantity: 40,
      image: "/shirt1.png",
    },
  ];
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
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-t-xl"
                  />

                  <div className="relative pt-3 bg-cpink rounded-b-xl text-center font-medium">
                    <h3 className="text-l text-lgreen">
                      {item.name}
                    </h3>

                    <p className="mb-2">
                      <span className="tracking-wider text-dblue bg-cpink">
                        {" "}
                        ${item.price}{" "}
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
