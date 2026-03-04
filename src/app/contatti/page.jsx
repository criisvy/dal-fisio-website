import Button from "@/components/Button";
import { MapPin, Phone, Mail, SendHorizonal } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";

export default function Contatti() {
  return (
    <main className="mx-auto mt-9 max-w-6xl">
      <section>
        <article className="flex flex-col gap-6 sm:gap-11">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl font-bold">Contattaci</h1>
            <p className="text-brownish max-w-3xl text-center">
              We're here to help you on your recovery journey. Reach out to book
              an appointment or ask any questions about our physiotherapy
              services in Bergamo. Accettiamo solo su prenotazione.
            </p>
          </div>
          <div className="translate-y-<0> mx-auto flex w-fit flex-col items-center justify-center rounded-xl sm:h-96 sm:w-7xl sm:flex-row sm:gap-8">
            <div className="bg-background mb-5 h-full w-full overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.89221501422!2d9.654412877534554!3d45.67306407107811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781512214ef3e89%3A0x9b32a78efaef63ce!2sDott.%20Luca%20Gavazzeni%20Fisioterapista!5e0!3m2!1ses!2sit!4v1767890591506!5m2!1ses!2sit"
                width="100%"
                height="100%"
                className="min-h-[400px] border-0"
                loading="lazy"
              ></iframe>
            </div>
            <ul className="mr-auto flex w-full flex-col justify-center gap-6 px-4">
              <li className="sm:bg-background flex cursor-pointer justify-center gap-1 rounded-xl bg-white p-4 sm:justify-start">
                <MapPin className="text-primary font-bold" />
                <a
                  className="text-brownish underline"
                  href="https://maps.app.goo.gl/dtU2nXjPK79vZJTU7"
                >
                  Via dei Bastazi, 13 24126 Bergamo BG
                </a>
              </li>
              <li className="sm:bg-background flex cursor-pointer justify-center gap-1 rounded-xl bg-white p-4 sm:justify-start">
                <Phone className="text-primary font-bold" />
                <a className="text-brownish underline" href="tel:3450906595">
                  +39 345 090 6595
                </a>
              </li>
              <li className="sm:bg-background flex cursor-pointer justify-center gap-1 rounded-xl bg-white p-4 sm:justify-start">
                <Mail className="text-primary font-bold" />
                <a className="text-brownish underline">info@dalfisio.it</a>
              </li>
              <Button className="bg-whatsapp hover:bg-whatsapp flex w-full items-center justify-center gap-2 sm:w-fit">
                <WhatsAppIcon className="h-5 w-5 text-white hover:text-white"></WhatsAppIcon>
                <span className="text-white hover:text-white">
                  Chat on WhatsApp
                </span>
              </Button>
            </ul>
          </div>
        </article>
      </section>
      <section className="mt-24 sm:max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="mb-1.5 text-4xl font-bold">Inviaci un mesaggio</h2>
          <div className="flex gap-9">
            <form className="flex w-full min-w-[575px] flex-col justify-center gap-2.5 sm:w-[1025px]">
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
                  minLength="2"
                ></input>
              </div>
              <div className="flex flex-col gap-7 sm:flex-row">
                <div className="flex w-full flex-col gap-2.5">
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
                <div className="flex w-full flex-col gap-2.5">
                  <label htmlFor="number">
                    <h3 className="font-bold">Numero di Telefono</h3>
                  </label>
                  <input
                    className="[appearance:textfield] rounded-xl bg-white p-2.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                <textarea
                  className="field-sizing-fixed h-40 rounded-xl bg-white p-2.5"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Il tuo messagio o richiesta..."
                  required
                ></textarea>
              </div>

              <Button className="mt-9 ml-auto flex w-full justify-center gap-5 rounded-xl p-4 sm:w-fit sm:gap-2">
                <span>Invia messaggio</span>
                <SendHorizonal></SendHorizonal>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
