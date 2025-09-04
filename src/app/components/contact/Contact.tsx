import ContactButton from "./ContactButton";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-black">
      <section className="flex items-center justify-center w-full h-[120vh] font-outfit">
        <div className="text-center space-y-2 w-[1000px] mx-6 max-md:space-y-6 sm:md:text-5xl sm:text-3xl">
          <h1 className="font-anton tracking-wide text-3xl mb-0
          md:mb-3 md:text-5xl sm:text-4xl">Vamos Começar</h1>
          <p className="text-neutral-400 text-2xl tracking-tight mb-10
          md:text-3xl md:mb-12 sm:text-3xl">
            Entre em contato com nossa equipe
          </p>
          <ContactForm />
          <ContactButton />
        </div>
      </section>
    </div>
  );
}
