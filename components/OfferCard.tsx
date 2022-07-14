function OfferCard({tasteText,offerText,offerDiscount,offerItemImage}) {
  return (
    <div className="relative bg-purple-50 rounded-2xl flex font-nunito flex-col lg:flex-row-reverse p-4 pb-0 mb-8 items-center">
      <div
        className="grid grid-cols-2 auto-rows-min lg:grid-cols-1 lg:gird-mb-5 lg:grid-rows-4"
      >
        <p className="text-lg leading-7 text-gray-800 self-baseline">{offerText}</p>
        <p className="text-sm leading-tight text-gray-500 self-baseline justify-self-end lg:justify-self-start lg:row-start-4 lg:row-end-5">
          {tasteText}
        </p>
        <p
          className="w-52 text-4xl font-extrabold text-indigo-500 lg:row-start-1 lg:row-end-2"
        >
         {offerDiscount} 
        </p>
      </div>
      <img src={offerItemImage} />
    </div>
  );
}

export default OfferCard;
