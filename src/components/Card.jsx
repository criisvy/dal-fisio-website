const Card = ({ imageSrc, imageAlt, heading, text }) => {
  return (
    <article className="flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-lg">
      <img src={imageSrc} alt={imageAlt} className="rounded-xl"></img>
      <h3 className="text-lg font-bold">{heading}</h3>
      <p className="text-brownish lg:min-h-[170px]">{text}</p>
    </article>
  );
};

export default Card;
