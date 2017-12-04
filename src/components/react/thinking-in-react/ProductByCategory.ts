import Product from './Product';

interface ProductByCategory {
  [index: string]: Product[];
}

export default ProductByCategory;