import './NewProduct.scss';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../../asset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { createNewProduct, getPById, updateProduct } from '../../../services/productService';

function NewProduct() {
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    const [file, setFile] = useState('');
    const [dataUpdated, setDataUpdate] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCreate = async (data) => {
        const formData = new FormData();
        // update
        if (id) {
            formData.append('id', id);
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            if (file) {
                formData.append('image', file);
            }
            const res = await updateProduct(formData);
            console.log('check res update', res);
            return;
        }
        // create
        data.image = file;
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        const res = await createNewProduct(formData);
        console.log('check res', res);
    };

    useEffect(() => {
        if (id) {
            fetchProductById();
        }
    }, [id]);

    const fetchProductById = async () => {
        const res = await getPById(id);
        console.log(res);
        setDataUpdate(res);
    };

    return (
        <div className="NewProduct">
            <div className="NewProduct-header">
                <h3>{id ? 'Update product' : 'New product'}</h3>
            </div>
            <Form onSubmit={handleSubmit(handleCreate)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicThumbnail">
                            <div style={{ marginRight: '2rem' }}>
                                <img
                                    src={file ? URL.createObjectURL(file) : id ? dataUpdated.thumbnail : images.noImg}
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

                        {id ? (
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        ) : (
                            <Button variant="primary" type="submit">
                                Create
                            </Button>
                        )}
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
                                {errors.description && <p style={{ marginTop: '7px' }}>Description is required</p>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                // value={id ? dataUpdated.category?.id : '1'}
                                // defaultValue={id ? dataUpdated.category?.id : '1'}
                                // defaultChecked={id ? dataUpdated.category?.id : '1'}
                                aria-label="Default select example"
                                {...register('categoryId')}
                            >
                                <option value="1">Giường ngủ</option>
                                <option value="2">Giường tầng</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default NewProduct;
