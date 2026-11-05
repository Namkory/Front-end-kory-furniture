import './NewProduct.scss';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NewProduct() {
    const { id } = useParams();
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
        data.image = file;
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        toast.success('Create successful new products!');
        setcallAPI(false);
        navigate('/admin/products');
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        if (id) {
            toast.success('The product has been updated successfully!');
            navigate('/admin/products');
        }
    };
    const spinnerStyle = {
        animation: 'spin 1s linear infinite !important',
    };

    return (
        <>
            {id ? (
                <div className="NewProduct">
                    <div className="NewProduct-header">
                        <h3>Update product</h3>
                    </div>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
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
                            </Col>
                            <Col xs={12} md={6}>
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
                        <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                            {callAPI ? (
                                <FontAwesomeIcon icon={faSpinner} style={spinnerStyle} className="spin" />
                            ) : (
                                'Update'
                            )}
                        </Button>
                    </Form>
                </div>
            ) : (
                <div className="NewProduct">
                    <div className="NewProduct-header">
                        <h3>New product</h3>
                    </div>
                    <Form onSubmit={handleSubmit(handleCreate)}>
                        <Row>
                            <Col xs={12} md={6}>
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
                                        placeholder="Enter price"
                                        id="price"
                                        name="price"
                                        {...register('price', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.price && <p style={{ marginTop: '7px' }}>Price is required</p>}
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicDiscount">
                                    <Form.Label>Discount*</Form.Label>
                                    <Form.Control
                                        type="text"
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
                        <Button variant="primary" type="submit">
                            {callAPI ? (
                                <FontAwesomeIcon icon={faSpinner} style={spinnerStyle} className="spin" />
                            ) : (
                                'Create'
                            )}
                        </Button>
                    </Form>
                </div>
            )}
        </>
    );
}

export default NewProduct;
