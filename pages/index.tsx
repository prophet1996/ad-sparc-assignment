import { useSession } from "next-auth/react";
import { useState, FC } from "react";
import FoodTypeFilters from "../components/FoodTypeFilters";
import Layout from "../components/Layout";
import OfferCard from "../components/OfferCard";
import RestaurantCard from "../components/RestaurantCard";
import { filterButtons, offerList, restaurantList } from "../utils/consts";



const Home: FC = () => {
  const [filters, setfilters] = useState(filterButtons);

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
