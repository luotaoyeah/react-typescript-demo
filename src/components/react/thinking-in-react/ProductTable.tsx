import * as React from 'react';
import Product from './Product';
import * as _ from 'lodash';
import ProductCategoryRow from './ProductCategoryRow';
import ProductByCategory from './ProductByCategory';

interface Props {
  data: Product[];
}

interface State {
}

class ProductTable extends React.Component <Props, State> {
  render() {
    const productByCategory: ProductByCategory = _.groupBy(this.props.data, 'category');
    return (
      <table
        className="borderTable"
        cellPadding={5}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {_.map(productByCategory, (n: Product[], index: string) => (
          <ProductCategoryRow
            key={index}
            category={index}
            products={n}
          />
        ))}
      </table>
    );
  }
}

export default ProductTable;