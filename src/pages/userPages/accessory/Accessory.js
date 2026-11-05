import ProductList from '../../../components/productList/ProductList';
import { fakeData3 } from '../../../util/Data';
import { CATEGORIES } from '../../../util/categories';

function Accessory({ render }) {
    return <ProductList category={CATEGORIES.accessory} products={fakeData3} render={render} />;
}

export default Accessory;
