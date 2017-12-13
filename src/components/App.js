import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Scrollbars } from 'react-custom-scrollbars';
import { Grid, Segment } from 'semantic-ui-react';

import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

import MainInformation from './MainInformation';
import NavigateMenu from './NavigateMenu';
import About from './routes/About';
import Contact from './routes/Contact';
import Resume from './routes/Resume';

import { init } from '../actions';

class App extends Component {
  static propTypes = {
    onInitApp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onInitApp } = this.props;

    onInitApp();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Grid className="vcard-container" textAlign="center" verticalAlign="middle">

            <Grid.Column className="vcard-container-menu" only="computer">
              <NavigateMenu />
            </Grid.Column>

            <Grid.Column computer={4} mobile={10} tablet={10}>
              <MainInformation />
            </Grid.Column>

            <Grid.Column width={6} only="computer">
              <Segment className="vcard-main-content">
                <Scrollbars
                  autoHide
                  renderView={props => <div {...props} className="scrollbar-view" />}
                >

                  <Route exact path="/" component={About} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/contact" component={Contact} />

                </Scrollbars>
              </Segment>
            </Grid.Column>

          </Grid>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  onInitApp: bindActionCreators(init, dispatch),
});

export default connect(null, mapDispatchProps)(App);
