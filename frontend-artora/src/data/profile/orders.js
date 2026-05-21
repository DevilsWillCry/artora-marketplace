// src/data/profile/orders.js

const orders = [
  {
    id: 101,

    date: "Apr 28, 2026",

    artisanId: 2,

    items: [1, 2],

    total: 108_000,

    status: "delivered",

    nameStatus: "Entregado",

    createdAt: "2026-05-10",
  },

  {
    id: 102,

    date: "Apr 28, 2026",

    artisanId: 1,

    items: [3, 4],

    total: 102_000,

    status: "pending",

    nameStatus: "Pendiente",

    createdAt: "2026-05-15",
  },
];

export default orders;
