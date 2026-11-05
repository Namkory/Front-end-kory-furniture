import ProductList from '../../../components/productList/ProductList';
import { fakeData1 } from '../../../util/Data';
import { CATEGORIES } from '../../../util/categories';

function Bed({ render }) {
    return <ProductList category={CATEGORIES.bed} products={fakeData1} render={render} />;
}

export default Bed;
