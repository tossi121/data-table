import React from 'react';
import "@/styles/globals.css";
interface DataTableProps {
    columns: {
        key: string;
        title: string;
    }[];
    data: {
        [key: string]: string | number | JSX.Element;
    }[];
}
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
