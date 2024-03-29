import './Orders.scss';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { flexbox } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../../asset/image/index';
import numeral from 'numeral';
import { getAllOrders } from '../../../services/OrderService';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
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
        width: 150,
        editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone',
        // type: 'number',
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
        field: 'gender',
        headerName: 'Gender',
        width: 100,
        editable: true,
    },
    {
        field: 'note',
        headerName: 'Note',
        width: 100,
        editable: true,
    },
    {
        field: 'orderDate',
        headerName: 'OrderDate',
        width: 100,
        editable: true,
        renderCell: (params) => {
            // const orderDate = params.row.orderDate.slice(0.3).join('-');
            const orderDate = params.row.orderDate.join(' - ');
            return <span>{orderDate.slice(0, 13)}</span>;
        },
    },
    {
        field: 'totalMoney',
        headerName: 'TotalMoney',
        width: 100,
        editable: true,
        renderCell: (params) => {
            return <div>{numeral(params.row.totalMoney).format('0,0')}đ</div>;
        },
    },
];
// const rows = [
//     {
//         id: 1,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 2,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 3,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 4,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 5,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 6,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 7,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 8,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 9,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
//     {
//         id: 10,
//         userId: 1,
//         fullName: 'Nam kory',
//         email: 'Namkory@gmail.com',
//         phone: '0909360125',
//         address: 'HCM',
//         note: 'ko co gì',
//         orderDate: '18/01/2024',
//         totalMoney: 15000,
//     },
// ];

function Orders() {
    const [rows, setRow] = useState([]);
    const handleOrderDetail = (order_id) => {
        console.log('order id', order_id);
    };
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 80,
            renderCell: (params) => {
                return (
                    <div className="custome-action">
                        <button
                            type="button"
                            className="custome-action1"
                            onClick={() => {
                                handleOrderDetail(params.row.id);
                            }}
                        >
                            Detail
                        </button>
                    </div>
                );
            },
        },
    ];
    useEffect(() => {
        const getOrders = async () => {
            const res = await getAllOrders();
            setRow(res);
        };
        getOrders();
    }, []);

    return (
        <div className="Orders">
            <div className="btn-create">
                <h3>Orders</h3>
            </div>
            <Box sx={{ height: 550, width: '100%' }}>
                <DataGrid
                    sx={{ textAlign: 'center' }}
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    // columns={columns}
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

export default Orders;
