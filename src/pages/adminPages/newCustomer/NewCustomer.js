import './NewCustomer.scss';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

function NewCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleCreate = () => {
        toast.success('Create successful new user!');
        navigate('/admin/customer');
    };
    const handleUpdateUser = (e) => {
        e.preventDefault();
        toast.success('User updated successfully!');
        navigate('/admin/customer');
    };
    return (
        <>
            {id ? (
                <div className="NewCustomer">
                    <div className="NewCustomer-header">
                        <h3>Update customer</h3>
                    </div>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicfullName">
                                    <Form.Label>Full name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter fullName"
                                        name="fullName"
                                        id="fullName"
                                        value={data.fullName}
                                        onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Label>Phone number*</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Phone number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={data.phoneNumber}
                                        onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Address*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) => setData({ ...data, address: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={data.gender}
                                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicRole">
                                    <Form.Label>Role*</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={data.role?.id}
                                        onChange={(e) => {
                                            const selectedRoleId = e.target.value;
                                            const selectedRole = {
                                                id: parseInt(selectedRoleId),
                                                name: selectedRoleId === '1' ? 'User' : 'Admin',
                                            };
                                            setData({ ...data, role: selectedRole });
                                        }}
                                    >
                                        <option value="1">User</option>
                                        <option value="2">Admin</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" onClick={(e) => handleUpdateUser(e)}>
                            Update
                        </Button>
                    </Form>
                </div>
            ) : (
                <div className="NewCustomer">
                    <div className="NewCustomer-header">
                        <h3>New customers</h3>
                    </div>
                    <Form onSubmit={handleSubmit(handleCreate)}>
                        <Row>
                            <Col xs={12} md={6}>
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
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Password"
                                        id="password"
                                        name="password"
                                        {...register('password', { required: true })}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.email && <p style={{ marginTop: '7px' }}>Password is required</p>}
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={6}>
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
                                        {errors.phoneNumber && (
                                            <p style={{ marginTop: '7px' }}>PhoneNumber is required</p>
                                        )}
                                    </Form.Text>
                                </Form.Group>
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
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicRole">
                                    <Form.Label>Role*</Form.Label>
                                    <Form.Select aria-label="Default select example" {...register('roleId')}>
                                        <option value="1">User</option>
                                        <option value="2">Admin</option>
                                    </Form.Select>
                                    <Form.Text className="text-danger">
                                        {errors.role && <p style={{ marginTop: '7px' }}>Role is required</p>}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </div>
            )}
        </>
    );
}

export default NewCustomer;
