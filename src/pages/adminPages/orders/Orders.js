import './Orders.scss';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { flexbox } from '@mui/system';
import { useState } from 'react';
import numeral from 'numeral';

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

function Orders() {
    const [rows] = useState([]);
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
