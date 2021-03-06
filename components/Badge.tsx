function Badge({
  badgeText = "Sushi",
  badgeImg = "https://via.placeholder.com/12x12",
}) {
  return (
    <div className="flex items-start justify-start">
      <div className="flex space-x-2 h-6 items-center justify-start px-2.5 py-1 bg-gray-100 rounded-full my-2">
        <div className="w-3 h-3/4">
          <img
            className="flex-1 h-full"
            src={badgeImg}
            data-testid={`badge-${badgeText}-image`}
          />
        </div>
        <p
          className="text-xs font-semibold leading-none text-gray-600"
          data-testid={`badge-${badgeText}-name`}
        >
          {badgeText}
        </p>
      </div>
    </div>
  );
}

export default Badge;
