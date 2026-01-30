import Button from "@/components/Button";
import { MoveRight, User } from "lucide-react";
import Card from "@/components/Card";

const ServicesPage = () => {
  return (
    <main className="mx-auto mt-6 max-w-6xl px-4 sm:mt-9">
      <section className="mt-6 flex justify-center sm:mt-9">
        <div className="sm:bg-background flex flex-col items-center gap-2.5 rounded-xl bg-white p-4 sm:flex-row sm:gap-16 sm:p-0">
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
              <Button className="w-full rounded-xl px-6 text-center sm:w-fit">
                Contattaci
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
            heading="Riabilitazione post-chirurgica"
            text="Programmi personalizzati per ripristinare mobilità, forza e
              funzione dopo un intervento chirurgico, garantendo un recupero
              sicuro ed efficace."
          ></Card>
          <Card
            imageSrc="/images/Knee2.png"
            imageAlt=""
            heading="Riabilitazione post-traumatica e sportiva"
            text="Piani di recupero dedicati ad atleti e a chi si riprende da
              infortuni muscolari o articolari, per un ritorno rapido e sicuro
              all'attività."
          ></Card>
          <Card
            imageSrc="/images/TwoWoman.png"
            imageAlt=""
            heading="Riabilitazione per dolori muscolo-scheletrici"
            text="Trattamenti mirati per dolori acuti o cronici dovuti a problemi
              posturali, sovraccarico o stress. Riduciamo il dolore e
              miglioriamo la qualità della tua vita."
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
            imageSrc="/images/Tecar.png"
            imageAlt=""
            heading="Tecar Terapia"
            text="Stimola la rigenerazione tissutale e riduce infiammazione e
              dolore, accelerando il recupero in modo non invasivo."
          ></Card>
          <Card
            imageSrc="/images/Phisiotherapist4.png"
            imageAlt=""
            heading="Laser Terapia"
            text="Favorisce la guarigione accelerando i processi biologici naturali
              di recupero, con un'azione antinfiammatoria e analgesica."
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
              <Button className="flex w-full justify-center gap-9 rounded-xl pl-7 sm:w-fit">
                Scopri i nostri spazi
                <MoveRight />
              </Button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ServicesPage;
