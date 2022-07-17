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
    { selected: true, id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);
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
      <div className="container flex flex-col items-center m-auto">
        <div className="flex flex-wrap gap-10 justify-center mx-4">
          {offerList.map((offer) => (
            <OfferCard {...offer} />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center mb-10">
          <FoodTypeFilters filters={filters} onClickFilter={onClickFilter} />
        </div>
          <p
            className="w-80 text-xl font-semibold leading-7 text-gray-800 font-nunito mr-auto mb-4"
          >
            Nearby restaurants
          </p>
        <div className="flex flex-wrap gap-8 justify-center mb-10">
          {restaurantList.map((restaurant) => (
            <RestaurantCard {...restaurant} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
