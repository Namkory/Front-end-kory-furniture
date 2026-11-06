import images from '../../asset/image';
import { usePageMeta } from '../../util/seo';

function ErrorPage() {
    usePageMeta({ title: 'Không tìm thấy trang', noindex: true });
    return (
        <div>
            <img
                src={images.errorPage}
                alt="Không tìm thấy trang - Kory Furniture"
                style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            />
        </div>
    );
}

export default ErrorPage;
