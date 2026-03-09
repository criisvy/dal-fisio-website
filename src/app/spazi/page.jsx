import Card from "@/components/Card";
import Image from "next/image";

export default function Spazi() {
  return (
    <main className="mx-auto max-w-6xl sm:mt-9">
      <section className="mt-12 flex flex-col items-center p-4 sm:mt-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-5xl font-bold sm:text-left">
              I Nostri Spazi: Studio e Palestra
            </h1>
            <p className="text-brownish max-w-3xl text-center">
              Ambienti progettati per la tua riabilitazione e il tuo benessere a
              Bergamo, dal trattamento iniziale al recupero completo della
              forza.
            </p>
          </div>

          <div className="mx-auto grid max-h-[550px] max-w-4xl grid-cols-2 grid-rows-2 gap-3 sm:gap-8">
            <Image
              width={544}
              height={758}
              className="col-span-1 row-span-2 h-full rounded-xl object-cover shadow-md"
              src="/images/spazi1.jpg"
              alt=""
            />
            <Image
              width={544}
              height={362}
              className="h-full rounded-xl object-cover shadow-md"
              src="/images/spaz3.jpeg"
              alt=""
            />
            <Image
              width={544}
              height={362}
              className="h-full rounded-xl object-cover shadow-md"
              src="/images/spazi4.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="mt-12 flex flex-col items-center p-4 sm:mt-24">
        <div className="flex flex-col items-center gap-5 sm:gap-9">
          <h1 className="text-center text-5xl font-bold sm:text-left">
            Lo Studio Fisioterapico
          </h1>
          <p className="text-brownish max-w-3xl text-center">
            Il cuore della nostra clinica, dove ogni percorso di recupero
            inizia. Uno spazio privato, tranquillo e moderno, dedicato alle
            valutazioni iniziali, alle terapie manuali e ai trattamenti
            specifici per garantirti la massima attenzione e privacy.
          </p>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-4 sm:gap-8">
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
          <p className="text-brownish max-w-3xl text-center">
            Il prossimo passo nel tuo percorso di guarigione. Uno spazio ampio e
            luminoso, attrezzato con macchinari isotonici moderni per il
            rinforzo muscolare, l'esercizio funzionale e la prevenzione delle
            recidive, ideale per la riabilitazione sportiva e post-operatoria a
            Bergamo.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4 sm:gap-8">
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
