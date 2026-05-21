// src/components/profile/Sold/SoldTable.jsx

import { useNavigate } from "react-router";
import StatusPill from "../shared/StatusPill";
import useVisitUser from "@/hooks/useVisitUser";

export default function SoldTable({ listings }) {
  const navigate = useNavigate();
  const { visitUser } = useVisitUser();

  const navigateToEdit = (productId, action) => {
    // Implement navigation logic here, e.g., using React Router
    console.log(`Navigate to edit page for product ID: ${productId}`);
    navigate(`/product/${productId}/action/${action}`);
  };

  const navigateToProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        bg-cream
        border-b-2
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className="
              border-b
              bg-stone-50
            "
          >
            <tr
              className="
                text-left
                text-xs
                uppercase
                tracking-widest
                text-stone-500
              "
            >
              <th className="px-6 py-4">Pieza</th>

              <th className="px-6 py-4">Estado</th>

              <th
                className="
                  px-6
                  py-4
                  text-right
                "
              >
                Precio
              </th>

              <th className="px-6 py-4">Actividad</th>

              <th
                className="
                  px-6
                  py-4
                  text-center
                "
              >
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {listings.map((listing) => (
              <tr
                key={listing.id}
                className="
                  border-b
                  border-black
                  last:border-none
                "
              >
                {/* Piece */}
                <td className="px-6 py-5">
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="
                        h-20
                        w-20
                        rounded-2xl
                        object-cover
                      "
                    />

                    <div>
                      <h3
                        className="
                          font-serif
                          text-lg
                          text-stone-900
                        "
                      >
                        {listing.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-stone-500
                        "
                      >
                        {listing.category}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-5 align-middle">
                  <StatusPill
                    status={listing.status.toLowerCase()}
                    nameStatus={listing.nameStatus}
                  />
                </td>

                {/* Price */}
                <td
                  className="
                    px-6
                    py-5
                    text-right
                    align-middle
                  "
                >
                  <span
                    className="
                      font-serif
                      text-lg
                      text-stone-900
                    "
                  >
                    ${listing.price.toLocaleString("es-CO")}
                  </span>
                </td>

                {/* Activity */}
                <td
                  className="
                    px-6
                    py-5
                    align-middle
                  "
                >
                  {listing.status === "Draft" ? (
                    <span
                      className="
                        text-sm
                        italic
                        text-stone-400
                      "
                    >
                      No publicado
                    </span>
                  ) : (
                    <div
                      className="
                        flex
                        gap-4
                        text-sm
                        text-stone-500
                      "
                    >
                      <span>👁 {listing.views}</span>

                      <span>
                        <span className="text-red-500">♡</span> {listing.saves}
                      </span>
                    </div>
                  )}
                </td>

                {/* Actions */}
                <td
                  className="
                    px-6
                    py-5
                    align-middle
                  "
                >
                  {!visitUser && (
                    <div
                      className="
                      flex
                      flex-row
                      justify-center
                      gap-2
                        
                    "
                    >
                      <button
                        className="
                        rounded-xl
                        border
                        border-black
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        w-2/3

                        hover:bg-terracotta
                        hover:text-paper

                      "
                        onClick={() =>
                          navigateToEdit(
                            listing.productId,
                            listing.status === "Draft"
                              ? "publish"
                              : listing.status === "Sold"
                                ? "receipt"
                                : "edit",
                          )
                        }
                      >
                        {listing.status === "Draft"
                          ? "Publicar"
                          : listing.status === "Sold"
                            ? "Recibo"
                            : "Editar"}
                      </button>
                    </div>
                  )}

                  {visitUser && (
                    <div
                      className="
                      flex
                      flex-row
                      justify-center
                      gap-2
                        
                    "
                    >
                      <button
                        className="
                        rounded-xl
                        border
                        border-black
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        w-2/3

                        hover:bg-terracotta
                        hover:text-paper
                        
                      "
                        onClick={() => navigateToProduct(listing.productId)}
                      >
                        Comprar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
