import React from 'react';
import styles from './DialogBox.module.css';

interface CustomDialogBoxProps {
    isOpen: boolean;
    onDismiss: () => void;
    onSubmit: (data: any) => void;
}

const CustomDialogBox: React.FC<CustomDialogBoxProps> = ({ isOpen, onDismiss, onSubmit }) => {
    const [formData, setFormData] = React.useState({
        connectionName: '',
        connectionNumber: '',
        dataWarehouse: '',
        host: '',
        httpAuth: '',
        accessToken: '',
        dataLogSchema: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, dataWarehouse: e.target.value });
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onDismiss();
    };

    const dataWarehouseOptions = [
        { key: '', text: 'Select' },
        { key: 'snowflake', text: 'Snowflake' },
        { key: 'redshift', text: 'Redshift' },
        { key: 'bigquery', text: 'BigQuery' },
        { key: 'databricks', text: 'Databricks' },
    ];

    return (
        <>

        {
            isOpen && (
                <div className={`${styles.dialogOverlay} ${isOpen ? styles.show : ''}`}>
            <div className={styles.dialogBox}>
                <div className={styles.dialogHeader}>
                    <h3 className={styles.topHead}>Connect Your Database</h3>
                    <button onClick={onDismiss} className={styles.closeButton}>×</button>
                </div>
                <div className={styles.dialogContent}>
                    <label>
                        Connection Name
                        <input type="text" name="connectionName" value={formData.connectionName} onChange={handleInputChange} />
                    </label>
                    <label>
                        Connection Number
                        <input type="text" name="connectionNumber" value={formData.connectionNumber} onChange={handleInputChange} />
                    </label>
                    <label>
                        Choose your data warehouse
                        <select name="dataWarehouse" value={formData.dataWarehouse} onChange={handleDropdownChange}>
                            {dataWarehouseOptions.map(option => (
                                <option key={option.key} value={option.key}>{option.text}</option>
                            ))}
                        </select>
                    </label>
                    <h3>Databricks</h3>
                    <label>
                        Host
                        <input type="text" name="host" value={formData.host} onChange={handleInputChange} />
                    </label>
                    <label>
                        HTTP Auth
                        <input type="text" name="httpAuth" value={formData.httpAuth} onChange={handleInputChange} />
                    </label>
                    <label>
                        Access Token
                        <input type="text" name="accessToken" value={formData.accessToken} onChange={handleInputChange} />
                    </label>
                    <label>
                        Data Log Schema
                        <input type="text" name="dataLogSchema" value={formData.dataLogSchema} onChange={handleInputChange} />
                    </label>
                </div>
                <div className={styles.dialogFooter}>
                    <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
                    <button onClick={onDismiss} className={styles.closeButton}>Close</button>
                </div>
            </div>
        </div>
            )
        }

        
    
    </>
    )
};

export default CustomDialogBox;
