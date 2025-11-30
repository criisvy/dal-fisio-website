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
} from "lucide-react";
import RoundedIconWrapper from "@/components/RoundedIconWrapper";

export default function Home() {
  return (
    <main className="mx-auto mt-9 max-w-5xl">
      <header className="relative">
        <div className="absolute bottom-0 mr-60 mb-10 ml-10 flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-white">Dal Fisio </h1>
          <p className="mb-6 text-xl text-white">
            Fisioterapia e riabilitazione sportiva a Bergamo. Specializzati nel
            recupero post-chirurgico e post-traumatico.
          </p>
          <div className="flex gap-3">
            <Button size="sm" className="flex w-fit items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>345 090 6595</span>
            </Button>
            <Button
              size="sm"
              className="flex w-fit items-center gap-2 bg-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="font-bold text-black">
                Contattaci su WhatsApp
              </span>
            </Button>
          </div>
        </div>
        <img
          className="w-full rounded-2xl bg-fixed"
          src="/images/Heroimage.jpg"
          alt="Hero"
        />
      </header>
      <section className="flex w-full flex-row items-center">
        <div className="flex max-w-lg flex-col pt-20">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-5xl font-bold">I Nostri Servizi</h1>
            <p className="text-brownish">
              Offriamo trattamenti mirati e personalizzati per una vasta gamma
              di necessità
            </p>
          </div>
          <div className="pb-9">
            <div className="flex gap-3 pt-9">
              <RoundedIconWrapper className="text-sm">
                <ShieldPlus className="text-primary"></ShieldPlus>
              </RoundedIconWrapper>
              <div className="">
                <span className="font-bold">Recupero Post-Chirurgico</span>
                <p className="text-brownish">
                  Piani di riabilitazione per ritrovare la mobilità dopo un
                  intervento.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-9">
              <RoundedIconWrapper className="text-sm">
                <Volleyball className="text-primary"></Volleyball>
              </RoundedIconWrapper>
              <div className="">
                <span className="font-bold">Riabilitazione Sportiva</span>
                <p className="text-brownish">
                  Supporto ad atleti per il recupero da infortuni e
                  l'ottimizzazione della performance.
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-9">
              <RoundedIconWrapper className="text-sm">
                <Bone className="text-primary"></Bone>
              </RoundedIconWrapper>
              <div className="">
                <span className="font-bold">Sollievo del Dolore</span>
                <p className="text-brownish">
                  Trattamenti scientifici per cervicalgie, lombalgie e dolori
                  muscoloscheletrici.
                </p>
              </div>
            </div>
          </div>
          <Button
            size={"sm"}
            className={"flex w-fit items-center gap-2.5 p-2.5 px-3.5"}
          >
            Vedi tutti i servizi
            <MoveRight></MoveRight>
          </Button>
        </div>
        <div className="relative h-96 w-md">
          <img
            src="/images/Fisioterapista1.jpg"
            alt="fisioterapista"
            className="max-w-75% run dev np, absolute top-0 left-0 z-0"
          ></img>
          <img
            src="/images/People.jpg"
            alt="bed"
            className="max-w-30% absolute right-0 bottom-0 rounded-xl"
          ></img>
        </div>
      </section>
      <section className="mt-24">
        <h1 className="pb-20 text-5xl font-bold">Cosa Faciamo per te?</h1>{" "}
        <div className="grid grid-flow-col grid-rows-2 justify-center gap-6">
          <div>
            <div className="flex w-96 flex-col rounded-xl bg-white p-10">
              <img src="/images/Backpain.jpg"></img>
              <div className="flex flex-col gap-4 pt-7">
                <h3 className="font-bold">Hai mal di Schiena al Lavori?</h3>
                <p className="text-brownish">
                  Affrontiamo lombalgia e cervicalgia con terapie mirate. Usiamo
                  la Terapia Manuale per il sollievo immediato e programmi di
                  Esercizi Terapeutici di Forza per costruire muscoli di
                  sostegno e prevenire ricadute.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-96 flex-col rounded-xl bg-white p-10">
              <img src="/images/Exercise.jpg"></img>
              <div className="flex flex-col gap-4 pt-7">
                <h3 className="font-bold">Sport e Prevenzione</h3>
                <p className="text-brownish">
                  Analisi del gesto sportivo e prevenzione degli infortuni.
                  Offriamo Taping Neuromuscolare e programmi di Potenziamento
                  Funzionale per migliorare la tua performance e proteggere le
                  articolazioni sotto sforzo.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-96 flex-col rounded-xl bg-white p-10">
              <img src="/images/Running.jpg"></img>
              <div className="flex flex-col gap-4 pt-7">
                <h3 className="font-bold">Traumi e Infortuni</h3>
                <p className="text-brownish">
                  Dopo fratture, distorsioni o interventi chirurgici, ti
                  seguiamo con protocolli di Riabilitazione Attiva. Utilizziamo
                  Massaggi Terapeutici per ridurre il gonfiore e la rieducazione
                  al movimento specifica per la zona lesa.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-96 flex-col rounded-xl bg-white p-10">
              <img src="/images/Backpain2.jpg"></img>
              <div className="flex flex-col gap-4 pt-7">
                <h3 className="font-bold">Dolori Articolari e Cronici</h3>
                <p className="text-brownish">
                  Interveniamo su artrosi, tendinopatie e infiammazioni
                  croniche. La nostra strategia combina Tecniche Osteopatiche
                  con la Terapia Fisica strumentale (es. Tecar) per gestire il
                  dolore e recuperare il pieno range di movimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <h1 className="justify-self-center pb-20 text-5xl font-bold">
          Cosa dicono di noi?
        </h1>

        <div className="relative flex gap-5">
          <RoundedIconWrapper className="bg-primary absolute left-0.5">
            <MoveLeft className="text-white"></MoveLeft>
          </RoundedIconWrapper>
          <RoundedIconWrapper className="absolute right-0.5">
            <MoveRight className="text-white"></MoveRight>
          </RoundedIconWrapper>
          <div className="relative flex max-w-96 flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt="user-image"
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
            <p className="text-brownish">
              Contattato dopo essermi rotto la clavicola per recuperare mobilità
              e forza, ho trovato grande competenza e serietà. Oltre alle sedute
              in studio, gli esercizi personalizzati da fare a casa sono stati
              fondamentali per recuperare al meglio.
            </p>
          </div>
          <div className="flex max-w-96 flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt="user-image"
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
            <p className="text-brownish">
              Mi sono rivolto a Luca in seguito a un infortunio all’adduttore e
              non posso che ritenermi estremamente soddisfatto del percorso
              fatto insieme. È un professionista competente, attento e sempre
              disponibile
            </p>
          </div>
          <div className="flex max-w-96 flex-col gap-7 rounded-xl bg-white p-9">
            <div className="flex gap-4">
              <img
                src="/images/Avatarexample.jpg"
                alt="user-image"
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
            <p className="text-brownish">
              Grazie dott. Luca per aver curato mio figlio per l’incidente alla
              spalla ,ora sta benissimo, grazie !! E mia mamma per la frattura
              al polso !! Ottima persona e super professionale!!
              Consigliatissimo , ancora grazie 😃
            </p>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <h1 className="justify-self-center pb-20 text-5xl font-bold">
          I Nostri Valori
        </h1>
        <div className="flex gap-16">
          <div className="flex gap-3 pt-9">
            <RoundedIconWrapper className="text-sm">
              <ShieldCheck className="text-primary"></ShieldCheck>
            </RoundedIconWrapper>
            <div className="flex flex-col">
              <h3 className="font-bold">Impegno e cura personalizzata</h3>
              <p className="text-brownish">
                Ti dedichiamo tutto il tempo necessario, analizzando a fondo il
                tuo caso. Il tuo piano è su misura e segue solo i tuoi
                progressi.
              </p>
            </div>
          </div>
          <div className="flex gap-3 pt-9">
            <RoundedIconWrapper className="text-sm">
              <BookMarked className="text-primary"></BookMarked>
            </RoundedIconWrapper>
            <div className="flex flex-col">
              <h3 className="font-bold">Formazione costante</h3>
              <p className="text-brownish">
                Siamo sempre un passo avanti. Ci aggiorniamo sulle nuove
                metodologie globali per offrirti l'eccellenza in fisioterapia.
              </p>
            </div>
          </div>
          <div className="flex gap-3 pt-9">
            <RoundedIconWrapper className="text-sm">
              <FlaskConical className="text-primary"></FlaskConical>
            </RoundedIconWrapper>
            <div className="flex flex-col">
              <h3 className="font-bold">Basato sulla scienza</h3>
              <p className="text-brownish">
                Non lavoriamo per ipotesi. Ogni trattamento e basato sull´ultima
                ricerca clinica per garantirti un recupero solido e mirato.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center pt-36">
        <div className="flex content-center items-center justify-center gap-14">
          <div className="flex flex-col">
            <h1 className="pb-3 text-5xl font-bold">Chi Siamo</h1>
            <p className="text-brownish">
              Siamo Luca e Matteo, due fisioterapisti con la passione per il
              recupero funzionale. La nostra missione è aiutarti a superare il
              dolore e a tornare alle tue passioni, che sia lo sport o la vita
              di tutti i giorni.
            </p>
            <span className="text-brownish pt-6 font-bold">
              Abbiamo colaborato con
            </span>
            <div className="flex gap-3">
              <img src="/images/Atalanta.png" className="w-7"></img>
              <img src="/images/SportSpecialist.png" className="w-24"></img>

              <Button className="ml-auto flex items-center gap-9 rounded-xl pl-7">
                Scopri di piú <MoveRight></MoveRight>
              </Button>
            </div>
          </div>
          <img src="/images/Phisiotherapists.jpg" className="rounded-xl"></img>
        </div>
      </section>
      <section className="pt-36">
        <div className="flex gap-10">
          <img src="/images/Chair.png"></img>
          <div className="flex max-w-md flex-col gap-3">
            <h1 className="text-5xl font-bold">I Nostri Spazi</h1>
            <div className="flex flex-col">
              <p className="text-brownish">
                Un ambiente moderno, accogliente e dotato delle migliori
                attrezzature per garantirti un percorso di recupero efficace e
                confortevole.
              </p>
              <Button className="ml-auto flex w-fit gap-3.5">
                Esplora lo studio
                <MoveRight></MoveRight>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-36">
        <h1 className="flex justify-center pb-20 text-5xl font-bold">
          Domande Frequenti
        </h1>
        <div className="flex flex-col gap-5">
          <ul>
            <li className="absolute font-bold">
              Cosa devo portare alla prima visita?
            </li>
            <Plus className="text-primary relative ml-auto"></Plus>
            <hr className="text-primary border-2"></hr>
            <li className="absolute font-bold">
              Devo avere dolore per rivolgermi al fisioterapista?
            </li>
            <Plus className="text-primary relative ml-auto"></Plus>
            <hr className="text-primary border-2"></hr>
            <li className="absolute font-bold">Quanto durano le sedute?</li>
            <Plus className="text-primary relative ml-auto"></Plus>
            <hr className="text-primary border-2"></hr>
            <li className="absolute font-bold">
              Quante sedute sono necessarie per vedere risultati?
            </li>
            <Plus className="text-primary relative ml-auto"></Plus>
            <hr className="text-primary border-2"></hr>
            <li className="absolute font-bold">Quanto durano le sedute?</li>
            <Plus className="text-primary relative ml-auto"></Plus>
            <hr className="text-primary border-2"></hr>
          </ul>
        </div>
      </section>
    </main>
  );
}
