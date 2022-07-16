import Badge from "./Badge";

function RestaurantCard({ name, deliveryEstimate, minOrder, itemCount,photo }) {
  return (
    <div className="max-w-sm w-85 bg-white rounded-lg border border-gray-200 shadow-md font-nunito">
      <a href="#">
        <img className="rounded-t-lg w-full" src="/restaurant.png" alt="" />
      </a>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <p className="w-64 text-lg font-bold leading-normal text-gray-800">
            {name}
          </p>
          <div className="relative" style={{ width: 20, height: 20 }}>
            <img className="w-5 h-5 rounded-lg" src={photo} />
            {itemCount && (
              <div className="w-5 h-5 translate-x-4 -translate-y-8">
                <div className="flex items-center justify-center w-5 h-5 pt-0.5 bg-indigo-500 border rounded-md border-white">
                  <p className="flex-1 text-xs font-bold leading-none text-center text-white">
                    2
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2 justify-start items-center mb-4">
          <img
            className="w-3 h-3 rounded-full"
            src="https://via.placeholder.com/12x12"
          />
          <p className="text-xs font-semibold leading-none text-gray-500">
            {deliveryEstimate}
          </p>
          <div className="w-0.5 h-0.5 bg-indigo-500 rounded-full" />
          <p className="text-xs font-semibold leading-none text-gray-500">
            {minOrder} min sum
          </p>
        </div>
        <Badge />
      </div>
    </div>
  );
}

export default RestaurantCard;
