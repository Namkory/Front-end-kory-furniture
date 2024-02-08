import './NewProduct.scss';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider, faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { createNewProduct, getPById, updateProduct } from '../../../services/productService';

function NewProduct() {
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    const [file, setFile] = useState('');
    const [fileUpdate, setFileUpdate] = useState('');
    const [dataUpdated, setDataUpdate] = useState({});
    const [callAPI, setcallAPI] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const handleCreate = async (data) => {
        setcallAPI(true);
        const formData = new FormData();
        // create
        data.image = file;
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        const res = await createNewProduct(formData);
        toast.success('Create successful new products!');
        setcallAPI(false);
        navigate('/admin/products');
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        setcallAPI(true);
        const formData = new FormData();
        // update
        if (id) {
            formData.append('id', id);
            for (const [key, value] of Object.entries(dataUpdated)) {
                if (key === 'category') {
                    formData.append('categoryId', value.id ? value.id : value);
                } else {
                    formData.append(key, value);
                }
            }
            if (fileUpdate) {
                formData.append('image', fileUpdate);
            }
            const res = await updateProduct(formData);
            setcallAPI(false);
            toast.success('The product has been updated successfully!');
            navigate('/admin/products');
            return;
        }
    };
    useEffect(() => {
        if (id) {
            fetchProductById();
        }
    }, [id]);
    const fetchProductById = async () => {
        const res = await getPById(id);
        console.log('check update res', res);
        setDataUpdate(res);
    };
    const spinnerStyle = {
        animation: 'spin 1s linear infinite !important',
    };

    return (
        <>
            {id ? (
                //Update
                <div className="NewProduct">
                    <div className="NewProduct-header">
                        <h3>Update product</h3>
                    </div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicThumbnail">
                                    <div style={{ marginRight: '2rem' }}>
                                        <img
                                            src={
                                                fileUpdate
                                                    ? URL.createObjectURL(fileUpdate)
                                                    : id
                                                    ? dataUpdated.thumbnail
                                                    : images.noImg
                                            }
                                            alt="ko co anh"
                                            className="input-avatar"
                                        />
                                    </div>
                                    <Form.Label htmlFor="thumbnail" style={{ cursor: 'pointer' }}>
                                        Image: <FontAwesomeIcon icon={faUpload} className="icon" />
                                    </Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="thumbnail"
                                        id="thumbnail"
                                        onChange={(e) => setFileUpdate(e.target.files[0])}
                                        style={{ display: 'none' }}
                                    />
                                    <Form.Text className="text-danger"></Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name Product"
                                        name="name"
                                        value={id ? dataUpdated.name : ''}
                                        onChange={(e) => setDataUpdate({ ...dataUpdated, name: e.target.value })}
                                        id="name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Price*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={id ? dataUpdated.price : ''}
                                        onChange={(e) => setDataUpdate({ ...dataUpdated, price: e.target.value })}
                                        placeholder="Enter price"
                                        id="price"
                                        name="price"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                                    {callAPI ? (
                                        <FontAwesomeIcon icon={faSpinner} style={spinnerStyle} className="spin" />
                                    ) : (
                                        'Update'
                                    )}
                                </Button>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicDiscount">
                                    <Form.Label>Discount*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={id ? dataUpdated.discount : ''}
                                        onChange={(e) => setDataUpdate({ ...dataUpdated, discount: e.target.value })}
                                        placeholder="Enter discount"
                                        id="discount"
                                        name="discount"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Description*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        value={id ? dataUpdated.description : ''}
                                        onChange={(e) => setDataUpdate({ ...dataUpdated, description: e.target.value })}
                                        id="description"
                                        name="description"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={id ? dataUpdated.category?.id : ''}
                                        onChange={(e) => setDataUpdate({ ...dataUpdated, category: e.target.value })}
                                    >
                                        <option value="1">Giường ngủ</option>
                                        <option value="2">Giường tầng</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            ) : (
                //Create
                <div className="NewProduct">
                    <div className="NewProduct-header">
                        <h3>New product</h3>
                    </div>
                    <Form onSubmit={handleSubmit(handleCreate)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicThumbnail">
                                    <div style={{ marginRight: '2rem' }}>
                                        <img
                                            src={
                                                file
                                                    ? URL.createObjectURL(file)
                                                    : id
                                                    ? dataUpdated.thumbnail
                                                    : images.noImg
                                            }
                                            alt="ko co anh"
                                            className="input-avatar"
                                        />
                                    </div>
                                    <Form.Label htmlFor="thumbnail" style={{ cursor: 'pointer' }}>
                                        Image: <FontAwesomeIcon icon={faUpload} className="icon" />
                                    </Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="thumbnail"
                                        id="thumbnail"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{ display: 'none' }}
                                    />
                                    <Form.Text className="text-danger"></Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name Product"
                                        name="name"
                                        // value={id ? dataUpdated.name : ''}
                                        id="name"
                                        {...register('name', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.name && <p style={{ marginTop: '7px' }}>Name is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Price*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        // value={id ? dataUpdated.price : ''}
                                        placeholder="Enter price"
                                        id="price"
                                        name="price"
                                        {...register('price', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.price && <p style={{ marginTop: '7px' }}>Price is required</p>}
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    {callAPI ? (
                                        <FontAwesomeIcon icon={faSpinner} style={spinnerStyle} className="spin" />
                                    ) : (
                                        'Create'
                                    )}
                                </Button>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicDiscount">
                                    <Form.Label>Discount*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        // value={id ? dataUpdated.discount : ''}
                                        placeholder="Enter discount"
                                        id="discount"
                                        name="discount"
                                        {...register('discount', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.discount && <p style={{ marginTop: '7px' }}>Discount is required</p>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Description*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        // value={id ? dataUpdated.description : ''}
                                        id="description"
                                        name="description"
                                        {...register('description', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.description && (
                                            <p style={{ marginTop: '7px' }}>Description is required</p>
                                        )}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select aria-label="Default select example" {...register('categoryId')}>
                                        <option value="1">Giường ngủ</option>
                                        <option value="2">Giường tầng</option>
                                        <option value="3">Phụ kiện</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
        </>
    );
}

export default NewProduct;
