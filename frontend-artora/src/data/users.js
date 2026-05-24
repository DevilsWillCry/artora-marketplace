// src/data/users.js

const users = [
  {
    id: 1,

    name: "Linnea Costa",

    email: "linnea@artora.com",

    password: "123456",

    description: "Artista y creadora de productos hechos a mano.",

    accountType: "Public",

    avatar:
      "https://i.pravatar.cc/150?img=32",

    role: "customer",

    savedProducts: [4, 5],

    purchasedOrders: [101, 102],

    listings: [ 102 ],

    followers: [2],

    country : "ES",

    city : "Barcelona",

    createdAt: "2026-01-15T10:00:00Z",

    updatedAt: "2026-06-01T15:30:00Z",
  },

  {
    id: 2,

    name: "Miguel Angel",

    email: "miguel@example.com",

    password: "123456",

    description: "Coleccionando discretamente piezas hechas a mano.",

    accountType: "Public",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    role: "customer",

    savedProducts: [1, 2],

    purchasedOrders: [103],

    listings: [203],

    followers: [1],

    country : "CO",

    city : "Cali",

    createdAt: "2026-02-20T14:30:00Z",
      
    updatedAt: "2026-06-02T12:00:00Z",

  },
];

export default users;