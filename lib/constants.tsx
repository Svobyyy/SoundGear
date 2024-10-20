export const MAX_NUMBER_OF_PRODUCTS = 9;

export const SITE_URL = "https://soundgear.matejsvobs.com";

export const REMOVE_FROM_NAME = [
  "Wireless",
  "Earphones",
  "Headphones",
  "Speaker",
];

export const SHIPPING_COST = 50;
export const VAT_RATE = 20;

// HomePage Products

export const primaryHomeBox = {
  name: "ZX9 SPEAKER",
  image: {
    desktop: {
      source: "/home/desktop/image-speaker-zx9.png",
      width: 410,
      height: 498,
    },
    tablet: {
      source: "/home/desktop/image-speaker-zx9.png",
      width: 197,
      height: 239,
    },
    mobile: {
      source: "/home/desktop/image-speaker-zx9.png",
      width: 172,
      height: 209,
    },
  },
  category: "speakers",
  slug: "zx9-speaker",
  description:
    "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
};

export const secondaryHomeBox = {
  name: "ZX7 SPEAKER",
  image: {
    desktop: {
      source: "/home/desktop/image-speaker-zx7.jpg",
      width: 1110,
      height: 320,
    },
    tablet: {
      source: "/home/tablet/image-speaker-zx7.jpg",
      width: 790,
      height: 736,
    },
    mobile: {
      source: "/home/mobile/image-speaker-zx7.jpg",
      width: 654,
      height: 736,
    },
  },
  slug: "zx7-speaker",
  category: "speakers",
};

export const tertiaryHomeBox = {
  image: {
    desktop: {
      source: "/home/desktop/image-earphones-yx1.jpg",
      width: 1110,
      height: 320,
    },
    tablet: {
      source: "/home/tablet/image-earphones-yx1.jpg",
      width: 790,
      height: 736,
    },
    mobile: {
      source: "/home/mobile/image-earphones-yx1.jpg",
      width: 654,
      height: 736,
    },
  },
};

export const quaternaryHomeBox = {
  name: "YX1 EARPHONES",
  slug: "yx1-earphones",
  category: "earphones",
};
