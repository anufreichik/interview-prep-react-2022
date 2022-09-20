import React from 'react';

const AddressTableRow = ({rowData}) => {
    return (
        <tr>
            <td>{rowData.id}</td>
            <td>{rowData.Address}</td>
            <td>{rowData['Pin code']}</td>
            <td>{rowData.customerEmail}</td>
            <td>{rowData.contact}</td>
        </tr>
    );
};

export default AddressTableRow;
