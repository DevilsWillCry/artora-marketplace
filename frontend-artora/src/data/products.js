// src/data/products.js

const products = [
  {
    id: 1,
    slug: "linen-earth-vase",

    name: "Jarrón de Lino",

    categoryId: 1,

    artisanId: 1,

    price: 64_000,

    stock: 10,

    featured: true,

    status: "Sold",

    nameStatus: "Vendido",

    description:
      "Jarrón de cerámica hecho en torno, terminado con un esmalte mate suave inspirado en los tonos terrosos de la costa.",

    image:
      "https://http2.mlstatic.com/D_NQ_NP_792376-MLM100099182419_122025-O.webp",
  },

  {
    id: 2,
    slug: "woven-oak-basket",

    name: "Cesta de Roble Tejida",

    categoryId: 4,

    artisanId: 1,

    price: 42_000,

    stock: 5,

    featured: true,

    status: "Active",

    nameStatus: "Activo",

    description:
      "Cesta tejida a mano hecha con fibras naturales y asas de roble.",

    image:
      "https://a.1stdibscdn.com/antique-early-20th-century-american-woven-oak-melon-basket-for-sale-picture-2/f_74672/f_41986562/IMG_9209_1729593838971_master.JPG",
  },

  {
    id: 3,
    slug: "stoneware-coffee-set",

    name: "Juego de café de gres",

    categoryId: 1,

    artisanId: 2,

    price: 78_000,

    stock: 3,

    featured: true,

    status: "Active",

    nameStatus: "Activo",

    description:
      "Juego de café minimalista hecho a mano, elaborado con arcilla de loza texturizada.",

    image:
      "https://i.etsystatic.com/10009111/r/il/2c80ae/4460714279/il_1080xN.4460714279_msgd.jpg",
  },

  {
    id: 4,
    slug: "beeswax-ritual-candle",

    name: "Vela Ritual de Cera de Abeja",

    categoryId: 3,

    artisanId: 2,

    status: "Sold",

    nameStatus: "Vendido",

    price: 24_000,

    stock: 0,

    featured: false,

    description:
      "Vela de cera de abeja de combustión lenta con sutiles notas de cedro y ámbar.",

    image:
      "https://i.etsystatic.com/17195470/r/il/54391e/3116506827/il_600x600.3116506827_b831.jpg",
  },

  {
    id: 5,
    slug: "hand-carved-serving-board",

    name: "Tabla para servir tallada a mano",

    categoryId: 4,

    artisanId: 3,

    status: "Draft",

    nameStatus: "Borrador",

    price: 58_000,

    stock: 2,

    featured: true,

    description: "Tabla de servir de nogal macizo tallada y acabada a mano.",

    image:
      "https://i.etsystatic.com/19935582/r/il/554a52/3631699000/il_fullxfull.3631699000_8ig2.jpg",
  },

  {
    id: 6,
    slug: "natural-linen-tablecloth",

    name: "Mantel de lino natural",

    categoryId: 2,

    artisanId: 3,

    status: "Draft",

    nameStatus: "Borrador",

    price: 88_000,

    stock: 16,

    featured: false,

    description:
      "Mantel de lino lavado suave diseñado para rituales de comida lenta.",

    image: "https://m.media-amazon.com/images/I/71Ho1u2po4L._AC_SL1500_.jpg",
  },
];

export default products;
