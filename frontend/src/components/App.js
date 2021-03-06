import React, {Component} from 'react';
import {MuiThemeProvider, Reboot, withStyles} from 'material-ui';
import PropTypes from 'prop-types';

import './App.css';
import theme from '../theme';
import GlobalAppBar from './GlobalAppBar';
import Content from './Content';

const styles = {
  root: {
    marginTop: 56,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: 48
    },
    '@media (min-width:600px)': {
      marginTop: 64
    }
  },
};

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <MuiThemeProvider theme={theme}>
          <Reboot/>
          <GlobalAppBar appTitle="Redline"/>
          {/* You should work mainly in the Content component */}
          <Content/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
