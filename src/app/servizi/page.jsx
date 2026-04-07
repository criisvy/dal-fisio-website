import Button from "@/components/Button";
import { MoveRight, User } from "lucide-react";
import Card from "@/components/Card";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <main className="mx-auto mt-6 max-w-6xl px-4 sm:mt-9">
      <section className="mt-6 flex justify-center sm:mt-9">
        <div className="sm:bg-background flex flex-col items-center gap-2.5 rounded-xl bg-white p-4 md:gap-16 lg:flex-row lg:p-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold sm:mb-2.5 sm:text-5xl">
              I Nostri Servizi
            </h1>
            <p className="text-brownish">
              Dal Fisio ci dedichiamo al tuo recupero. Scopri il nostro
              approccio personalizzato alla fisioterapia e alla cura del
              paziente.
            </p>
            <div className="flex w-full items-center">
              <Button
                asChild
                className="w-full rounded-xl px-6 text-center lg:w-fit"
              >
                <Link href="/contatti" className="font-bold">
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
          <img
            className="rounded-xl shadow-md sm:max-w-2xl"
            src="/images/Phisioterapist3.jpg"
            alt=""
          ></img>
        </div>
      </section>
      <section className="mt-7 flex flex-col items-center gap-5 sm:mt-24 sm:gap-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-4">
          <h2 className="text-center text-4xl font-bold sm:text-5xl">
            Riabilitazione e Recupero Funzionale
          </h2>
          <p className="text-brownish text-center">
            Percorsi su misura per ritornare alla piena funzionalità dopo
            interventi, infortuni o per gestire dolori cronici.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-18">
          <Card
            imageSrc="/images/Knee.png"
            imageAlt=""
            heading="Valutazione fisioterapica"
            text="Ogni percorso inizia con una valutazione approfondita: analisi del dolore, della postura, del movimento e delle capacità funzionali. Questo ci permette di individuare le cause del problema e definire obiettivi chiari e realistici."
          ></Card>
          <Card
            imageSrc="/images/Knee2.png"
            imageAlt=""
            heading="Riabilitazione ortopedica"
            text="Ci occupiamo del trattamento di infortuni muscolo-scheletrici e condizioni post-chirurgiche che coinvolgono spalla, ginocchio, anca e colonna vertebrale. Il percorso riabilitativo è progressivo e orientato al recupero funzionale e al ritorno alle attività quotidiane, lavorative e sportive."
          ></Card>
          <Card
            imageSrc="/images/TwoWoman.png"
            imageAlt=""
            heading="Riabilitazione sportiva"
            text="Un servizio dedicato ad atleti e persone attive. Lavoriamo sul recupero dall’infortunio, sulla prevenzione delle recidive e sul ritorno alla performance, integrando esercizio terapeutico, controllo del carico e lavoro funzionale specifico."
          ></Card>
          <Card
            imageSrc="/images/TwoWoman.png"
            imageAlt=""
            heading="Riabilitazione neurologica"
            text="Ci occupiamo della presa in carico di persone con patologie neurologiche centrali e periferiche, come ictus, lesioni midollari e malattie neurodegenerative. Il percorso è finalizzato al miglioramento delle autonomie, del controllo motorio, dell’equilibrio e della qualità di vita, attraverso un lavoro individualizzato e centrato sulla persona."
          ></Card>
        </div>
      </section>
      <section className="mt-7 flex flex-col items-center gap-6 sm:mt-24 sm:gap-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h2 className="text-4xl font-bold sm:text-5xl">Terapie Fisiche</h2>
          <p className="text-brownish px-10 text-center">
            Tecnologie all'avanguardia per accelerare i processi di guarigione e
            offrire un sollievo efficace dal dolore.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-18">
          <Card
            imageSrc="/images/Phisiotherapist4.png"
            imageAlt=""
            heading="Terapia manuale"
            text="Utilizziamo tecniche di terapia manuale per ridurre il dolore, migliorare la mobilità articolare e favorire il recupero dei tessuti, sempre integrate a un programma attivo di esercizi."
          ></Card>
          <Card
            imageSrc="/images/Phisiotherapist4.png"
            imageAlt=""
            heading="Crioterapia compressiva"
            text="All’interno dei percorsi riabilitativi utilizziamo una tecnologia di crioterapia associata a compressione intermittente. È indicata soprattutto nelle fasi post-operatorie e post-infortunio per il controllo di dolore, edema e infiammazione. L’applicazione è sempre guidata dal fisioterapista integrate nel percorso di cura."
          ></Card>
          <Card
            imageSrc="/images/Phisiotherapist4.png"
            imageAlt=""
            heading="Prevenzione e rieducazione al movimento"
            text="Aiutiamo a prevenire infortuni e sovraccarichi attraverso programmi di educazione al movimento, correzione degli schemi motori e gestione del carico, sia per sportivi che per la vita quotidiana."
          ></Card>
          <Card
            imageSrc="/images/Phisiotherapist4.png"
            imageAlt=""
            heading="Trattamenti personalizzati"
            text="Ogni persona è diversa: per questo non esistono protocolli standard. Ogni intervento è costruito su misura, con un approccio basato sulle evidenze scientifiche e sull’ascolto attivo del paziente."
          ></Card>
        </div>
      </section>
      <section className="mt-7 sm:mt-24">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold sm:text-5xl">
          Trattamenti per Condizioni Specifiche
        </h2>
        <p className="text-brownish mx-auto mt-6 max-w-3xl text-center">
          Programmi specializzati per affrontare e risolvere le problematiche
          più comuni come cervicalgia e lombalgia.
        </p>
        <div className="mt-12 flex flex-col items-center gap-2.5 sm:flex-row sm:gap-16">
          <article className="flex w-full flex-col items-center gap-5 rounded-xl bg-white p-6">
            <h3 className="font-bold">Cervicalgia</h3>
            <p className="text-brownish text-center">
              Terapia manuale, esercizi mirati e tecniche di rilassamento
              muscolare per alleviare rigidità e dolore al collo.
            </p>
          </article>
          <article className="flex w-full flex-col items-center gap-5 rounded-xl bg-white p-6">
            <h3 className="font-bold">Lombalgia</h3>
            <p className="text-brownish text-center">
              Programmi completi per ridurre il dolore lombare, migliorare la
              postura e recuperare la piena mobilità della schiena.
            </p>
          </article>
        </div>
      </section>
      <section className="mt-7 flex flex-col justify-center sm:mt-24 sm:flex-row">
        <article className="w-full rounded-xl bg-white p-11">
          <div className="flex flex-col gap-11 sm:flex-row">
            <img
              className="w-full sm:w-fit"
              src="/images/BodySkull.png"
              alt=""
            ></img>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-5 sm:gap-7">
                <h2 className="sm>text-5xl text-4xl font-bold">
                  Spazio Allenamento e Prevenzione
                </h2>
                <p className="text-brownish">
                  Un'area dedicata e attrezzata per esercizi di rinforzo,
                  mobilità e rieducazione motoria. Offriamo supporto
                  personalizzato per mantenere i progressi raggiunti e prevenire
                  futuri infortuni, consolidando i risultati nel tempo.
                </p>
              </div>
              <Button
                asChild
                className="flex w-full justify-center gap-9 rounded-xl pl-7 sm:w-fit"
              >
                <Link href="/servizi">
                  <div className="flex w-full justify-center gap-9 rounded-xl font-bold sm:w-fit">
                    Scopri i nostri spazi
                    <MoveRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ServicesPage;
