import './Customers.scss';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { flexbox } from '@mui/system';

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
        field: 'phone',
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
    },
];
const rows = [
    { id: 1, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 2, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 3, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 4, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 5, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 6, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 7, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 8, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 9, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 10, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
    { id: 11, fullName: 'Snow', email: 'John@gmail.com', phone: 14, gender: 'male', address: 'HCM', role: 'admin' },
];
function Users() {
    const handleDeleteUser = async (idUser) => {
        console.log('check iduser', idUser);
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
