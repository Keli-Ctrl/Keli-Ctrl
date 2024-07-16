import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TaskTitle } from "../task/TaskTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="reviewer" source="reviewer" />
        <TextInput label="serviceProvider" source="serviceProvider" />
        <ReferenceInput source="task.id" reference="Task" label="task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
