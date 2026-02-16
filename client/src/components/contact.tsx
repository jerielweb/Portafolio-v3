"use client";
import { useContactForm } from "@/libs/contact.api";
import Modal from "@/components/Modal";
import { Loading, MailError, MailSusses } from "./icons";

export default function Contact() {
  const { handleSubmit, isSubmitting, showModal, setShowModal, error, status } =
    useContactForm();

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-16">
      <div>
        <h1 className="text-center font-extrabold sm:text-5xl text-4xl">CONTACTO</h1>
      </div>
      <div className="flex min-h-140.5 max-w-[320px] border-3 items-center justify-center border-purple-100 rounded-2xl text-purple-50 p-7 flex-col mx-8">
        <form
          className="flex flex-col size-full gap-3 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-bold text-2xl mb-7 text-center">
            Mandeme un mensaje
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="border-2 rounded-[10px] p-2 w-full border-purple-100 outline-none"
            />

            <input
              className="border-2 rounded-[10px] p-2 w-full border-purple-100 outline-none"
              type="text"
              name="company"
              placeholder="Empresa"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="col-span-2 row-start-2 border-2 rounded-[10px] p-2 w-full border-purple-100 outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Mensaje"
            name="message"
            rows={10}
            className="size-full border-2 rounded-[10px] p-2 w-full border-purple-100 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex gap-2 transition active:scale-93 flex-row-reverse text-[17px] px-4 py-2 items-center justify-center bg-purple-700 w-full rounded-[10px] disabled:opacity-60"
          >
            {isSubmitting ? (
              <Loading
              fill="#fff"
              className="size-6 animate-spin"
              />
            ) : "Enviar"}
          </button>
        </form>
      </div>
      <Modal
        isOpen={showModal}
        setIsOpen={setShowModal}
        title={error ? "Hubo un problema" : "Gracias por tu mensaje"}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          {!error ? (
            <>
              <div>
                <MailSusses fill="#8b5cf6" className="size-50" />
              </div>
              <p className="text-gray-600 mb-4">
                {status ?? "Se ha enviado con éxito"}
              </p>
            </>
          ) : (
            <>
              <MailError fill="#ef4444" className="size-50" />
              <p className="text-red-600 mb-4 wrap-break-word">{status ?? error}</p>
            </>
          )}

          <button
            onClick={() => setShowModal(false)}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </section>
  );
}
