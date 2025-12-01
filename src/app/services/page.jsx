import Button from "@/components/Button";
import { MoveRight, User } from "lucide-react";

const ServicesPage = () => {
  return (
    <main className="mx-auto mt-9 max-w-7xl">
      <section className="mt-9 flex justify-center">
        <div className="flex w-6xl items-center justify-center gap-16">
          <div className="flex max-w-96 flex-col gap-2.5">
            <h1 className="mb-2.5 text-5xl font-bold">I Nostri Servizi</h1>
            <p className="text-brownish">
              Dal Fisio ci dedichiamo al tuo recupero. Scopri il nostro
              approccio personalizzato alla fisioterapia e alla cura del
              paziente.
            </p>
            <div className="flex items-center justify-center">
              <Button className="w-fit">Contattaci</Button>
            </div>
          </div>
          <img
            className="rounded-xl"
            src="/images/Phisiotherapist3.png"
            alt=""
          ></img>
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center">
        <h2 className="text-5xl font-bold">
          Riabilitazione e Recupero Funzionale
        </h2>
        <p className="text-brownish">
          Percorsi su misura per ritornare alla piena funzionalità dopo
          interventi, infortuni o per gestire dolori cronici.
        </p>

        <div className="">
          <article className="flex w-md flex-col justify-center gap-3 rounded-xl bg-white p-6">
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
          <article className="flex w-md flex-col justify-center gap-3 rounded-xl bg-white p-6">
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
          <article className="flex w-md flex-col justify-center gap-3 rounded-xl bg-white p-6">
            <img className="rounded-xl" src="/images/TwoWoman.png" alt=""></img>
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
      </section>
      <section className="mt-24 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-bold">Terapie Fisiche</h2>
          <p className="text-brownish">
            Tecnologie all'avanguardia per accelerare i processi di guarigione e
            offrire un sollievo efficace dal dolore.
          </p>
        </div>
        <div className="flex gap-32">
          <article className="flex w-md flex-col justify-center gap-3 rounded-xl bg-white p-6">
            <img className="rounded-xl" src="/images/Tecar.png" alt=""></img>
            <h3 className="text-lg font-bold">Tecar Terapia</h3>
            <p className="text-brownish">
              Stimola la rigenerazione tissutale e riduce infiammazione e
              dolore, accelerando il recupero in modo non invasivo.
            </p>
          </article>
          <article className="flex w-md flex-col justify-center gap-3 rounded-xl bg-white p-6">
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
      <section className="mt-24 flex justify-center">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-5xl font-bold">
              Trattamenti per Condizioni Specifiche
            </h2>
            <p className="text-brownish">
              Programmi specializzati per affrontare e risolvere le
              problematiche più comuni come cervicalgia e lombalgia.
            </p>
          </div>
          <div className="flex gap-16">
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
      <section className="mt-24 flex justify-center">
        <article className="w-5xl rounded-xl bg-white p-11">
          <div className="flex gap-11">
            <img src="/images/BodySkull.png" alt=""></img>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-7">
                <h2 className="text-5xl font-bold">
                  Spazio Allenamento e Prevenzione
                </h2>
                <p className="text-brownish">
                  Un'area dedicata e attrezzata per esercizi di rinforzo,
                  mobilità e rieducazione motoria. Offriamo supporto
                  personalizzato per mantenere i progressi raggiunti e prevenire
                  futuri infortuni, consolidando i risultati nel tempo.
                </p>
              </div>
              <Button className="flex w-fit gap-9 rounded-xl pl-7">
                Scopri i nostri spazi
                <MoveRight />
              </Button>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-24 flex justify-center">
        <article className="bg-blue-backgroud flex w-5xl flex-col items-center gap-2.5 rounded-xl py-8">
          <div className="flex flex-col gap-8">
            <h2 className="text-center text-5xl font-bold text-white">
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
