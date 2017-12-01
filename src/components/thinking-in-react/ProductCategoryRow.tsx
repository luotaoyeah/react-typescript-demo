import * as React from 'react';
import ProductRow from './ProductRow';
import Product from './Product';

interface Props {
  category: string;
  products: Product[];
}

interface State {
}

class ProductCategoryRow extends React.Component <Props, State> {
  render() {
    return (
      <tbody>
        <tr>
          <td
            colSpan={2}
          >
            <b>{this.props.category}</b>
          </td>
        </tr>
        {this.props.products.map((product: Product) => (
          <ProductRow
            key={product.name}
            product={product}
          />
        ))}
      </tbody>
    );
  }
}

export default ProductCategoryRow;