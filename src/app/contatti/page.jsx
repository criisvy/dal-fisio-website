import Button from "@/components/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";

export default function Contatti() {
  return (
    <main className="mx-auto mt-9 max-w-7xl">
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
            <img
              className="cursor-pointer rounded-xl"
              src="/images/Map.png"
              alt=""
            ></img>
            <ul className="flex flex-col justify-center gap-6">
              <li className="flex cursor-pointer gap-1">
                <MapPin className="text-primary font-bold" />
                <span className="text-brownish underline">
                  Via dei Bastazi, 13 24126 Bergamo BG
                </span>
              </li>
              <li className="flex cursor-pointer gap-1">
                <Phone className="text-primary font-bold" />
                <span className="text-brownish underline">
                  +39 345 090 6595
                </span>
              </li>
              <li className="flex cursor-pointer gap-1">
                <Mail className="text-primary font-bold" />
                <span className="text-brownish underline">
                  info@dalfisio.it
                </span>
              </li>
              <Button className="bg-whatsapp flex w-fit items-center gap-2">
                <WhatsAppIcon className="h-5 w-5 text-white"></WhatsAppIcon>Chat
                on WhatsApp
              </Button>
            </ul>
          </div>
        </article>
      </section>
      <section className="mt-24 w-5xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="mb-1.5 text-4xl font-bold">Inviaci un mesaggio</h2>
          <div className="flex gap-9">
            <form className="flex w-fit flex-col gap-2.5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name">
                  <h3 className="font-bold">Nome e Cognome</h3>
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
                    <h3 className="font-bold">Indirizzo email</h3>
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
                    <h3 className="font-bold">Numero di Telefono</h3>
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
                  <h3 className="font-bold">Oggetto</h3>
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
                  <h3 className="font-bold">Il tuo messaggio</h3>
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
