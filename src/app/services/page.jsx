import Button from "@/components/Button";
import { MoveRight, User } from "lucide-react";

const ServicesPage = () => {
  return (
    <main className="mx-auto mt-6 max-w-7xl sm:mt-9">
      <section className="mx-4 mt-6 flex justify-center sm:mt-9">
        <div className="sm:bg-background flex flex-col items-center justify-between gap-2.5 rounded-xl bg-white p-4 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-4 sm:max-w-96">
            <h1 className="text-4xl font-bold sm:mb-2.5 sm:text-5xl">
              I Nostri Servizi
            </h1>
            <p className="text-brownish">
              Dal Fisio ci dedichiamo al tuo recupero. Scopri il nostro
              approccio personalizzato alla fisioterapia e alla cura del
              paziente.
            </p>
            <div className="flex w-full items-center justify-center">
              <Button className="w-full rounded-xl px-6 sm:w-fit">
                Contattaci
              </Button>
            </div>
          </div>
          <img
            className="rounded-xl"
            src="/images/Phisiotherapist3.png"
            alt=""
          ></img>
        </div>
      </section>
      <section className="mx-4 mt-7 flex flex-col items-center gap-5 sm:mt-24">
        <div className="flex flex-col gap-4 sm:gap-3.5">
          <h2 className="text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Riabilitazione e Recupero Funzionale
          </h2>
          <p className="text-brownish text-center sm:text-left">
            Percorsi su misura per ritornare alla piena funzionalità dopo
            interventi, infortuni o per gestire dolori cronici.
          </p>
        </div>
        <div className="flex flex-col sm:gap-14">
          <div className="sm:flex sm:gap-32">
            <article className="mb-2.5 flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-md">
              <img className="rounded-xl" src="/images/Knee.png" alt=""></img>
              <h3 className="text-lg font-bold">
                Riabilitazione post-chirurgica
              </h3>
              <p className="text-brownish">
                Programmi personalizzati per ripristinare mobilità, forza e
                funzione dopo un intervento chirurgico, garantendo un recupero
                sicuro ed efficace.
              </p>
            </article>
            <article className="mb-2.5 flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-md">
              <img className="rounded-xl" src="/images/Knee2.png" alt=""></img>
              <h3 className="text-lg font-bold">
                Riabilitazione post-traumatica e sportiva
              </h3>
              <p className="text-brownish">
                Piani di recupero dedicati ad atleti e a chi si riprende da
                infortuni muscolari o articolari, per un ritorno rapido e sicuro
                all'attività.
              </p>
            </article>
          </div>
          <div className="mx-auto">
            <article className="mb-2.5 flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-md">
              <img
                className="rounded-xl"
                src="/images/TwoWoman.png"
                alt=""
              ></img>
              <h3 className="text-lg font-bold">
                Riabilitazione per dolori muscolo-scheletrici
              </h3>
              <p className="text-brownish">
                Trattamenti mirati per dolori acuti o cronici dovuti a problemi
                posturali, sovraccarico o stress. Riduciamo il dolore e
                miglioriamo la qualità della tua vita.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="mx-4 mt-7 flex flex-col items-center gap-6 sm:mt-24 sm:gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold sm:text-5xl">Terapie Fisiche</h2>
          <p className="text-brownish px-10 text-center">
            Tecnologie all'avanguardia per accelerare i processi di guarigione e
            offrire un sollievo efficace dal dolore.
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-32">
          <article className="flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-md">
            <img className="rounded-xl" src="/images/Tecar.png" alt=""></img>
            <h3 className="text-lg font-bold">Tecar Terapia</h3>
            <p className="text-brownish">
              Stimola la rigenerazione tissutale e riduce infiammazione e
              dolore, accelerando il recupero in modo non invasivo.
            </p>
          </article>
          <article className="flex flex-col justify-center gap-3 rounded-xl bg-white p-6 sm:w-md">
            <img
              className="rounded-xl"
              src="/images/Phisiotherapist4.png"
              alt=""
            ></img>
            <h3 className="text-lg font-bold">Laser Terapia</h3>
            <p className="text-brownish">
              Favorisce la guarigione accelerando i processi biologici naturali
              di recupero, con un'azione antinfiammatoria e analgesica.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-4 mt-7 flex justify-center sm:mt-24">
        <div className="flex flex-col gap-5 sm:gap-12">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Trattamenti per Condizioni Specifiche
            </h2>
            <p className="text-brownish">
              Programmi specializzati per affrontare e risolvere le
              problematiche più comuni come cervicalgia e lombalgia.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:gap-16">
            <article className="flex w-lg flex-col items-center gap-5 rounded-xl bg-white p-6">
              <h3 className="font-bold">Cervicalgia</h3>
              <p className="text-brownish text-center">
                Terapia manuale, esercizi mirati e tecniche di rilassamento
                muscolare per alleviare rigidità e dolore al collo.
              </p>
            </article>
            <article className="flex w-lg flex-col items-center gap-5 rounded-xl bg-white p-6">
              <h3 className="font-bold">Lombalgia</h3>
              <p className="text-brownish text-center">
                Programmi completi per ridurre il dolore lombare, migliorare la
                postura e recuperare la piena mobilità della schiena.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="mx-4 mt-7 flex flex-col justify-center sm:mt-24 sm:flex-row">
        <article className="rounded-xl bg-white p-11 sm:w-5xl">
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
      <section className="mt-7 flex justify-center mx-4 sm:mt-24 sm:hidden">
        <article className="bg-blue-backgroud flex w-5xl flex-col items-center gap-2.5 rounded-xl p-8">
          <div className="flex flex-col gap-2.5 sm:gap-8">
            <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
              Pronto a Iniziare il Tuo Recupero?
            </h2>
            <p className="text-center text-white">
              Prenota oggi la tua prima visita con un fisioterapista a Bergamo e
              fai il primo passo verso una vita senza dolore.
            </p>
          </div>
          <Button className="flex w-fit gap-2.5">
            <User />
            Contattaci per prenotare
          </Button>
        </article>
      </section>
    </main>
  );
};

export default ServicesPage;
