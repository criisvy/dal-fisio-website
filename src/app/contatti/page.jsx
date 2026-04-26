"use client";

import Button from "@/components/Button";
import { Mails, PhoneCall, MapPinCheck, ArrowBigRight } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import RoundedIconWrapper from "@/components/RoundedIconWrapper";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_n8lf6mz";
const TEMPLATE_ID = "template_9utwno1";
const PUBLIC_KEY = "ANNZ9FjwQz1-TA1Td";

export default function Contatti() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <main className="mx-auto mt-9 max-w-6xl px-4">
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
          <div className="flex flex-col items-center gap-10 sm:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.89221501422!2d9.654412877534554!3d45.67306407107811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781512214ef3e89%3A0x9b32a78efaef63ce!2sDott.%20Luca%20Gavazzeni%20Fisioterapista!5e0!3m2!1ses!2sit!4v1767890591506!5m2!1ses!2sit"
              width="100%"
              height="100%"
              className="min-h-[400px] flex-1/2 rounded-xl border-0"
              loading="lazy"
            ></iframe>
            <div className="w-full md:w-fit">
              <ul className="flex flex-col gap-7">
                <li className="flex items-center gap-4 rounded-xl bg-white p-4">
                  <RoundedIconWrapper className="bg-primary">
                    <MapPinCheck className="font-bold text-white" />
                  </RoundedIconWrapper>
                  <a
                    className="text-brownish underline"
                    href="https://maps.app.goo.gl/dtU2nXjPK79vZJTU7"
                  >
                    Via dei Bastazi, 13 24126 Bergamo BG
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl bg-white p-4">
                  <RoundedIconWrapper className="bg-primary">
                    <PhoneCall className="font-bold text-white" />
                  </RoundedIconWrapper>
                  <a className="text-brownish underline" href="tel:3450906595">
                    +39 345 090 6595
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-xl bg-white p-4">
                  <RoundedIconWrapper className="bg-primary">
                    <Mails className="font-bold text-white" />
                  </RoundedIconWrapper>
                  <a className="text-brownish underline">info@dalfisio.it</a>
                </li>
              </ul>
              <Button className="bg-whatsapp hover:bg-whatsapp mt-7 flex w-full items-center justify-center gap-2 rounded-xl">
                <WhatsAppIcon className="size-7 text-white hover:text-white"></WhatsAppIcon>
                <span className="font-semibold text-white hover:text-white">
                  Chat on WhatsApp
                </span>
              </Button>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-24 flex flex-col items-center justify-center gap-12">
        <h2 className="mb-1.5 text-4xl font-bold">Inviaci un mesaggio</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-center gap-2.5 sm:gap-7"
        >
          <div className="flex flex-col gap-2.5">
            <label htmlFor="name" className="font-bold">
              Nome e Cognome
            </label>
            <input
              className="rounded-xl bg-white p-2.5"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Mario Rossi"
              minLength="2"
            />
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-7">
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="email" className="font-bold">
                Indirizzo email
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
              <label htmlFor="number" className="font-bold">
                Numero di Telefono
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
            <label htmlFor="subject" className="font-bold">
              Oggetto
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
            <label htmlFor="message" className="font-bold">
              Il tuo messaggio
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
          {status === "success" && (
            <p className="font-medium text-green-600">
              Messaggio inviato con successo!
            </p>
          )}
          {status === "error" && (
            <p className="font-medium text-red-600">
              Qualcosa è andato storto. Riprova più tardi.
            </p>
          )}
          <Button
            type="submit"
            className="mt-9 ml-auto flex w-full justify-center gap-3 rounded-xl p-4 sm:w-fit sm:gap-2"
          >
            <span className="font-bold"></span>
            {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
            <ArrowBigRight />
          </Button>
        </form>
      </section>
    </main>
  );
}
