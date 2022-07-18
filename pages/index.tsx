import { useSession } from "next-auth/react";
import { useState } from "react";
import FoodTypeFilters from "../components/FoodTypeFilters";
import Layout from "../components/Layout";
import OfferCard from "../components/OfferCard";
import RestaurantCard from "../components/RestaurantCard";

const restaurantList = [
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
  {
    name: "Burgers & Pizza",
    deliveryEstimate: "30-40 min",
    minOrder: "$32",
    itemCount: 2,
    photo: "/roll-set.png",
  },
];

const offerList = [
  {
    tasteText: "Deserty",
    offerText: "All deserts",
    offerDiscount: <div>20% OFF</div>,
    offerItemImage: <img src="/cupcake.png" />,
    wrapperClassName:
      "relative bg-purple-50 rounded-2xl flex font-nunito flex-col lg:flex-row-reverse p-4 pb-0 mb-8 items-center",
  },
  {
    tasteText: "Foodies",
    offerText: "Big Burgers",
    offerDiscount: <div className="text-orange-500">50% OFF</div>,
    offerItemImage: <img src="/burger.png" className="lg:translate-y-3" />,
    wrapperClassName:
      "relative bg-orange-50 rounded-2xl flex font-nunito flex-col lg:flex-row-reverse p-4 pb-0 mb-8 items-center",
  },
];

const Home: React.FC = () => {
  const [filters, setfilters] = useState([
    { selected: true, id: 1, label: "Pizza" },
    { id: 2, label: "Burger" },
    { id: 3, label: "BBQ" },
    { id: 4, label: "Sushi" },
    { id: 5, label: "Vegan" },
    { id: 6, label: "Dessert" },
  ]);

  const { data: session } = useSession();

  if (!session)
    return (
      <Layout>
        <></>
      </Layout>
    );

  const onClickFilter = (id) => {
    setfilters(
      filters.map((filter) => {
        if (filter.id === id) {
          return { ...filter, selected: !filter.selected };
        }
        return filter;
      })
    );
  };
  return (
    <Layout>
      <div className="container flex flex-col items-center m-auto lg:w-11/12 px-4">
        <div className="flex flex-wrap gap-10 justify-center">
          {offerList.map((offer, idx) => (
            <OfferCard key={idx} {...offer} />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center mb-10">
          <FoodTypeFilters filters={filters} onClickFilter={onClickFilter} />
        </div>
        <div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center mb-10">
            <p className="text-lg font-semibold leading-7 text-gray-800 font-nunito col-span-full">
              Nearby restaurants
            </p>
            {restaurantList.map((restaurant) => (
              <RestaurantCard key={restaurant.name} {...restaurant} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
