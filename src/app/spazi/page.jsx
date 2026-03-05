import Card from "@/components/Card";

export default function Spazi() {
  return (
    <main className="mx-auto max-w-6xl sm:mt-9">
      <section className="mt-12 flex flex-col items-center p-4 sm:mt-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-5xl font-bold sm:text-left">
              I Nostri Spazi: Studio e Palestra
            </h1>
            <p className="text-brownish text-center">
              Ambienti progettati per la tua riabilitazione e il tuo benessere a
              Bergamo, dal trattamento iniziale al recupero completo della
              forza.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:grid-cols-2 md:items-center md:justify-center md:gap-8 lg:grid">
            <img
              className="rounded-xl object-cover shadow-md sm:h-[700px]"
              src="/images/spazi1.jpg"
              alt=""
            ></img>
            <div className="flex gap-3 sm:flex-col sm:gap-8">
              <img
                className="h-52 rounded-xl shadow-md sm:h-full sm:w-full sm:max-w-[275px] sm:min-w-[490px]"
                src="/images/spaz3.jpeg"
                alt=""
              ></img>
              <img
                className="h-52 rounded-xl shadow-md sm:h-full sm:w-full sm:max-w-[280px] sm:min-w-[490px]"
                src="/images/spazi4.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 flex flex-col items-center p-4 sm:mt-24">
        <div className="flex flex-col items-center gap-5 sm:gap-9">
          <h1 className="text-center text-5xl font-bold sm:text-left">
            Lo Studio Fisioterapico
          </h1>
          <p className="text-brownish text-center sm:w-3xl">
            Il cuore della nostra clinica, dove ogni percorso di recupero
            inizia. Uno spazio privato, tranquillo e moderno, dedicato alle
            valutazioni iniziali, alle terapie manuali e ai trattamenti
            specifici per garantirti la massima attenzione e privacy.
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-5 sm:gap-9 sm:pt-11 md:flex-row lg:flex-wrap lg:justify-center">
          <Card
            imageSrc="/images/TerapiaManuale.png"
            imageAlt=""
            heading="Terapia Manuale"
            text="Tecniche avanzate per il trattamento del dolore e il recupero
              della mobilità."
          ></Card>
          <Card
            imageSrc="/images/Trattamentitecar.png"
            imageAlt=""
            heading="Trattamenti Tecar"
            text="Tecnologia all'avanguardia per accelerare la guarigione dei
              tessuti."
          ></Card>
          <Card
            imageSrc="/images/Valutazione.png"
            imageAlt=""
            heading="Valutazioni Personalizzate"
            text="Un'analisi approfondita per definire il percorso di fisioterapia
              più efficace per te."
          ></Card>
        </div>
      </section>
      <section className="mt-12 flex flex-col items-center p-4 sm:mt-24">
        <div className="flex flex-col items-center gap-5 sm:gap-9">
          <h1 className="text-center text-5xl font-bold">
            La Palestra Riabilitativa (In Arrivo)
          </h1>
          <p className="text-brownish text-center md:w-3xl">
            Il prossimo passo nel tuo percorso di guarigione. Uno spazio ampio e
            luminoso, attrezzato con macchinari isotonici moderni per il
            rinforzo muscolare, l'esercizio funzionale e la prevenzione delle
            recidive, ideale per la riabilitazione sportiva e post-operatoria a
            Bergamo.
          </p>
          <div className="flex flex-col gap-5 pt-5 sm:gap-9 sm:pt-11 md:flex-row lg:flex-wrap lg:justify-center">
            <Card
              imageSrc="/images/WomanTraining1.png"
              imageAlt=""
              heading="Recupero Post-Chirurgico"
              text="Programmi di rinforzo mirati per un recupero completo e sicuro."
            ></Card>
            <Card
              imageSrc="/images/WomanTraining2.png"
              imageAlt=""
              heading="Fisioterapia Sportiva"
              text="Percorsi specifici per atleti, per tornare in campo più forti di
                prima."
            ></Card>
            <Card
              imageSrc="/images/ManTraining1.png"
              imageAlt=""
              heading="Esercizio Funzionale"
              text="Attrezzature moderne per migliorare la forza e la stabilità del
                corpo."
            ></Card>
          </div>
        </div>
      </section>
    </main>
  );
}
