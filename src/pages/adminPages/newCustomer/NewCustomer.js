import './NewCustomer.scss';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function NewCustomer() {
    const { id } = useParams(); //Dùng để lấy id trên thanh url
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleCreate = (data) => {
        console.log('data', data);
    };

    return (
        <div className="NewCustomer">
            <div className="NewCustomer-header">
                <h3>{id ? 'Update customers' : 'New customers'}</h3>
            </div>
            <Form onSubmit={handleSubmit(handleCreate)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicfullName">
                            <Form.Label>Full name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter fullName"
                                name="fullName"
                                id="fullName"
                                {...register('fullName', { required: true })}
                            />
                            <Form.Text className="text-danger">
                                {errors.fullName && <p style={{ marginTop: '7px' }}>Username is required</p>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                name="email"
                                {...register('email', { required: true })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email && <p style={{ marginTop: '7px' }}>Email is required</p>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone number*</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Phone number"
                                id="phoneNumber"
                                name="phoneNumber"
                                {...register('phoneNumber', { required: true })}
                            />
                            <Form.Text className="text-danger">
                                {errors.phoneNumber && <p style={{ marginTop: '7px' }}>PhoneNumber is required</p>}
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
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                id="address"
                                name="address"
                                {...register('address', { required: true })}
                            />
                            <Form.Text className="text-danger">
                                {errors.address && <p style={{ marginTop: '7px' }}>Address is required</p>}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example" {...register('gender')}>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRole">
                            <Form.Label>Role*</Form.Label>
                            <Form.Select aria-label="Default select example" {...register('role')}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.role && <p style={{ marginTop: '7px' }}>Role is required</p>}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default NewCustomer;
