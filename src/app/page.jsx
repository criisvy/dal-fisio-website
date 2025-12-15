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
import { Space_Grotesk } from "next/font/google";

export default function Home() {
  return (
    <main className="mx-auto mt-6 max-w-7xl px-4 sm:mt-9">
      <header className="relative">
        <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-4 pb-9 sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Dal Fisio
          </h1>
          <p className="max-w-3xl text-base text-white sm:text-xl">
            Fisioterapia e riabilitazione sportiva a Bergamo. Specializzati nel
            recupero post-chirurgico e post-traumatico.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="sm"
              className="hover:bg-brownish flex w-full items-center justify-center gap-2 transition sm:w-fit"
            >
              <Phone className="h-5 w-5" />
              <span>345 090 6595</span>
            </Button>
            <Button
              size="sm"
              className="hover:bg-brownish flex w-full items-center justify-center gap-2 bg-white transition sm:w-fit"
            >
              <WhatsAppIcon className="h-5 w-5 hover:text-white" />
              <span className="font-bold text-black hover:text-white">
                Contattaci su WhatsApp
              </span>
            </Button>
          </div>
        </div>
        <img
          className="h-[584px] w-full rounded-2xl bg-fixed object-cover sm:h-auto"
          src="/images/Heroimage.jpg"
          alt=""
        />
      </header>
      <section className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex w-full flex-col sm:max-w-lg">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-4xl font-bold sm:text-5xl">I Nostri Servizi</h2>
            <p className="text-brownish">
              Offriamo trattamenti mirati e personalizzati per una vasta gamma
              di necessità
            </p>
          </div>
          <ul className="mb-9">
            <li className="mt-6 flex gap-3 rounded-xl bg-white p-3.5 sm:mt-9 sm:bg-none">
              <RoundedIconWrapper className="text-sm">
                <ShieldPlus className="text-primary" />
              </RoundedIconWrapper>
              <div className="">
                <h3 className="font-bold">Recupero Post-Chirurgico</h3>
                <p className="text-brownish">
                  Piani di riabilitazione per ritrovare la mobilità dopo un
                  intervento.
                </p>
              </div>
            </li>
            <li className="mt-2.5 flex gap-3 rounded-xl bg-white p-3.5 sm:mt-9 sm:bg-none">
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
            <li className="mt-3 flex gap-3 bg-white p-3.5 sm:mt-9 sm:bg-none">
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
          <Button
            size="sm"
            className="flex w-fit items-center gap-2.5 p-2.5 px-3.5 sm:w-full"
          >
            Vedi tutti i servizi
            <MoveRight />
          </Button>
        </div>
        <div className="flex w-[408px] justify-center gap-2.5 sm:relative sm:aspect-450/400 sm:w-[500px]">
          <img
            src="/images/Fisioterapista1.jpg"
            alt=""
            className="max-w[200px] min-w[200px] top-0 left-0 z-0 sm:absolute sm:w-[75%]"
          />
          <img
            src="/images/People.jpg"
            alt=""
            className="min-w[200px] right-0 bottom-0 hidden rounded-xl sm:absolute sm:w-[45%]"
          />
        </div>
      </section>
      <section className="mt-7 sm:mt-36">
        <h2 className="mb-3.5 text-center text-4xl font-bold sm:mb-20 sm:text-left sm:text-5xl">
          Cosa Faciamo per te?
        </h2>
        <div className="mx-auto flex max-w-5xl grid-cols-2 flex-col justify-center gap-5 sm:grid sm:gap-6">
          <article className="flex min-w-sm flex-col rounded-xl bg-white p-10">
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
          </article>
          <article className="flex min-w-sm flex-col rounded-xl bg-white p-10">
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
          </article>
          <article className="flex min-w-sm flex-col rounded-xl bg-white p-10">
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
          </article>
          <article className="flex min-w-sm flex-col rounded-xl bg-white p-10">
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
          </article>
        </div>
      </section>
      <section className="mt-7 sm:mt-36">
        <h2 className="mb-7 text-center text-4xl font-bold sm:mb-20 sm:text-5xl">
          Cosa dicono di noi?
        </h2>
        <div className="relative flex flex-col gap-5 sm:flex-row">
          <button className="hidden cursor-pointer sm:absolute sm:top-1/2 sm:-left-6 sm:block sm:-translate-y-1/2">
            <RoundedIconWrapper className="bg-primary">
              <MoveLeft className="text-white"></MoveLeft>
            </RoundedIconWrapper>
          </button>
          <button className="hidden cursor-pointer sm:absolute sm:top-1/2 sm:-right-6 sm:block sm:-translate-y-1/2">
            <RoundedIconWrapper className="bg-primary">
              <MoveRight className="text-white"></MoveRight>
            </RoundedIconWrapper>
          </button>
          <div className="flex w-full flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt=""
                className="rounded-full"
              ></img>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Nicolò Orlandini</h3>
                <div className="flex">
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                </div>
              </div>
            </div>
            <blockquote className="text-brownish">
              Contattato dopo essermi rotto la clavicola per recuperare mobilità
              e forza, ho trovato grande competenza e serietà. Oltre alle sedute
              in studio, gli esercizi personalizzati da fare a casa sono stati
              fondamentali per recuperare al meglio.
            </blockquote>
          </div>
          <div className="flex w-full flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt=""
                className="rounded-full"
              ></img>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Alessandro Rozzoni</h3>
                <div className="flex">
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                </div>
              </div>
            </div>
            <blockquote className="text-brownish">
              Mi sono rivolto a Luca in seguito a un infortunio all’adduttore e
              non posso che ritenermi estremamente soddisfatto del percorso
              fatto insieme. È un professionista competente, attento e sempre
              disponibile
            </blockquote>
          </div>
          <div className="flex w-full flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt=""
                className="rounded-full"
              ></img>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Luigi Paulli</h3>
                <div className="flex">
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                  <Star className="fill-primary text-primary"></Star>
                </div>
              </div>
            </div>
            <blockquote className="text-brownish">
              Grazie dott. Luca per aver curato mio figlio per l’incidente alla
              spalla ,ora sta benissimo, grazie !! E mia mamma per la frattura
              al polso !! Ottima persona e super professionale!!
              Consigliatissimo , ancora grazie 😃
            </blockquote>
          </div>
        </div>
      </section>
      <section className="sm:bg-background mt-7 rounded-xl bg-white p-4 sm:mt-36">
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
      <section className="sm:bg-background mt-7 flex flex-col items-center rounded-xl bg-white p-4 sm:mt-36">
        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-14">
          <div className="mx-4">
            <h2 className="mb-2.5 text-left text-4xl font-bold sm:mb-6 sm:text-5xl">
              Chi Siamo
            </h2>
            <p className="text-brownish mb-2.5 sm:mb-8">
              Siamo Luca, Matteo e Marianna, tre fisioterapisti con la passione
              per il recupero funzionale. La nostra missione è aiutarti a
              superare il dolore e a tornare alle tue passioni, che sia lo sport
              o la vita di tutti i giorni.
            </p>
            <span className="text-brownish mb-2.5 block font-bold sm:mb-4">
              Abbiamo colaborato con
            </span>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <div className="flex gap-3">
                <img src="/images/Atalanta.png" alt="" className="w-7"></img>
                <img
                  src="/images/SportSpecialist.png"
                  alt=""
                  className="w-24"
                ></img>
              </div>
              <Button className="flex w-full items-center justify-center gap-9 rounded-xl sm:ml-auto sm:w-fit">
                Scopri di piú <MoveRight />
              </Button>
            </div>
          </div>
          <img
            src="/images/Phisiotherapists.jpg"
            className="h-80 w-full rounded-xl object-cover object-top sm:h-full sm:min-w-xl"
            alt=""
          />
        </div>
      </section>
      <section className="sm:bg-background mt-7 flex flex-col items-center gap-10 rounded-xl bg-white p-4 sm:mt-36 sm:flex-row">
        <div className="order-1 flex flex-col gap-7 sm:order-2">
          <h1 className="text-left text-4xl font-bold sm:text-5xl">
            I Nostri Spazi
          </h1>
          <p className="text-brownish">
            Un ambiente moderno, accogliente e dotato delle migliori
            attrezzature per garantirti un percorso di recupero efficace e
            confortevole.
          </p>
        </div>
        <div className="order-2 flex w-full flex-col sm:order-1 sm:flex-row">
          <img
            src="/images/INostriSpazi1.png"
            className="h-52 min-w-96 sm:h-full sm:min-w-52"
            alt=""
          />
          <img
            src="/images/INostriSpazi2.png"
            className="h-52 min-w-96 sm:h-full sm:min-w-52"
            alt=""
          ></img>
        </div>
        <div className="order-3 w-full sm:order-2 sm:self-end">
          <Button className="ml-auto flex w-full justify-center gap-3.5 sm:w-fit">
            Esplora lo studio
            <MoveRight></MoveRight>
          </Button>
        </div>
      </section>
      <section className="sm:bg-background mt-7 bg-white p-4 sm:mt-36">
        <h1 className="mb-2.5 flex text-left text-4xl font-bold sm:mb-20 sm:justify-center sm:text-5xl">
          Domande Frequenti
        </h1>
        <div className="flex flex-col gap-2.5 sm:gap-10">
          <details name="domanda" className="custom-details">
            <summary className="font-bold">
              Cosa devo portare alla prima visita?
            </summary>
            <p className="text-brownish">
              Per la prima visita è utile portare eventuali referti medici,
              esami diagnostici e una lista dei sintomi che stai riscontrando.
              Ti consigliamo inoltre un abbigliamento comodo che permetta di
              eseguire movimenti e test posturali. In questo modo potremo
              valutarti in maniera completa e accurata.
            </p>
          </details>
          <details name="domanda" className="custom-details">
            <summary className="font-bold">
              Devo avere dolore per rivolgermi al fisioterapista?
            </summary>
            <p className="text-brownish">
              Non è necessario avere dolore per iniziare un percorso
              fisioterapico. Possiamo aiutarti anche in ottica preventiva, per
              migliorare postura, mobilità o performance sportiva. Intervenire
              prima che insorga un sintomo ti permette spesso di evitare
              problemi più complessi in futuro.
            </p>
          </details>
          <details name="domanda" className="custom-details">
            <summary className="font-bold">Quanto durano le sedute?</summary>
            <p className="text-brownish">
              La durata di una seduta dipende dal tipo di trattamento
              necessario. In genere un incontro dura tra i 45 e i 60 minuti, ma
              alcuni percorsi specifici possono richiedere tempi leggermente
              diversi. Durante la prima valutazione ti indicheremo la durata più
              adatta al tuo caso.
            </p>
          </details>
          <details name="domanda" className="custom-details">
            <summary className="font-extrabold">
              Quante sedute sono necessarie per vedere risultati?
            </summary>
            <p className="text-brownish">
              Dipende dal tipo di problema e dagli obiettivi del trattamento. In
              alcuni casi bastano poche sedute per percepire miglioramenti,
              mentre per situazioni più complesse può essere necessario un
              percorso più lungo. Dopo la prima valutazione, ti forniremo una
              stima personalizzata.
            </p>
          </details>
          <details name="domanda" className="custom-details">
            <summary className="font-bold">
              Posso continuare ad allenarmi durante il trattamento?
            </summary>
            <p className="text-brownish">
              Dipende dal tipo di problema e dal piano terapeutico definito. In
              molti casi è possibile continuare ad allenarsi adattando
              l’attività, mentre in altri può essere utile una pausa temporanea.
              Dopo la valutazione iniziale ti daremo indicazioni personalizzate
              su cosa puoi fare in totale sicurezza.
            </p>
          </details>
        </div>
      </section>
      <section className="mt-7 flex justify-center sm:mt-24 sm:hidden">
        <article className="flex w-5xl flex-col items-center gap-2.5 rounded-xl bg-white p-4 sm:py-8">
          <div className="flex flex-col gap-2.5 sm:gap-8">
            <h2 className="px-6 text-center text-2xl font-bold text-black sm:text-5xl">
              Pronto a Iniziare il Tuo Percorso Recupero?
            </h2>
            <p className="text-brownish text-center">
              Contattaci oggi per scoprire come possiamo aiutarti a tornare al
              meglio delle tue capacità. Il nostro team è a tua disposizione per
              rispondere alle tue domande e guidarti nel tuo primo passo verso
              la guarigione.
            </p>
          </div>
          <Button className="flex w-full justify-center gap-2.5 rounded-xl">
            Contattaci
          </Button>
          <Button className="flex w-full justify-center gap-2.5 bg-white outline-1 outline-black">
            <span className="font-bold text-black">
              Scopri i nostri servizi
            </span>
            <MoveRight className="text-black"></MoveRight>
          </Button>
        </article>
      </section>
    </main>
  );
}
