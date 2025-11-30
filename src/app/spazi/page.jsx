export default function Spazi() {
  return (
    <main>
      <section className="mt-9 flex flex-col items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-5xl font-bold">
              I Nostri Spazi: Studio e Palestra
            </h1>
            <p className="text-brownish text-center">
              Ambienti progettati per la tua riabilitazione e il tuo benessere a
              Bergamo, dal trattamento iniziale al recupero completo della
              forza.
            </p>
          </div>
          <div className="flex">
            <img className="rounded-xl" src="/images/Bed.png"></img>
            <div className="flex flex-col">
              <img className="rounded-xl" src="/images/Sticks.png"></img>
              <img className="rounded-xl" src="/images/Gym.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center">
        <div className="flex flex-col items-center gap-9">
          <h1 className="text-5xl font-bold">Lo Studio Fisioterapico</h1>
          <p className="text-brownish w-3xl text-center">
            Il cuore della nostra clinica, dove ogni percorso di recupero
            inizia. Uno spazio privato, tranquillo e moderno, dedicato alle
            valutazioni iniziali, alle terapie manuali e ai trattamenti
            specifici per garantirti la massima attenzione e privacy.
          </p>
        </div>
        <div className="flex gap-9 pt-11">
          <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-3 py-2.5">
            <img className="rounded-xl" src="/images/TerapiaManuale.png"></img>
            <h3 className="text-center font-bold">Terapia Manuale</h3>
            <p className="text-brownish text-center">
              Tecniche avanzate per il trattamento del dolore e il recupero
              della mobilità.
            </p>
          </article>
          <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-3 py-2.5">
            <img
              className="rounded-xl"
              src="/images/Trattamentitecar.png"
            ></img>
            <h3 className="text-center font-bold">Trattamenti Tecar</h3>
            <p className="text-brownish text-center">
              TTecnologia all'avanguardia per accelerare la guarigione dei
              tessuti.
            </p>
          </article>
          <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-3 py-2.5">
            <img className="rounded-xl" src="/images/Valutazione.png"></img>
            <h3 className="text-center font-bold">
              Valutazioni Personalizzate
            </h3>
            <p className="text-brownish text-center">
              Un'analisi approfondita per definire il percorso di fisioterapia
              più efficace per te.
            </p>
          </article>
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center">
        <div className="flex flex-col items-center gap-9">
          <h1 className="text-center text-5xl font-bold">
            La Palestra Riabilitativa (In Arrivo)
          </h1>
          <p className="text-brownish w-3xl text-center">
            Il prossimo passo nel tuo percorso di guarigione. Uno spazio ampio e
            luminoso, attrezzato con macchinari isotonici moderni per il
            rinforzo muscolare, l'esercizio funzionale e la prevenzione delle
            recidive, ideale per la riabilitazione sportiva e post-operatoria a
            Bergamo.
          </p>
          <div className="flex gap-9">
            <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-2.5 py-2.5">
              <img
                className="rounded-xl"
                src="/images/WomanTraining1.png"
              ></img>
              <h3 className="text-center font-bold">
                Recupero Post-Chirurgico
              </h3>
              <p className="text-brownish text-center">
                Programmi di rinforzo mirati per un recupero completo e sicuro.
              </p>
            </article>
            <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-2.5 py-2.5">
              <img
                className="rounded-xl"
                src="/images/WomanTraining2.png"
              ></img>
              <h3 className="text-center font-bold">Fisioterapia Sportiva</h3>
              <p className="text-brownish text-center">
                Percorsi specifici per atleti, per tornare in campo più forti di
                prima.
              </p>
            </article>
            <article className="flex w-80 flex-col gap-3.5 rounded-xl bg-white px-2.5 py-2.5">
              <img className="rounded-xl" src="/images/ManTraining1.png"></img>
              <h3 className="text-center font-bold">Esercizio Funzionale</h3>
              <p className="text-brownish text-center">
                Attrezzature moderne per migliorare la forza e la stabilità del
                corpo.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
