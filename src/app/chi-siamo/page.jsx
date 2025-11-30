import Button from "@/components/Button";
import { CircleSmall } from "lucide-react";

export default function ChiSiamo() {
  return (
    <main>
      <header className="mt-9 flex flex-col items-center gap-7">
        <h1 className="text-5xl font-bold">Chi siamo</h1>
        <p className="text-brownish max-w-2xl text-center">
          Professionisti della fisioterapia a Bergamo. Lavoriamo insieme per
          garantire una cura individuale e mirata, essenziale per il tuo
          completo recupero funzionale.
        </p>
      </header>
      <section className="mt-24 flex justify-center">
        <div className="flex w-6xl gap-9 rounded-xl bg-white px-20 py-16">
          <img src="/images/LucaPic.png" alt="luca-gavazzeni"></img>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Luca Gavazzeni</h2>
              <p className="text-brownish">
                Luca è appassionato nell’aiutare i pazienti a recuperare da
                traumi e infortuni sportivi, adottando un approccio olistico e
                basato sulle evidenze scientifiche alla riabilitazione. Il suo
                obiettivo è permetterti di tornare alle tue attività con
                fiducia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Laurea triennale in Fisioterapia
                  </span>
                  <span className="text-brownish">
                    Università degli Studi di Bergamo
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Dry Needling</span>
                  <span className="text-brownish">PhisioVit</span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Taping sportivo</span>
                  <span className="text-brownish">
                    Accademia Italiana Massaggi
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Corso Advanced di Tecniche Manuali
                  </span>
                  <span className="text-brownish">
                    Accademia Terapie Manuali
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 flex justify-center">
        <div className="flex w-6xl gap-9 rounded-xl bg-white px-20 py-16">
          <img src="/images/MatteoPic.png" alt="matteo-rossi"></img>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Matteo Rossi</h2>
              <p className="text-brownish">
                Matteo è specializzato nel recupero post-operatorio, utilizzando
                tecniche avanzate di terapia manuale per ripristinare la
                funzionalità e migliorare la qualità di vita dei suoi pazienti.
                È dedicato a creare piani di trattamento personalizzati per
                ottenere risultati ottimali.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Laurea triennale in Fisioterapia
                  </span>
                  <span className="text-brownish">
                    Università degli Studi di Bergamo
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Dry Needling</span>
                  <span className="text-brownish">PhisioVit</span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Taping sportivo</span>
                  <span className="text-brownish">
                    Accademia Italiana Massaggi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 flex justify-center">
        <div className="flex w-6xl gap-9 rounded-xl bg-white px-20 py-16">
          <img src="/images/MariannaPic.png" alt="marianna-gorle"></img>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Marianna Gorle</h2>
              <p className="text-brownish">
                Marianna è specializzata nella riabilitazione post-infortunio e
                nella gestione del dolore cronico. Combina tecniche di terapia
                manuale e approcci basati sull’evidenza per migliorare la
                mobilità e la qualità di vita dei suoi pazienti. È dedicata a
                creare percorsi terapeutici personalizzati e orientati ai
                risultati.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Laurea triennale in Fisioterapia
                  </span>
                  <span className="text-brownish">
                    Università degli Studi di Bergamo
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Dry Needling</span>
                  <span className="text-brownish">PhisioVit</span>
                </div>
              </div>
              <div className="flex gap-2.5">
                <CircleSmall className="text-primary"></CircleSmall>
                <div className="flex flex-col">
                  <span className="font-bold">Corso di Taping sportivo</span>
                  <span className="text-brownish">
                    Accademia Italiana Massaggi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 flex justify-center">
        <div className="flex w-6xl flex-col items-center rounded-xl bg-white p-16">
          <div className="flex flex-col gap-8 items-center">
            <h1 className="text-center text-5xl font-bold">
              Pronto a Iniziare il Tuo Percorso di Recupero?
            </h1>
            <p className="text-brownish text-center">
              Contattaci oggi per scoprire come possiamo aiutarti a tornare al
              meglio delle tue capacità. Il nostro team è a tua disposizione per
              rispondere alle tue domande e guidarti nel tuo primo passo verso
              la guarigione.
            </p>

            <div>
              <Button className="w-fit px-7">Contattaci</Button>
              <Button className="bg-white">
                <span className="font-bold text-black">
                  Scopri i nostri servizi →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
