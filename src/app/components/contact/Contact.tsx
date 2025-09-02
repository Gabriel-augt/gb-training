import ContactButton from "./ContactButton";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-black">
      <section className="flex items-center justify-center w-full h-screen font-outfit pt-28">
        <div className="text-center space-y-4 w-[1000px] mx-6">
          <h1 className="font-anton text-6xl">Vamos Começar</h1>
          <p className="text-neutral-400 text-2xl tracking-tight mb-12">
            Entre em contato com nossa equipe
          </p>
          <ContactForm />
          <ContactButton />
        </div>
      </section>
    </div>
  );
}
