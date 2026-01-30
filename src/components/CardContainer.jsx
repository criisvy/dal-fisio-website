const CardContainer = ({ children }) => {
  return (
    <article className="flex flex-col rounded-xl bg-white p-4 lg:p-10">
      {children}
    </article>
  );
};

export default CardContainer;
