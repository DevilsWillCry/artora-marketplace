// src/pages/ContactPage.jsx

import ContactHero from "@/components/contact/ContactHero";

import ContactForm from "@/components/contact/ContactForm";

import StudioSidebar from "@/components/contact/StudioSidebar";

function ContactPage() {
  return (
    <main className="bg-[#f7f3ee]">
      <ContactHero />

      <section
        className="
          px-5
          py-14

          sm:px-8

          lg:px-14
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12

            xl:grid-cols-[1.2fr_420px]
            xl:gap-20
          "
        >
          <ContactForm />

          <StudioSidebar />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;