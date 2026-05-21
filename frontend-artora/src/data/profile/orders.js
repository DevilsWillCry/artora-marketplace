// src/data/profile/orders.js

const orders = [
  {
    id: 101,

    date: "Apr 28, 2026",

    artisanId: 2,

    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],

    total: 108_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-10",
  },

  {
    id: 102,

    date: "Apr 28, 2026",

    artisanId: 1,

    items: [
      { productId: 3, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],

    total: 102_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-15",
  },

  {
    id: 103,

    date: "May 20, 2026",

    artisanId: 1,

    items: [
      { productId: 3, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],

    total: 102_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-19",
  },
];

export default orders;
