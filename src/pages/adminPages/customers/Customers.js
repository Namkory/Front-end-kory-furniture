import './Customers.scss';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { flexbox } from '@mui/system';
import { useEffect, useState } from 'react';
import { deleteUser, getAllUser } from '../../../services/UserService';
import { toast } from 'react-toastify';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 150,
        displayName: flexbox,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 100,
        editable: true,
        renderCell: (params) => {
            return <div>{params.row.role?.name}</div>;
        },
    },
];
function Users() {
    const [rows, setRow] = useState([]);
    const handleDeleteUser = async (idUser) => {
        await deleteUser(idUser);
        getUsers();
        toast('delete user successfully!');
    };
    const navigate = useNavigate();
    const handleUpdateUser = (id) => {
        navigate(`edit-customer/${id}`);
    };
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="custome-action">
                        <button
                            type="button"
                            className="custome-action1"
                            onClick={() => {
                                handleUpdateUser(params.row.id);
                            }}
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            className="custome-action2"
                            onClick={() => {
                                handleDeleteUser(params.row.id);
                            }}
                        >
                            delete
                        </button>
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const res = await getAllUser();
        setRow(res);
    };

    return (
        <div className="customers">
            <div className="btn-create">
                <h3>Customers</h3>
                <Link to="new-customer" className="text-decoration-none">
                    <div className="btn-create-item">Create new user</div>
                </Link>
            </div>
            <Box sx={{ height: 560, width: '100%' }}>
                <DataGrid
                    sx={{ textAlign: 'center' }}
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    );
}

export default Users;
