import type { Meta, Story } from '@storybook/react';
import DataTable, { DataTableProps } from '@/components/DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    controls: { disable: true }
  }
} as Meta<typeof DataTable>;


type DataTableStory = Story<DataTableProps>;

export const Default: DataTableStory = (args) => <DataTable {...args} />;

Default.args = {
  columns: [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
  ],
  data: [
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  ],
};
