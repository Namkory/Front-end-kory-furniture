import './ModalLogin.scss';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../services/AuthService';
import { createNewUser, getUserById } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

function ModalLogin({ open, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [openRegister, setOpenRegister] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (data) => {
        try {
            console.log('Login Data:', data);
            const response = await loginUser(data);
            console.log("Login Response:", response);
    
            // Lưu token đúng cách
            localStorage.setItem('accessToken', response.token);
    
            // Lấy userId từ response để gọi API lấy user info
            const getUser = await getUserById(response.userId);
            if (getUser) {
                localStorage.setItem('userRole', getUser.roles[0]); // Lấy role đầu tiên
                if (getUser.roles.includes('ADMIN')) {
                    navigate('/admin');
                } else {
                    onClose();
                }
            }
            
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        }
        onClose();
    };
    
    const handleRegister = async (data) => {
        await createNewUser(data);
        setOpenRegister(false);
    };

    if (!open) return null;
    return (
        <div className="modall" onClick={onClose}>
            <div
                className="modal-container"
                style={!openRegister ? { margin: '180px auto' } : { margin: '20px auto' }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal-container-inner">
                    {!openRegister ? (
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <h1>ĐĂNG NHẬP</h1>
                            <p>Tên tài khoản hoặc địa chỉ email*</p>
                            <div className="modal-field">
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    {...register('userName', { required: true })}
                                />
                                {errors.userName && <p className="text-danger">User name is required</p>}
                            </div>
                            <p>Mật khẩu*</p>
                            <div className="modal-password">
                                <input
                                    type={isShowPassword === true ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    {...register('password', { required: true })}
                                />
                                <FontAwesomeIcon
                                    icon={isShowPassword === true ? faEye : faEyeSlash}
                                    className="icon"
                                    onClick={() => {
                                        setIsShowPassword(!isShowPassword);
                                    }}
                                />
                                {errors.password && <p className="text-danger">Password is required</p>}
                            </div>
                            <div className="modal-btn-login">
                                <div className="modal-btn">
                                    <button className="btn" type="submit">
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                                <div
                                    className="modal-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenRegister(true);
                                    }}
                                >
                                    <button className="btn">ĐĂNG KÝ</button>
                                </div>
                            </div>
                            <span className="forgot-password">Quên mật khẩu ?</span>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <h1>ĐĂNG KÝ</h1>
                            <p>Full name*</p>
                            <div className="modal-field">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    {...register('fullName', { required: true })}
                                />
                                {errors.fullName && <p className="text-danger">Full name is required</p>}
                            </div>
                            <p>Địa chỉ email*</p>
                            <div className="modal-field">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <p className="text-danger">Email is required</p>}
                            </div>
                            <p>Mật khẩu*</p>
                            <div className="modal-password">
                                <input
                                    type={isShowPassword === true ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    {...register('password', { required: true })}
                                />
                                <FontAwesomeIcon
                                    icon={isShowPassword === true ? faEye : faEyeSlash}
                                    className="icon"
                                    onClick={() => {
                                        setIsShowPassword(!isShowPassword);
                                    }}
                                />
                                {errors.password && <p className="text-danger">Password is required</p>}
                            </div>
                            <p>Địa chỉ*</p>
                            <div className="modal-field">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    {...register('address', { required: true })}
                                />
                                {errors.address && <p className="text-danger">Address is required</p>}
                            </div>
                            <p>Sđt*</p>
                            <div className="modal-field">
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    {...register('phone', { required: true })}
                                />
                                {errors.phone && <p className="text-danger">Phone is required</p>}
                            </div>
                            <p>Giới tính*</p>
                            <div className="modal-gender">
                                <select name="gender" id="gender" {...register('gender')}>
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                </select>
                            </div>
                            <div className="modal-btn-login">
                                <div className="modal-btn">
                                    <button className="btn" type="submit">
                                        ĐĂNG KÝ
                                    </button>
                                </div>
                                <div
                                    className="modal-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpenRegister(false);
                                    }}
                                >
                                    <button className="btn">TRỞ LẠI</button>
                                </div>
                            </div>
                            <span>Quên mật khẩu ?</span>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
