"use client";

import Button from "@/components/Button";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import {
  Phone,
  ShieldPlus,
  Volleyball,
  Bone,
  MoveRight,
  ShieldCheck,
  BookCheck,
  Activity,
  Dumbbell,
  UserRoundCheck,
} from "lucide-react";
import RoundedIconWrapper from "@/components/RoundedIconWrapper";
import Link from "next/link";
import CardContainer from "@/components/CardContainer";

import { useState } from "react";

import ReviewCarousel from "@/components/ReviewCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <main className="mx-auto mt-5 max-w-6xl px-4">
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
            <Button className="group flex w-full items-center justify-center gap-2 rounded-xl p-4 px-5 sm:w-fit">
              <Phone className="size-6" />
              <span className="font-bold">345 090 6595</span>
            </Button>
            <Button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white p-4 px-5 hover:bg-white sm:w-fit">
              <WhatsAppIcon className="size-6 text-black" />
              <span className="font-bold text-black">
                Contattaci su WhatsApp
              </span>
            </Button>
          </div>
        </div>
        <img
          className="h-[500px] w-full rounded-2xl bg-fixed object-cover shadow-md sm:h-[575px]"
          src="/images/Gym_Wide.jpg"
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
              <RoundedIconWrapper className="bg-primary text-sm">
                <ShieldPlus className="text-white" />
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
              <RoundedIconWrapper className="bg-primary text-sm">
                <Volleyball className="text-white" />
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
              <RoundedIconWrapper className="bg-primary text-sm">
                <Bone className="text-white" />
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
          <Button
            asChild
            className="hidden w-fit items-center justify-center gap-2.5 rounded-xl p-2.5 px-3.5 lg:flex"
          >
            <Link href="/servizi">
              <div className="hidden w-fit items-center justify-center gap-2.5 rounded-xl font-bold lg:flex">
                Vedi tutti i servizi
                <MoveRight />
              </div>
            </Link>
          </Button>
        </div>
        <div className="grid w-full grid-cols-2 justify-center gap-2.5 lg:relative lg:my-auto lg:flex lg:aspect-450/400 lg:w-[500px]">
          <img
            src="/images/Weights.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover shadow-md md:h-72 lg:absolute lg:top-0 lg:left-0 lg:z-0 lg:h-auto lg:w-3/4"
          />
          <img
            src="/images/Studio_Bed.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover shadow-md md:h-72 lg:absolute lg:right-0 lg:bottom-2 lg:h-auto lg:w-2/3 lg:border-3 lg:border-white"
          />
        </div>
        <Button
          asChild
          className="flex w-full items-center justify-center gap-2.5 rounded-xl p-2.5 px-3.5 lg:hidden"
        >
          <Link href="/servizi">
            <div className="flex w-full items-center justify-center gap-2.5 rounded-xl font-bold lg:hidden">
              Vedi tutti i servizi
              <MoveRight />
            </div>
          </Link>
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
        <ReviewCarousel />
      </section>
      <section className="sm:bg-background mt-7 rounded-xl bg-white p-4 sm:mt-24">
        <div className="flex flex-col items-center gap-2.5 text-center lg:gap-8">
          <h2 className="text-center text-4xl font-bold sm:text-5xl">
            Come Lavoriamo
          </h2>
        </div>
        <div className="mt-7 flex flex-col gap-16 sm:mt-18 sm:grid sm:grid-cols-2">
          <article className="flex flex-1/3 flex-col gap-4 px-4 sm:rounded-2xl sm:bg-white sm:p-6">
            <div className="flex items-center gap-4 sm:flex-row">
              <BookCheck className="text-primary size-8 shrink-0 sm:size-12" />
              <h3 className="mb-1 text-lg font-bold">Educazione</h3>
            </div>
            <div>
              <p className="text-brownish text-justify">
                Spieghiamo in modo chiaro cosa sta accadendo al corpo, aiutando
                il paziente a <strong>comprendere </strong>l’origine del dolore
                e i meccanismi coinvolti. La <strong>consapevolezza </strong>è
                il primo passo verso il recupero.
              </p>
            </div>
          </article>
          <article className="flex flex-1/3 flex-col gap-4 px-4 sm:rounded-2xl sm:bg-white sm:p-6">
            <div className="flex items-center gap-4 sm:flex-row">
              <Activity className="text-primary size-8 shrink-0 sm:size-12" />
              <h3 className="mb-1 text-lg font-bold">Dolore</h3>
            </div>
            <div>
              <p className="text-brownish text-justify">
                Indaghiamo le caratteristiche del <strong>dolore: </strong>
                localizzazione, intensità, modalità di insorgenza, andamento
                nelle 24 ore e <strong>durata nel tempo. </strong>Questa fase è
                essenziale per individuare la causa del problema e definire il
                percorso terapeutico più <strong>efficace.</strong>
              </p>
            </div>
          </article>
          <article className="flex flex-1/3 flex-col gap-4 px-4 sm:rounded-2xl sm:bg-white sm:p-6">
            <div className="flex items-center gap-4 sm:flex-row">
              <Dumbbell className="text-primary size-8 shrink-0 sm:size-12" />
              <h3 className="mb-1 text-lg font-bold">
                Esercizi personalizatti
              </h3>
            </div>
            <div>
              <p className="text-brownish text-justify">
                Proponiamo esercizi terapeutici <strong>su misura, </strong>
                <strong>adattati </strong>alle caratteristiche e agli obiettivi
                del paziente, per favorire l’autonomia,
                <strong> prevenire </strong>ricadute e
                <strong> migliorare </strong>la qualità della vita.
              </p>
            </div>
          </article>
          <article className="flex flex-1/3 flex-col gap-4 px-4 sm:rounded-2xl sm:bg-white sm:p-6">
            <div className="flex items-center gap-4 sm:flex-row">
              <UserRoundCheck className="text-primary size-8 shrink-0 sm:size-12" />
              <h3 className="mb-1 text-lg font-bold">Valutazione funzionale</h3>
            </div>
            <div>
              <p className="text-brownish text-justify">
                Eseguiamo una valutazione
                <strong> funzionale approfondita </strong> attraverso test
                specifici di mobilità, forza e controllo motorio. Questo ci
                permette di individuare
                <strong> squilibri, limitazioni </strong>e
                <strong> compensi </strong>, costruendo un piano di fisioterapia
                personalizzato, efficace e basato sulle
                <strong> evidenze scientifiche.</strong>
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
              Siamo Luca e Matteo, due fisioterapisti con la passione
              per il recupero funzionale. La nostra missione è aiutarti a
              superare il dolore e a tornare alle tue passioni, che sia lo sport
              o la vita di tutti i giorni.
            </p>
            <span className="text-brownish mb-3.5 block font-bold sm:mb-4">
              Abbiamo collaborato con
            </span>
            <div className="flex flex-col gap-3.5 lg:flex-row">
              <div className="flex gap-3">
                <img src="/images/Atalanta.avif" alt="" className="w-10"></img>
                <img src="/images/IstitutoCQ.png" alt="" className="w-10"></img>
              </div>
              <Button
                asChild
                className="flex w-full items-center justify-center gap-9 rounded-xl sm:w-fit lg:ml-auto"
              >
                <Link href="/chi-siamo" className="font-bold">
                  Scopri di piú
                </Link>
                <MoveRight />
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

          <Button
            asChild
            className="mt-7 ml-auto hidden w-fit items-center gap-2.5 rounded-xl sm:mt-0 sm:flex"
          >
            <Link href="/spazi">
              <div className="mt-7 ml-auto hidden w-fit items-center gap-2.5 rounded-xl font-bold sm:mt-0 sm:flex">
                Esplora lo studio
                <MoveRight className="w-10"></MoveRight>
              </div>
            </Link>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-4 lg:order-1">
          <img
            src="/images/Gym_Wide (3).jpg"
            className="h-54 w-full rounded-xl object-cover shadow-md sm:h-74"
            alt=""
          />
          <img
            src="/images/Studio_wider (2).jpg"
            className="h-54 w-full rounded-xl object-cover shadow-md sm:h-74"
            alt=""
          ></img>
        </div>
        <div className="w-full sm:hidden sm:self-end lg:order-2">
          <Button
            asChild
            className="flex w-full items-center justify-center gap-3.5 rounded-xl"
          >
            <Link href="/spazi" className="flex gap-2.5 font-bold">
              Esplora lo studio
              <MoveRight className="w-10"></MoveRight>
            </Link>
          </Button>
        </div>
      </section>
      <section className="sm:bg-background mt-7 items-center justify-center rounded-xl bg-white p-4 sm:mt-24">
        <h1 className="mb-2.5 flex text-left text-4xl font-bold sm:mb-20 sm:text-5xl">
          Domande Frequenti
        </h1>
        <div className="flex w-full flex-col gap-2.5 sm:gap-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                Quanto durano le sedute?
              </AccordionTrigger>
              <AccordionContent className="text-brownish">
                La prima visita ha una durata di circa 1 ora ed è strutturata in
                3 momenti principali:
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Anamnesi (primo colloquio)</strong> durante la quale
                    ascoltiamo il paziente che presenterà i suoi disturbi e la
                    sua richiesta di aiuto. Indaghiamo la manifestazione dei
                    sintomi e lo stile di vita, e analizziamo eventuali referti
                    specialistici (visite mediche, indagini strumentali),
                    discutendone insieme gli esiti
                  </li>
                  <li>
                    <strong>
                      Esame obiettivo (vera e propria valutazione)
                    </strong>{" "}
                    durante la quale somministriamo alcuni test e manovre
                    specifiche per comprendere nel dettaglio la natura e le
                    cause dei disturbi
                  </li>
                  <li>
                    <strong>Prima parte del trattamento</strong> in cui
                    eseguiamo tecniche di terapia manuale, integriamo, se
                    necessario, terapie strumentali e guidiamo il paziente
                    nell’esecuzione di alcuni esercizi. Nella maggior parte dei
                    casi, questi vengono poi prescritti anche per
                    l’autotrattamento a casa con supporto video (previo
                    consenso) o in formato scritto.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">
                Quante sedute sono necessarie per vedere risultati?
              </AccordionTrigger>
              <AccordionContent className="text-brownish">
                Le sedute successive verranno concordate insieme al paziente.
                Come descritto in precedenza non esiste un numero standardizzato
                di sedute: la programmazione dipenderà dalla
                <strong> condizione del paziente,</strong> dal suo iniziale
                approccio al problema <strong>(attivo/passivo)</strong> e da
                altri fattori legati al suo <strong>stile di vita.</strong>{" "}
                Desideriamo rassicurarti: non proponiamo mai cicli di
                trattamenti con un numero elevato e predefinito di sedute a
                scopo commerciale. <strong>La qualità</strong> delle cure e la
                <strong> soddisfazione</strong> del paziente sono due aspetti
                fondamentali nella nostra attività.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">
                Cosa devo portare alla prima visita?
              </AccordionTrigger>
              <AccordionContent className="text-brownish">
                Per la prima visita è utile portare eventuali{" "}
                <strong>referti medici,</strong>{" "}
                <strong>esami diagnostici</strong> e una{" "}
                <strong>lista dei sintomi</strong> che stai riscontrando. Ti
                consigliamo inoltre un abbigliamento comodo che permetta di
                eseguire movimenti e test posturali. In questo modo potremo
                valutarti in maniera completa e accurata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-bold">
                Devo avere dolore per rivolgermi al fisioterapista?
              </AccordionTrigger>
              <AccordionContent className="text-brownish">
                <strong>Non è necessario avere dolore</strong> per iniziare un
                percorso fisioterapico. Possiamo aiutarti anche in ottica
                preventiva, per migliorare postura, mobilità o performance
                sportiva. Intervenire prima che insorga un sintomo ti permette
                spesso di{" "}
                <strong>evitare problemi più complessi in futuro.</strong>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-bold">
                Quante sedute sono necessarie per vedere risultati?
              </AccordionTrigger>
              <AccordionContent className="text-brownish">
                <strong>Dipende</strong> dal <strong>tipo di problema </strong>e
                dagli <strong>obiettivi</strong> del trattamento. In alcuni casi
                bastano poche sedute per percepire miglioramenti, mentre per
                situazioni più complesse può essere necessario un percorso più
                lungo. Dopo la prima valutazione, ti forniremo una stima
                personalizzata.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
            <Button
              asChild
              className="flex w-full items-center justify-center gap-2.5 rounded-xl px-16 font-semibold sm:w-fit"
            >
              <Link href="/contatti">
                <div className="flex w-full items-center justify-center gap-2.5 rounded-xl font-semibold sm:w-fit">
                  Contattaci
                  <Phone className="size-5"></Phone>
                </div>
              </Link>
            </Button>
            <Button
              asChild
              className="group hover:outline-primary flex w-full justify-center gap-2.5 rounded-xl bg-white outline-1 outline-black hover:outline-2 sm:w-fit"
            >
              <Link href="/servizi">
                <div className="flex w-full justify-center gap-2.5 rounded-xl sm:w-fit">
                  <span className="font-bold text-black">
                    Scopri i nostri servizi
                  </span>
                  <MoveRight className="group group-hover:text-primary text-black"></MoveRight>
                </div>
              </Link>
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
