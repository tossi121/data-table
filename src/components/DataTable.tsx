import React from 'react';
import '../styles/globals.css';

interface DataTableProps {
  columns: {
    key: string;
    title: string;
  }[];
  data: {
    [key: string]: string | number | JSX.Element;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="tw-overflow-x-auto">
      <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-200">
        <thead className="tw-bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tw-divide-y tw-divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key} className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
