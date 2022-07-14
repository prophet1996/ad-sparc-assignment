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
    offerDiscount: "20% OFF",
    offerItemImage: "/cupcake.png",
  },
  {
    tasteText: "Foodies",
    offerText: "Big Burgers",
    offerDiscount: "50% OFF",
    offerItemImage: "/cupcake.png",
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
        <div className="flex flex-wrap gap-8 justify-center md">
          {offerList.map((offer) => (
            <OfferCard {...offer} />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center mb-10">
          <FoodTypeFilters filters={filters} onClickFilter={onClickFilter} />
        </div>
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
