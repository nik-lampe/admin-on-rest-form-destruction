import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import { CommentList, CommentCreate } from './comments';

const App = () => (
  <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="comments" list={CommentList} create={CommentCreate} />

  </Admin>
);

export default App;