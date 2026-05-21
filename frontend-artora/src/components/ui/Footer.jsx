import ArtoraIcon from "@/assets/icons/icon-pottery-main.svg";
import LinksT from "./LinksT";
import { navigation, social_media, shop } from "@/data/LinksList";

function Footer() {
  return (
    <section className="flex flex-row items-start justify-between bg-cream w-full border-t border-black px-10 py-10 gap-3 max-md:flex-col max-md:gap-10">
      <section className="flex flex-col items-start justify-center gap-3 max-w-lg">
        <div className="flex flex-row items-center justify-center gap-3">
          <img
            className="w-10 bg-paper drop-shadow-lg p-2 rounded-full"
            src={ArtoraIcon}
            alt="Artora Icon"
          />
          <h1 className="italic tracking-widest text-lg text-terracotta drop-shadow-xl">Artora</h1>
        </div>
        <p className="text-md italic">
          Hecho a mano. Hecho para durar. Un pequeño estudio de objetos hechos
          lentamente.
        </p>
      </section>

      <section className="w-full flex flex-row items-start justify-around max-md:grid max-md:grid-cols-2 max-md:gap-5">
        <LinksT title="ESTUDIO" array={navigation} />

        <LinksT title="REDES SOCIALES" array={social_media} />

        <LinksT title="TIENDA" array={shop} />
      </section>
    </section>
  );
}

export default Footer;
