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
  others: Product[];
};

type CartItem = {
  id: Product["id"];
  productName: Product["name"];
  quantity: number;
};
