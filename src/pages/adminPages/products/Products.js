import { useState } from 'react';
import './Products.scss';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { flexbox } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../../asset/image/index';
import { useEffect } from 'react';
import { deleteProduct, fetchProducts } from '../../../services/productService';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'thumbnail',
        headerName: 'Image',
        width: 200,
        type: 'text',
        height: 1000,
        renderCell: (params) => {
            return (
                <>
                    <img
                        className="cellImg"
                        src={params.row.thumbnail ? params.row.thumbnail : images.noImg}
                        // src={params.row.thumbnail}
                        alt="avatar"
                    />
                </>
            );
        },
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 250,
        displayName: flexbox,
        editable: true,
    },
    {
        field: 'discount',
        headerName: 'Discount',
        type: 'text',
        width: 110,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 200,
        editable: true,
        renderCell: (params) => {
            return <div>{params.row.price} đ</div>;
        },
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: true,
        renderCell: (params) => {
            return <div>{params.row.category?.name}</div>;
        },
    },
];

function Products() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const handleDeleteProduct = async (pId) => {
        const res = await deleteProduct(pId);
        await getProducts();
    };
    const handleUpdateProduct = async (id) => {
        navigate(`edit-product/${id}`);
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="custome-action">
                        <button
                            type="button"
                            className="custome-action1"
                            onClick={() => {
                                handleUpdateProduct(params.row.id);
                            }}
                        >
                            edit
                        </button>
                        <button
                            type="button"
                            className="custome-action2"
                            onClick={() => {
                                handleDeleteProduct(params.row.id);
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
        getProducts();
    }, []);

    const getProducts = async () => {
        const res = await fetchProducts();
        setRows(res);
    };

    return (
        <div className="Products">
            <div className="btn-create">
                <h3>Products</h3>
                <Link to="new-product" className="text-decoration-none">
                    <div className="btn-create-item">Create new product</div>
                </Link>
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

export default Products;
