import React from "react";
import CatalogCard from "@/components/cards/CatalogCard/CatalogCard";

const page = () => {
  const catalogItems = [
    {
      id: 1,
      name: "First Property",
      address: "123 Main St, City",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsum corrupti, ex facere at aperiam. Quas repellendus nihil earum ad?",
      price: "4000$ per month",
      image:
        "https://images.unsplash.com/photo-1723642203412-0aa03c309a61?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Second Property",
      address: "456 Elm St, Town",
      description:
        "This beautiful property is perfect for families. Spacious and well-located.",
      price: "5000$ per month",
      image:
        "https://images.unsplash.com/photo-1723629056784-5b1d16217bf0?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Third Property",
      address: "789 Oak St, Village",
      description:
        "A cozy property with a stunning view, perfect for a quiet retreat.",
      price: "3000$ per month",
      image:
        "https://images.unsplash.com/photo-1723403067470-f8086763ac00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  console.log(typeof catalogItems);
  return (
    <div className="">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center w-full h-full pt-40 mb-24">
        {/* Catalog Container */}
        <div className="w-11/12 sm:w-10/12 h-full group border border-red-800 bg-red-950/25 hover:border-amber-400 hover:bg-black rounded-xl p-12 transition-all duration-300">
          {/* text container */}
          <div className="w-full bg-red-800 border border-red-700 group-hover:border-amber-400 group-hover:bg-black p-8 text-center rounded-xl transition-all duration-300">
            <h1 className="text-black group-hover:text-amber-400 text-3xl group-hover:font-bold duration-500 transition-all ">
              Search and buy your{" "}
              <span
                className="group-hover:font-bold 
              group-hover:underline underline-offset-4 
              duration-75
              decoration-amber-300"
              >
                future
              </span>
            </h1>
          </div>

          {/* Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full h-full max-sm:py-9 sm:p-8 gap-12">
            {/* Map through catalogItems and render CatalogCard for each item */}
            {catalogItems.map((item) => (
              <div key={item.id} className="w-full min-h-96 md:w-96 md:h-96">
                <CatalogCard
                  name={item.name}
                  address={item.address}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
