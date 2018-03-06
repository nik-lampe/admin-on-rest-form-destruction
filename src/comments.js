import React from 'react'
import {
  List,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  LongTextInput,
  SimpleForm,
  TextInput,
} from 'admin-on-rest'

export const CommentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id"/>
      <ReferenceField label="Post" source="postId" reference="posts">
        <TextField source="title"/>
      </ReferenceField>
      <TextField source="name"/>
      <TextField source="body"/>
    </Datagrid>
  </List>
)

export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm defaultValue={{ body: 'Test Body' }}>
      <TextInput source="name"/>
      <LongTextInput source="body"/>
    </SimpleForm>
  </Create>
)