function FoodTypeFilters({ filters, onClickFilter }) {
  return filters.map(({ label, value, icon, selected, id }) => (
    <button
      onClick={() => onClickFilter(id)}
      className={`w-40 h-20 max-sm:w-24 flex flex-col items-center justify-center bg-purple-50 border-2 rounded-2xl ${
        selected ? "border-indigo-500" : ""
      } gap-3 p-4`}
    >
      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
      <p className="text-xs font-bold leading-none text-center text-indigo-500">
        Sushi
      </p>
    </button>
  ));
}

export default FoodTypeFilters;
