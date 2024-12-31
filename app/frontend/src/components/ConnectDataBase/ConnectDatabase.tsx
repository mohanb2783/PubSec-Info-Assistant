import React, { useState } from 'react';
import { TextField, PrimaryButton, IconButton, Stack, IColumn, DetailsList } from '@fluentui/react';
import styles from './ConnectDatabase.module.css';
import { Add12Filled } from '@fluentui/react-icons';
import DialogBox from '../DialogBox/DialogBox'; // Adjust the import path as necessary

const columns: IColumn[] = [
    { key: 'serialNo', name: 'Serial No.', fieldName: 'serialNo', minWidth: 50, maxWidth: 100, isResizable: true },
    { key: 'description', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'connectionName', name: 'Connection Name', fieldName: 'connectionName', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'schema', name: 'Schema', fieldName: 'schema', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'host', name: 'Host', fieldName: 'host', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'dbType', name: 'DB Type', fieldName: 'dbType', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'status', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
];

const items = [
    { key: '1', serialNo: '1', description: 'Database for sales data', connectionName: 'SalesDB', schema: 'public', host: 'localhost', dbType: 'PostgreSQL', status: 'Active' },
    { key: '2', serialNo: '2', description: 'Database for user data', connectionName: 'UserDB', schema: 'public', host: 'localhost', dbType: 'MySQL', status: 'Inactive' },
    { key: '3', serialNo: '3', description: 'Database for product data', connectionName: 'ProductDB', schema: 'public', host: 'localhost', dbType: 'MongoDB', status: 'Active' },
];

const ConnectDatabase = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddClick = () => {
        setIsDialogOpen(true);
    };

    const handleDialogDismiss = () => {
        setIsDialogOpen(false);
    };

    const handleDialogSubmit = (data: any) => {
        console.log('Form data submitted:', data);
        setIsDialogOpen(false);
        // Add logic to update the items list with the new data
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Connections</h1>
            <div className={styles.searchContainer}>
                <div className={styles.searchFieldContainer}>
                    <input type="text" className={styles.searchField} name="" id="" />
                    <IconButton iconProps={{ iconName: 'Search' }} className={styles.searchIcon} />
                </div>
                <button className={styles.addButton} onClick={handleAddClick}>
                    <Add12Filled className={styles.addIcon} /> <span>Add</span>
                </button>
            </div>
            <DetailsList
                items={items}
                columns={columns}
                setKey="set"
                layoutMode={0}
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                className={styles.detailsList}
            />
            <DialogBox
                isOpen={isDialogOpen}
                onDismiss={handleDialogDismiss}
                onSubmit={handleDialogSubmit}
            />
        </div>
    );
};

export default ConnectDatabase;
