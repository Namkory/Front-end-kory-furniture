import ProductList from '../../../components/productList/ProductList';
import { fakeData2 } from '../../../util/Data';
import { CATEGORIES } from '../../../util/categories';

function Bunk({ render }) {
    return <ProductList category={CATEGORIES.bunkBed} products={fakeData2} render={render} />;
}

export default Bunk;
