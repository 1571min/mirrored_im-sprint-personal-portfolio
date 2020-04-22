import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Nav } from './components/Nav';
import Setting from './components/Setting';
import { Title } from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSettingOpen: false,
    };

    this.handleSettingButtonClick = this.handleSettingButtonClick.bind(this);
  }

  handleSettingButtonClick() {
    this.setState((prevState) => ({
      isSettingOpen: !prevState.isSettingOpen,
    }));
  }

  render() {
    return (
      <Router>
        <Title />
        <div className="wrapper">
          <Setting
            isOpen={this.state.isSettingOpen}
            handleClose={this.handleSettingButtonClick}
          ></Setting>
          <Nav
            isOpen={this.state.isSettingOpen}
            handleClose={this.handleSettingButtonClick}
          />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
