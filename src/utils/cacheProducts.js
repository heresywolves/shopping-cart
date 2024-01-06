import products from "../products";

export default function cacheProducts(fetchResponce) {
  products.push(...fetchResponce);
}
