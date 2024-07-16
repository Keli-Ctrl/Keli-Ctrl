import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="title" source="title" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="status" source="status" />
        <TextField label="serviceProvider" source="serviceProvider" />
        <TextField label="customer" source="customer" />
        <TextField label="createdBy" source="createdBy" />
      </Datagrid>
    </List>
  );
};
