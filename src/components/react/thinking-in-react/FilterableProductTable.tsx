import React from 'react';
import Product from './Product';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

interface Props {
  data: Product[];
}

interface State {
}

class FilterableProductTable extends React.Component <Props, State> {
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable data={this.props.data}/>
      </div>
    );
  }
}

export default FilterableProductTable;