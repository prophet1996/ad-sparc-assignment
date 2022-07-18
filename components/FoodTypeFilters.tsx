function FoodTypeFilters({ filters, onClickFilter }) {
  return filters.map(({ label, selected, id }) => (
    <button
      key={id}
      onClick={() => onClickFilter(id)}
      className={`md:w-40 h-20 w-24 flex flex-col items-center justify-center bg-purple-50 border-2 rounded-2xl ${
        selected ? "border-indigo-500" : ""
      } gap-3 p-4`}
    >
      <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
      <p className="text-xs font-bold leading-none text-center text-indigo-500">
        {label}
      </p>
    </button>
  ));
}

export default FoodTypeFilters;
