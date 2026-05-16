import { cn } from "@/lib/utils";
import { Link } from "react-router";

function LinksT({ title, array, className }) {
  return (
    <section className="flex flex-col  items-start justify-center">
      <h2 className="text-ink-sof font-bold uppercase tracking-widest">
        {title}
      </h2>
      <ul
        className={cn(
          "flex flex-col items-start justify-center gap-3 mt-3",
          className,
        )}
      >
        {array.map((item, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-center gap-3"
          >
            <Link
              to={item.href}
              rel="noopener noreferrer"
              className="transition-all duration-300  text-ink-soft hover:text-terracotta hover:drop-shadow-2xl hover:scale-110"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LinksT;
