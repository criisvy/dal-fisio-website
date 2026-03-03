const { exportPages } = require("next/dist/export/worker");

const Article = ({ header, text }) => {
    
  return (
    <article className="flex flex-1/3 gap-4 px-4 sm:px-0">
      <RoundedIconWrapper className="mt-1">
        <ShieldCheck className="text-primary" />
      </RoundedIconWrapper>
      <div className="items-center justify-center text-center">
        <h3 className="mb-1 text-lg font-bold">Dolore</h3>
        <p className="text-brownish text-justify">
          Indago le caratteristiche del <strong>dolore: </strong>
          localizzazione, intensità, modalità di insorgenza, andamento nelle 24
          ore e <strong>durata nel tempo. </strong>Questa fase è essenziale per
          individuare la causa del problema e definire il percorso terapeutico
          più <strong>efficace.</strong>
        </p>
      </div>
    </article>
  );
};

export default Article;
