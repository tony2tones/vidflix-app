const React = require('react');
const render = require('react-dom').render;

/* eslint linebreak-style: ["error", "windows"] */

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));