import images from '../../asset/image';

function ErrorPage() {
    return (
        <div>
            <img
                src={images.errorPage}
                alt="Error Page"
                style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            />
        </div>
    );
}

export default ErrorPage;
