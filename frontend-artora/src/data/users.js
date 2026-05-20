// src/data/users.js

const users = [
  {
    id: 1,

    name: "Linnea Costa",

    email: "linnea@artora.com",

    password: "123456",

    description: "Artista y creadora de productos hechos a mano.",

    avatar:
      "https://i.pravatar.cc/150?img=32",

    role: "customer",

    savedProducts: [1, 3, 5],

    purchasedOrders: [101, 102],

    listings: [201, 202],
  },

  {
    id: 2,

    name: "Miguel Angel",

    email: "miguel@example.com",

    password: "123456",

    description: "Coleccionando discretamente piezas hechas a mano.",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    role: "customer",

    savedProducts: [2],

    purchasedOrders: [103],

    listings: [203],
  },
];

export default users;