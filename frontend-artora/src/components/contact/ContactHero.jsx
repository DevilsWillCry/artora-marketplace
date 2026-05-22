// src/components/contact/ContactHero.jsx

function ContactHero() {
  return (
    <section
      className="
        border-b
        px-5
        py-16

        sm:px-8

        lg:px-14
        lg:py-24

        bg-cream
      "
    >
      <div className="mx-auto max-w-7xl">
        <span
          className="
            mb-4
            block
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-terracotta
          "
        >
          · Ponte en contacto ·
        </span>

        <h1
          className="
            max-w-3xl
            font-serif
            text-5xl
            leading-none
            tracking-[-0.03em]

            md:text-6xl

            lg:text-7xl
          "
        >
          Escribenos.
          <br />

          <span className="italic text-terracotta">
            Te responderemos.
          </span>
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            font-serif
            text-lg
            italic
            leading-relaxed
            text-stone-500
          "
        >
          Si tienes alguna pregunta sobre una pieza, un encargo personalizado o simplemente quieres saludarnos, leemos todos los mensajes.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;