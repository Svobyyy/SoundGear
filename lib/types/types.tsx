type ImageSizes = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type ProductIncludeItem = {
  quantity: number;
  item: string;
};

type ProductGallery = {
  first: ImageSizes;
  second: ImageSizes;
  third: ImageSizes;
};

type Others = {
  slug: string;
  name: string;
  image: ImageSizes;
};

type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImageSizes;
  category: string;
  categoryImage: ImageSizes;
  isNewProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductIncludeItem[];
  gallery: ProductGallery;
  others: Others[];
};

type homeProduct = {
  info: {
    name?: string;
    description?: string;
    image?: {
      desktop?: {
        source: string;
        width: number;
        height: number;
      };
      tablet?: {
        source: string;
        width: number;
        height: number;
      };
      mobile?: {
        source: string;
        width: number;
        height: number;
      };
    };
    category?: string;
    slug?: string;
  };
};

type CartItem = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  quantity: number;
};

type CartCounterProps = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
};

type CartItemProps = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  quantity: number;
};
