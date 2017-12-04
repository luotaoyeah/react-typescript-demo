import * as React from 'react';
import Product from './Product';

interface Props {
  product: Product;
}

interface State {
}

class ProductRow extends React.Component <Props, State> {
  render() {
    return (
      <tr>
        <td
          style={
            {
              color: !this.props.product.stocked ? 'red' : '#333'
            }
          }
        >
          {this.props.product.name}
        </td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;