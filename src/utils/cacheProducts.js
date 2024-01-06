import products from "../products";

export default function cacheProducts(fetchResponce) {
  if (products.length === 0) {
    products.push(...fetchResponce);
  }
}
