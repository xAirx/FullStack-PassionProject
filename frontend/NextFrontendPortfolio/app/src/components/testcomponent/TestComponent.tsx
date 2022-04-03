import React from 'react';
import { TestComponent } from 'mpw-storybook';

const App = () => (
  <div className='app-container'>
    <h1>Hello I'm consuming the storybook library</h1>
    <TestComponent theme='primary' />
  </div>
);

export default App;
