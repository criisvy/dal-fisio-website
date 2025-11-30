import Button from "@/components/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";

export default function Contatti() {
  return (
    <main>
      <section>
        <article className="flex flex-col gap-11">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl font-bold">Contattaci</h1>
            <p className="text-brownish text-center">
              We're here to help you on your recovery journey. Reach out to book
              an appointment or ask any questions about our physiotherapy
              services in Bergamo. Accettiamo solo su prenotazione.
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <img className="rounded-xl" src="/images/Map.png"></img>
            <div className="flex flex-col justify-center gap-6">
              <div className="flex gap-1">
                <MapPin className="text-primary font-bold"></MapPin>
                <span className="text-brownish underline">
                  Via dei Bastazi, 13 24126 Bergamo BG
                </span>
              </div>
              <div className="flex gap-1">
                <Phone className="text-primary font-bold"></Phone>
                <span className="text-brownish underline">
                  +39 345 090 6595
                </span>
              </div>
              <div className="flex gap-1">
                <Mail className="text-primary font-bold"></Mail>
                <span className="text-brownish underline">
                  info@dalfisio.it
                </span>
              </div>
              <Button className="bg-whatsapp flex w-fit items-center gap-2">
                <WhatsAppIcon className="h-5 w-5 text-white"></WhatsAppIcon>Chat
                on WhatsApp
              </Button>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-24 w-5xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="pb-1.5 text-4xl font-bold">Inviaci un mesaggio</h2>
          <div className="flex flex-col gap-9">
            <form className="flex w-fit flex-col gap-2.5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name">
                  <span className="font-bold">Nome e Cognome</span>
                </label>
                <input
                  className="rounded-xl bg-white p-2.5"
                  type="text"
                  name="user-name"
                  id="name"
                  required
                  placeholder="Mario Rossi"
                  minlength="2"
                ></input>
              </div>
              <div className="flex gap-7">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email">
                    <span className="font-bold">Indirizzo email</span>
                  </label>
                  <input
                    className="rounded-xl bg-white p-2.5"
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="mario.rossi@mail.it"
                  ></input>
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="number">
                    <span className="font-bold">Numero di Telefono</span>
                  </label>
                  <input
                    className="rounded-xl bg-white p-2.5"
                    type="number"
                    name="number"
                    id="number"
                    placeholder="392 123 4567"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="subject">
                  <span className="font-bold">Oggetto</span>
                </label>
                <input
                  className="rounded-xl bg-white p-2.5"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Oggetto del messaggio..."
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message">
                  <span className="font-bold">Il tuo messaggio</span>
                </label>
                <input
                  className="rounded-xl bg-white p-2.5"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Il tuo messagio o richiesta..."
                  required
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
