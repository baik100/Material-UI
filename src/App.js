import React, { Component } from 'react';
import AppBar from "./components/AppBar";
import PostPage from "./pages/PostPage";
import './scss/style.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <PostPage/>
      </div>
    );
  }
}

export default App;
