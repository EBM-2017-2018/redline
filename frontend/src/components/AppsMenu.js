import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GridList, Popover, withStyles} from 'material-ui';

import AppIcon from './AppIcon';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    width: 300,
    padding: '20px 15px',
    backgroundColor: theme.palette.background.paper,
  }
});

class AppsMenu extends PureComponent {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    closeCallback: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  apps = [
    {
      name: 'OKLM',
      url: '//oklm.ebm.nymous.io',
      logo: './images/logo-oklm.png'
    },
    {
      name: 'Redline',
      url: '//redline.ebm.nymous.io',
      logo: './images/logo-redline.png'
    },
    {
      name: 'Linkapp',
      url: '//linkapp.ebm.nymous.io',
      logo: './images/logo-linkapp.png'
    },
    {
      name: 'Markus',
      url: '//markus.ebm.nymous.io',
      logo: './images/logo-markus.png'
    },
    {
      name: 'SAGG',
      url: '//sagg.ebm.nymous.io',
      logo: './images/logo-sagg.png'
    },
    {
      name: 'Livecoding',
      url: '//clock-livecoding.ebm.nymous.io',
      logo: './images/logo-clock.png'
    }
  ];

  render() {
    const {classes} = this.props;

    return (
      <Popover
        open={this.props.open}
        onClose={this.props.closeCallback}
        anchorEl={this.props.anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>
        <div className={classes.root}>
          <GridList cellHeight={100} cols={3}>
            {this.apps.map(app => (
              <AppIcon key={app.url} logo={app.logo} appName={app.name} href={app.url}/>
            ))}
          </GridList>
        </div>
      </Popover>
    )
  }
}

export default withStyles(styles)(AppsMenu);
