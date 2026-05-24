// src/data/profile/orders.js

const orders = [
  {
    id: 101,

    date: "Apr 28, 2026",

    artisanId: 1,

    items: [
      { productId: 4, quantity: 1 },
      { productId: 5, quantity: 1 },
    ],

    total: 329_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-10",
  },

  {
    id: 102,

    date: "Apr 28, 2026",

    artisanId: 1,

    items: [
      { productId: 4, quantity: 3 },
    ],

    total: 267_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-15",
  },

  {
    id: 103,

    date: "May 20, 2026",

    artisanId: 2,

    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 3 },
      { productId: 3, quantity: 4 },
    ],

    total: 2_437_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-19",
  },
];

export default orders;
