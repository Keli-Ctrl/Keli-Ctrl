import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TASK_TITLE_FIELD } from "./TaskTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="taskId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <TextField label="scheduledDate" source="scheduledDate" />
            <ReferenceField label="task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="taskId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="sentAt" source="sentAt" />
            <TextField label="sender" source="sender" />
            <TextField label="receiver" source="receiver" />
            <ReferenceField label="task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="taskId" label="Reviews">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="rating" source="rating" />
            <TextField label="comment" source="comment" />
            <TextField label="reviewer" source="reviewer" />
            <TextField label="serviceProvider" source="serviceProvider" />
            <ReferenceField label="task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
