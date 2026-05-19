// components/auth/AuthShell.jsx

import AuthHero from "./AuthHero";

export default function AuthShell({ side = "right", density, children , ...props}) {
  const dense = density === "compact";
  console.log(props);
  return (
    <main className="bg-paper">
      <div
        className="
          grid min-h-screen
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {side === "right" && <AuthHero density={density} className="animate-fade-right animate-once animate-duration-1000 animate-ease-out" image={props.image}  text={props.textHero}/>}

        <section
          className={`
            flex flex-col justify-center
            ${dense ? "px-16 py-14" : "px-24 py-20"}
          `}
        >
          {children}
        </section>

        {side === "left" && <AuthHero density={density} className="animate-fade-left animate-once animate-duration-1000 animate-ease-out"  image={props.image} text={props.textHero}/>}
      </div>
    </main>
  );
}
