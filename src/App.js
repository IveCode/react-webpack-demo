import React from 'react';
import PostList from './components/post_list'
 
const App = ({ title }) =>
  <div>
  <h1>{title}</h1>
  <PostList />
  </div>;
 
export default App;