"use client";

import Button from "@/components/Button";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import {
  Phone,
  ShieldPlus,
  Volleyball,
  Bone,
  MoveRight,
  MoveLeft,
  Star,
  ShieldCheck,
  BookMarked,
  FlaskConical,
  Plus,
  Link,
} from "lucide-react";
import RoundedIconWrapper from "@/components/RoundedIconWrapper";

import Accordion from "@/components/Accordion";
import CardContainer from "@/components/CardContainer";
import Review from "@/components/Review";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const accordionDefaultState = {
  visita: false,
  dolore: false,
  durata: false,
  sedute: false,
  allenamenti: false,
};

export default function Home() {
  const [accordionsState, setAccordionsState] = useState(accordionDefaultState);

  const toggleAccordion = (key) => {
    setAccordionsState((prev) => ({
      ...accordionDefaultState,
      [key]: !prev[key],
    }));
  };

  console.log(accordionsState);
  return (
    <main className="mx-auto mt-5 max-w-7xl px-4">
      <header className="relative">
        <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-5 p-4 pb-9 sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Dal Fisio
          </h1>
          <p className="max-w-3xl text-base text-white sm:mb-6 sm:text-xl">
            Fisioterapia e riabilitazione sportiva a Bergamo. Specializzati nel
            recupero post-chirurgico e post-traumatico.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="group hover:bg-primary-background flex w-full items-center justify-center gap-2 rounded-xl p-4 px-5 sm:w-fit">
              <Phone className="size-6" />
              <span className="font-bold">345 090 6595</span>
            </Button>
            <Button className="group hover:bg-primary-background flex w-full items-center justify-center gap-2 rounded-xl bg-white p-4 px-5 sm:w-fit">
              <WhatsAppIcon className="size-6 text-black" />
              <span className="font-bold text-black">
                Contattaci su WhatsApp
              </span>
            </Button>
          </div>
        </div>
        <img
          className="h-[675px] w-full rounded-2xl bg-fixed object-cover shadow-md sm:h-[575px]"
          src="/images/centrofisioterapia.jpg"
          alt=""
        />
      </header>
      <section className="mt-7 flex flex-col items-center justify-center gap-5 lg:mt-24 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-col gap-6 lg:max-w-lg lg:gap-10">
          <div className="flex flex-col gap-2.5 lg:gap-5">
            <h2 className="text-4xl font-bold lg:text-5xl">I Nostri Servizi</h2>
            <p className="text-brownish">
              Offriamo trattamenti mirati e personalizzati per una vasta gamma
              di necessità
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 md:mb-4 lg:mb-0 lg:gap-5">
            <li className="md:bg-background flex gap-3 rounded-xl bg-white p-4 lg:gap-3.5 lg:p-0">
              <RoundedIconWrapper className="text-sm">
                <ShieldPlus className="text-primary" />
              </RoundedIconWrapper>
              <div>
                <h3 className="font-bold">Recupero Post-Chirurgico</h3>
                <p className="text-brownish">
                  Piani di riabilitazione per ritrovare la mobilità dopo un
                  intervento.
                </p>
              </div>
            </li>
            <li className="md:bg-background flex gap-3 rounded-xl bg-white p-4 pt-2.5 lg:gap-3.5 lg:p-0">
              <RoundedIconWrapper className="text-sm">
                <Volleyball className="text-primary" />
              </RoundedIconWrapper>
              <div>
                <h3 className="font-bold">Riabilitazione Sportiva</h3>
                <p className="text-brownish">
                  Supporto ad atleti per il recupero da infortuni e
                  l'ottimizzazione della performance.
                </p>
              </div>
            </li>
            <li className="md:bg-background flex gap-3 rounded-xl bg-white p-4 pt-3 lg:gap-3.5 lg:p-0">
              <RoundedIconWrapper className="text-sm">
                <Bone className="text-primary" />
              </RoundedIconWrapper>
              <div>
                <h3 className="font-bold">Sollievo del Dolore</h3>
                <p className="text-brownish">
                  Trattamenti scientifici per cervicalgie, lombalgie e dolori
                  muscoloscheletrici.
                </p>
              </div>
            </li>
          </ul>
          <Button className="hidden w-fit items-center justify-center gap-2.5 rounded-xl p-2.5 px-3.5 lg:flex">
            <Link href="/servizi"></Link>Vedi tutti i servizi
            <MoveRight />
          </Button>
        </div>
        <div className="grid w-full grid-cols-2 justify-center gap-2.5 lg:relative lg:my-auto lg:flex lg:aspect-450/400 lg:w-[500px]">
          <img
            src="/images/inostriservizi.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover shadow-md md:h-72 lg:absolute lg:top-0 lg:left-0 lg:z-0 lg:h-auto lg:w-3/4"
          />
          <img
            src="/images/inostriservizi3.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover shadow-md md:h-72 lg:absolute lg:right-0 lg:bottom-2 lg:h-auto lg:w-2/3 lg:border-3 lg:border-white"
          />
        </div>
        <Button className="flex w-full items-center justify-center gap-2.5 rounded-xl p-2.5 px-3.5 lg:hidden">
          Vedi tutti i servizi
          <MoveRight />
        </Button>
      </section>
      <section className="mt-7 sm:mt-24">
        <h2 className="mb-3.5 text-center text-4xl font-bold sm:mb-20 sm:text-left sm:text-5xl">
          Cosa Faciamo per te?
        </h2>
        <div className="mx-auto flex max-w-5xl grid-cols-2 flex-col justify-center gap-5 sm:grid sm:gap-6">
          <CardContainer>
            <img src="/images/Backpain.jpg" alt="" />
            <div className="flex flex-col gap-4 pt-7">
              <h3 className="text-lg font-bold">
                Hai mal di Schiena al Lavori?
              </h3>
              <p className="text-brownish">
                Affrontiamo lombalgia e cervicalgia con terapie mirate. Usiamo
                la Terapia Manuale per il sollievo immediato e programmi di
                Esercizi Terapeutici di Forza per costruire muscoli di sostegno
                e prevenire ricadute.
              </p>
            </div>
          </CardContainer>
          <CardContainer>
            <img src="/images/Exercise.jpg" alt="" />
            <div className="flex flex-col gap-4 pt-7">
              <h3 className="text-lg font-bold">Sport e Prevenzione</h3>
              <p className="text-brownish">
                Analisi del gesto sportivo e prevenzione degli infortuni.
                Offriamo Taping Neuromuscolare e programmi di Potenziamento
                Funzionale per migliorare la tua performance e proteggere le
                articolazioni sotto sforzo.
              </p>
            </div>
          </CardContainer>
          <CardContainer>
            <img src="/images/Running.jpg" alt="" />
            <div className="flex flex-col gap-4 pt-7">
              <h3 className="text-lg font-bold">Traumi e Infortuni</h3>
              <p className="text-brownish">
                Dopo fratture, distorsioni o interventi chirurgici, ti seguiamo
                con protocolli di Riabilitazione Attiva. Utilizziamo Massaggi
                Terapeutici per ridurre il gonfiore e la rieducazione al
                movimento specifica per la zona lesa.
              </p>
            </div>
          </CardContainer>
          <CardContainer>
            <img src="/images/Backpain2.jpg" alt="" />
            <div className="flex flex-col gap-4 pt-7">
              <h3 className="text-lg font-bold">Dolori Articolari e Cronici</h3>
              <p className="text-brownish">
                Interveniamo su artrosi, tendinopatie e infiammazioni croniche.
                La nostra strategia combina Tecniche Osteopatiche con la Terapia
                Fisica strumentale (es. Tecar) per gestire il dolore e
                recuperare il pieno range di movimento.
              </p>
            </div>
          </CardContainer>
        </div>
      </section>
      <section className="mt-7 sm:mt-24">
        <h2 className="mb-7 text-center text-4xl font-bold sm:mb-20 sm:text-5xl">
          Cosa dicono di noi?
        </h2>

        <Carousel className="mx-auto w-full max-w-7xl">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <Review
                imageSrc="/images/Avatarexample.jpg"
                imageAlt=""
                name="Nicolò Orlandini"
                text="Contattato dopo essermi rotto la clavicola per recuperare mobilità
              e forza, ho trovato grande competenza e serietà. Oltre alle sedute
              in studio, gli esercizi personalizzati da fare a casa sono stati
              fondamentali per recuperare al meglio."
              ></Review>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Review
                imageSrc="/images/Avatarexample.jpg"
                imageAlt=""
                name="Alessandro Rozzoni"
                text="Mi sono rivolto a Luca in seguito a un infortunio all’adduttore e
              non posso che ritenermi estremamente soddisfatto del percorso
              fatto insieme. È un professionista competente, attento e sempre
              disponibile."
              ></Review>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Review
                imageSrc="/images/Avatarexample.jpg"
                imageAlt=""
                name="Luigi Paulli"
                text="Grazie dott. Luca per aver curato mio figlio per l’incidente alla
              spalla ,ora sta benissimo, grazie !! E mia mamma per la frattura
              al polso !! Ottima persona e super professionale!!
              Consigliatissimo , ancora grazie 😃"
              ></Review>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Review
                imageSrc="/images/Avatarexample.jpg"
                imageAlt=""
                name="Monica Marconi"
                text="Sono stata da Luca per riabilitazione a seguito di intervento di protesi al ginocchio. Mi sono ripresa ripresa perfettamente grazie alla sua competenza, professionalità e rigore nel seguirmi in un ambiente familiare e ben curato!"
              ></Review>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="sm:bg-background mt-7 rounded-xl bg-white p-4 sm:mt-24">
        <h2 className="mb-7 text-center text-4xl font-bold sm:mb-20 sm:text-5xl">
          I Nostri Valori
        </h2>
        <div className="flex flex-col gap-16 sm:flex-row">
          <article className="flex gap-4 px-4 sm:px-0">
            <RoundedIconWrapper className="mt-1">
              <ShieldCheck className="text-primary" />
            </RoundedIconWrapper>
            <div>
              <h3 className="mb-1 text-lg font-bold">
                Impegno e cura personalizzata
              </h3>
              <p className="text-brownish">
                Ti dedichiamo tutto il tempo necessario, analizzando a fondo il
                tuo caso. Il tuo piano è su misura e segue solo i tuoi
                progressi.
              </p>
            </div>
          </article>
          <article className="flex gap-4 px-4 sm:px-0">
            <RoundedIconWrapper className="mt-1">
              <BookMarked className="text-primary" />
            </RoundedIconWrapper>
            <div>
              <h3 className="mb-1 text-lg font-bold">Formazione costante</h3>
              <p className="text-brownish">
                Siamo sempre un passo avanti. Ci aggiorniamo sulle nuove
                metodologie globali per offrirti l'eccellenza in fisioterapia.
              </p>
            </div>
          </article>
          <article className="flex gap-4 px-4 sm:px-0">
            <RoundedIconWrapper className="mt-1">
              <FlaskConical className="text-primary" />
            </RoundedIconWrapper>
            <div>
              <h3 className="mb-1 text-lg font-bold">Basato sulla scienza</h3>
              <p className="text-brownish">
                Non lavoriamo per ipotesi. Ogni trattamento e basato sull´ultima
                ricerca clinica per garantirti un recupero solido e mirato.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="sm:bg-background mt-7 flex flex-col items-center rounded-xl bg-white p-4 sm:mt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-14">
          <div className="mx-4">
            <h2 className="mb-3.5 text-left text-4xl font-bold sm:mb-6 sm:text-5xl">
              Chi Siamo
            </h2>
            <p className="text-brownish mb-4 sm:mb-8">
              Siamo Luca, Matteo e Marianna, tre fisioterapisti con la passione
              per il recupero funzionale. La nostra missione è aiutarti a
              superare il dolore e a tornare alle tue passioni, che sia lo sport
              o la vita di tutti i giorni.
            </p>
            <span className="text-brownish mb-3.5 block font-bold sm:mb-4">
              Abbiamo collaborato con
            </span>
            <div className="flex flex-col gap-3.5 lg:flex-row">
              <div className="flex gap-3">
                <img src="/images/Atalanta.png" alt="" className="w-7"></img>
                <img
                  src="/images/SportSpecialist.png"
                  alt=""
                  className="w-24"
                ></img>
              </div>
              <Button className="flex w-full items-center justify-center gap-9 rounded-xl sm:w-fit lg:ml-auto">
                Scopri di piú <MoveRight />
              </Button>
            </div>
          </div>
          <img
            src="/images/Phisiotherapists.jpg"
            className="h-80 w-full rounded-xl object-cover object-top shadow-md md:max-w-1/2 lg:min-h-[550px]"
            alt=""
          />
        </div>
      </section>
      <section className="sm:bg-background mt-7 flex flex-col items-center justify-center gap-2.5 rounded-xl bg-white p-4 sm:mt-24 sm:gap-10 lg:flex-row">
        <div className="flex flex-col gap-7 lg:order-2">
          <div className="flex flex-col gap-4">
            <h1 className="w-full text-left text-4xl font-bold sm:text-5xl">
              I Nostri Spazi
            </h1>
            <p className="text-brownish max-w-2xl">
              Un ambiente moderno, accogliente e dotato delle migliori
              attrezzature per garantirti un percorso di recupero efficace e
              confortevole.
            </p>
          </div>

          <Button className="mt-7 ml-auto hidden w-fit items-center gap-2.5 rounded-xl sm:mt-0 sm:flex">
            Esplora lo studio
            <MoveRight className="w-10"></MoveRight>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-4 lg:order-1">
          <img
            src="/images/spazi.jpg"
            className="h-54 w-full rounded-xl object-cover shadow-md sm:h-74"
            alt=""
          />
          <img
            src="/images/spazi2.jpg"
            className="h-54 w-full rounded-xl object-cover shadow-md sm:h-74"
            alt=""
          ></img>
        </div>
        <div className="w-full sm:hidden sm:self-end lg:order-2">
          <Button className="flex w-full items-center justify-center gap-3.5 rounded-xl">
            Esplora lo studio
            <MoveRight className="w-10"></MoveRight>
          </Button>
        </div>
      </section>
      <section className="sm:bg-background mt-7 items-center justify-center rounded-xl bg-white p-4 sm:mt-24">
        <h1 className="mb-2.5 flex text-left text-4xl font-bold sm:mb-20 sm:text-5xl">
          Domande Frequenti
        </h1>
        <div className="flex w-full flex-col gap-2.5 sm:gap-10">
          <Accordion
            heading="Cosa devo portare alla prima visita?"
            text="Per la prima visita è utile portare eventuali referti medici,
              esami diagnostici e una lista dei sintomi che stai riscontrando.
              Ti consigliamo inoltre un abbigliamento comodo che permetta di
              eseguire movimenti e test posturali. In questo modo potremo
              valutarti in maniera completa e accurata."
            onOpenChange={() => toggleAccordion("visita")}
            open={accordionsState.visita}
          ></Accordion>
          <Accordion
            heading="Devo avere dolore per rivolgermi al fisioterapista?"
            text="Non è necessario avere dolore per iniziare un percorso
              fisioterapico. Possiamo aiutarti anche in ottica preventiva, per
              migliorare postura, mobilità o performance sportiva. Intervenire
              prima che insorga un sintomo ti permette spesso di evitare
              problemi più complessi in futuro."
            onOpenChange={() => toggleAccordion("dolore")}
            open={accordionsState.dolore}
          ></Accordion>
          <Accordion
            heading="Quanto durano le sedute?"
            text="La durata di una seduta dipende dal tipo di trattamento
              necessario. In genere un incontro dura tra i 45 e i 60 minuti, ma
              alcuni percorsi specifici possono richiedere tempi leggermente
              diversi. Durante la prima valutazione ti indicheremo la durata più
              adatta al tuo caso."
            onOpenChange={() => toggleAccordion("durata")}
            open={accordionsState.durata}
          ></Accordion>
          <Accordion
            heading="Quante sedute sono necessarie per vedere risultati?"
            text="Dipende dal tipo di problema e dagli obiettivi del trattamento. In
              alcuni casi bastano poche sedute per percepire miglioramenti,
              mentre per situazioni più complesse può essere necessario un
              percorso più lungo. Dopo la prima valutazione, ti forniremo una
              stima personalizzata."
            onOpenChange={() => toggleAccordion("sedute")}
            open={accordionsState.sedute}
          ></Accordion>
          <Accordion
            heading="Posso continuare ad allenarmi durante il trattamento?"
            text="Dipende dal tipo di problema e dal piano terapeutico definito. In
              molti casi è possibile continuare ad allenarsi adattando
              l’attività, mentre in altri può essere utile una pausa temporanea.
              Dopo la valutazione iniziale ti daremo indicazioni personalizzate
              su cosa puoi fare in totale sicurezza."
            onOpenChange={() => toggleAccordion("allenamenti")}
            open={accordionsState.allenamenti}
          ></Accordion>
        </div>
      </section>
      <section className="mt-7 flex justify-center sm:mt-24">
        <article className="flex w-5xl flex-col items-center gap-2.5 rounded-xl bg-white p-4 sm:gap-6 sm:py-8">
          <div className="flex flex-col items-center gap-2.5 sm:gap-8">
            <h2 className="px-6 text-center text-2xl font-bold text-black sm:text-5xl">
              Pronto a Iniziare il Tuo Percorso Recupero?
            </h2>
            <p className="text-brownish max-w-3xl text-center">
              Contattaci oggi per scoprire come possiamo aiutarti a tornare al
              meglio delle tue capacità. Il nostro team è a tua disposizione per
              rispondere alle tue domande e guidarti nel tuo primo passo verso
              la guarigione.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:w-full sm:flex-row sm:justify-center">
            <Button className="flex w-full items-center justify-center gap-2.5 rounded-xl px-16 font-semibold sm:w-fit">
              Contattaci
              <Phone className="size-5"></Phone>
            </Button>
            <Button className="flex w-full justify-center gap-2.5 rounded-xl bg-white outline-1 outline-black sm:w-fit">
              <span className="font-bold text-black">
                Scopri i nostri servizi
              </span>
              <MoveRight className="text-black"></MoveRight>
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
