function HeroSection({ wrapperClassName = "" }) {
  return (
    <div className={wrapperClassName}>
        <span>
        <div className="flex gap-7 mt-7">
          <img className="shadow-2xl"  src="/login_card_2.png" />
        <img className="h-72 w-72 mt-6 shadow-2xl" src="/login_card_3.png" />
        </div>
          <img className="xl:-translate-x-10 -translate-y-14 shadow-2xl" src="/login_card_1.png" />
        </span>
      <div className="flex flex-col justify-center items-center w-120">
        <p className="text-3xl font-bold leading-10 text-center text-white mb-4">
          Leave reviews for all meals
        </p>
        <p className="text-sm leading-tight text-center text-white mb-10">
          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
          probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
        </p>

        <div className="inline-flex space-x-2 items-center justify-end w-14 h-2 mb-20">
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
          <div className="w-2 h-full bg-white rounded-full" />
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
