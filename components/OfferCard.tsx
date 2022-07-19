function OfferCard({ tasteText, offerText, offerDiscount, offerItemImage,className }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 auto-rows-min lg:grid-cols-1 lg:gird-mb-5 lg:grid-rows-4">
        <p className="text-lg leading-7 text-gray-800 self-baseline">
          {offerText}
        </p>
        <p className="text-sm leading-tight text-gray-500 self-baseline justify-self-end lg:justify-self-start lg:row-start-4 lg:row-end-5">
          {tasteText}
        </p>
        <p className="w-52 text-4xl font-extrabold text-indigo-500 lg:row-start-2 lg:row-end-3">
          {offerDiscount}
        </p>
      </div>
      {offerItemImage}
    </div>
  );
}

export default OfferCard;
