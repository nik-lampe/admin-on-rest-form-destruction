import React from 'react'
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  ListButton,
  LongTextInput,
  SimpleForm,
  TextInput,
} from 'admin-on-rest'

import { CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionAdd from 'material-ui/svg-icons/action/note-add'
import { Link } from 'react-router-dom'


export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="title"/>
      <TextField source="body"/>
      <EditButton/>
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const cardActionStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right',
}

const PostEditActions =
  ({ basePath, data, }) => (
    <CardActions style={cardActionStyle}>
      <ListButton basePath={basePath}/>
      <FlatButton
        primary
        label={'Add Comment'}
        containerElement={
          <Link to={`/comments/create?post=${data ? data.id : ''}`}/>
        }
        icon={<ActionAdd/>}
      />
    </CardActions>
  )


export const PostEdit = (props) => (
  <Edit title={<PostTitle/>} actions={<PostEditActions/>} {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <TextInput source="title"/>
      <LongTextInput source="body"/>
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <LongTextInput source="body"/>
    </SimpleForm>
  </Create>
)