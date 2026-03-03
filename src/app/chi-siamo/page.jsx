import Button from "@/components/Button";
import { CircleSmall, Award, MoveRight } from "lucide-react";
import Link from "next/link";

export default function ChiSiamo() {
  return (
    <main className="mx-auto mt-9 max-w-6xl">
      <header className="mx-4 mt-9 flex flex-col items-center gap-2.5 sm:gap-7">
        <h1 className="text-5xl font-bold">Chi siamo</h1>
        <p className="text-brownish max-w-2xl text-center">
          Professionisti della fisioterapia a Bergamo. Lavoriamo insieme per
          garantire una cura individuale e mirata, essenziale per il tuo
          completo recupero funzionale.
        </p>
      </header>
      <section className="flex flex-col gap-6">
        <article className="mx-4 flex justify-center sm:mt-20">
          <div className="flex w-6xl flex-col items-center gap-6 rounded-xl bg-white p-4 sm:flex-row sm:gap-9 sm:px-20 sm:py-16">
            <div className="w-full">
              <img
                src="/images/LucaPic.png"
                className="w-full min-w-3xs"
                alt="luca-gavazzeni"
              ></img>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-6">
              <div className="flex flex-col gap-2.5 sm:gap-6">
                <h2 className="text-2xl font-bold">Luca Gavazzeni</h2>
                <ul className="text-justify">
                  <li className="text-brownish">
                    Nel corso dei primi anni di carriera professionale ho avuto
                    modo di affinare la mia pratica clinica in vari contesti,
                    tra cui <strong> poliambulatori </strong>privati, reparti
                    <strong> ospedalieri, </strong> servizio privato domiciliare
                    e società sportive professionistiche tra cui
                    <strong>
                      {" "}
                      Atalanta Bergamasca Calcio e Bergamo Basket 2014.{" "}
                    </strong>
                  </li>
                  <li className="text-brownish">
                    Oltre all’applicazione delle conoscenze specialistiche in
                    <strong> terapia manuale, </strong>prediligo uno stile
                    riabilitativo attivo con ampio utilizzo dell’esercizio
                    terapeutico.
                  </li>
                  <li className="text-brownish">
                    Appassionato <strong> dell’aggiornamento continuo, </strong>
                    il mio approccio fisioterapico è basato su
                    <strong> evidenze scientifiche </strong> e su una
                    valutazione a 360° del paziente secondo il modello
                    bio-psico-sociale
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm/relaxed sm:grid sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-2.5 transition delay-75">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">Laurea in Fisioterapia</h3>
                    <h3 className="text-brownish">
                      Università Vita Salute San Raffaele
                    </h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Master in Riabilitazione dei Disordini Muscolo-Scheletrici
                    </h3>
                    <h3 className="text-brownish">
                      Università degli Studi di Genova
                    </h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">Titolo internazionale di OMPT</h3>
                    <h3 className="text-brownish">
                      Università degli Studi di Genova
                    </h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Corso Advanced di Tecniche Manuali
                    </h3>
                    <h3 className="text-brownish">Accademia Terapie Manuali</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="mx-4 flex justify-center sm:mt-20">
          <div className="flex w-6xl flex-col gap-6 rounded-xl bg-white p-4 sm:flex-row sm:gap-9 sm:px-20 sm:py-16">
            <div className="w-full sm:order-2">
              <img
                src="/images/MatteoPic.png"
                alt="matteo-rossi"
                className="w-full min-w-3xs"
              ></img>
            </div>
            <div className="flex flex-col gap-2.5 sm:order-1 sm:gap-6">
              <div className="flex flex-col gap-2.5 sm:gap-6">
                <h2 className="text-2xl font-bold">Matteo Rossi</h2>
                <ul className="text-justify">
                  <li className="text-brownish">
                    Sono un fisioterapista specializzato in
                    <strong> ambito sportivo, </strong>
                    appassionato di sport e movimento.
                  </li>
                  <li className="text-brownish">
                    Lavoro con atleti e persone attive, costruendo percorsi di
                    riabilitazione <strong> personalizzata </strong>orientati al
                    recupero funzionale, alla <strong> prevenzione </strong>
                    degli infortuni e al <strong> miglioramento </strong>della
                    performance.
                  </li>
                  <li className="text-brownish">
                    Credo nell’esercizio terapeutico come fulcro del trattamento
                    e in un approccio <strong> evidence-based, </strong>centrato
                    sulle esigenze specifiche di ogni paziente.
                  </li>
                  <li className="text-brownish">
                    Il mio obiettivo è aiutarti a muoverti meglio, tornare allo
                    sport in sicurezza e raggiungere il
                    <strong> massimo delle tue potenzialità fisiche.</strong>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm/relaxed sm:grid sm:grid-cols-2 sm:gap-6">
                <li className="gap-2.5flex flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Laurea triennale in Fisioterapia
                    </h3>
                    <h3 className="text-brownish">
                      Università degli Studi di Milano
                    </h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Master in Fisioterapia Applicata allo Sport e alle
                      Attività Artistiche
                    </h3>
                    <h3 className="text-brownish">Università di Siena</h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Corso "Strenght and Conditioning"
                    </h3>
                    <h3 className="text-brownish">Fisioscience</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="mx-4 flex justify-center sm:mt-20">
          <div className="flex w-6xl flex-col items-center gap-6 rounded-xl bg-white p-4 sm:flex-row sm:gap-9 sm:px-20 sm:py-16">
            <div className="w-full">
              <img
                src="/images/MariannaPic.png"
                alt="marianna-gorle"
                className="w-full min-w-3xs"
              ></img>
            </div>
            <div className="flex flex-col gap-2.5 sm:order-1 sm:gap-6">
              <div className="flex flex-col gap-2.5 sm:gap-6">
                <h2 className="text-2xl font-bold">Marianna Gorle</h2>
                <p className="text-brownish">
                  Marianna è specializzata nella riabilitazione post-infortunio
                  e nella gestione del dolore cronico. Combina tecniche di
                  terapia manuale e approcci basati sull’evidenza per migliorare
                  la mobilità e la qualità di vita dei suoi pazienti. È dedicata
                  a creare percorsi terapeutici personalizzati e orientati ai
                  risultati.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm/relaxed sm:grid sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">
                      Laurea triennale in Fisioterapia
                    </h3>
                    <h3 className="text-brownish">
                      Università degli Studi di Bergamo
                    </h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">Corso di Dry Needling</h3>
                    <h3 className="text-brownish">PhisioVit</h3>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <div className="size-6">
                    <Award className="text-primary size-full" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold">Corso di Taping sportivo</h3>
                    <h3 className="text-brownish">
                      Accademia Italiana Massaggi
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-20 hidden justify-center sm:flex">
        <div className="flex w-6xl items-center rounded-xl bg-white p-16">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-5xl font-bold">
              Pronto a Iniziare il Tuo Percorso di Recupero?
            </h2>
            <p className="text-brownish text-center">
              Contattaci oggi per scoprire come possiamo aiutarti a tornare al
              meglio delle tue capacità. Il nostro team è a tua disposizione per
              rispondere alle tue domande e guidarti nel tuo primo passo verso
              la guarigione.
            </p>
            <div className="flex gap-4">
              <Button asChild className="w-fit px-7">
                <Link href="/contatti">Contattaci</Link>
              </Button>

              <Button
                asChild
                className="items-center bg-white font-bold text-black hover:bg-white"
              >
                <Link href="/servizi">
                  <div className="flex gap-4">
                    Scopri i nostri Servizi
                    <MoveRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
