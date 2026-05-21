// src/components/contact/ContactHero.jsx

import { ARTORA_TOKENS } from "@/theme/tokens";

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
      "
      style={{
        background: ARTORA_TOKENS.cream,
        borderColor: ARTORA_TOKENS.rule,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <span
          className="
            mb-4
            block
            text-[11px]
            uppercase
            tracking-[0.18em]
          "
          style={{
            color: ARTORA_TOKENS.terracotta,
          }}
        >
          · Get in touch ·
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
          Write to us.
          <br />

          <span className="italic text-stone-500">
            We'll write back.
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
          Questions about a piece, a custom commission,
          or just want to say hello — we read every
          message.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;