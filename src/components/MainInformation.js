import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

class MainInformation extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Segment style={{ height: '600px' }}>
        <Grid textAlign='center'>
          <Grid.Row>
            <Grid.Column style={{ paddingTop: '30px' }}>
              <Image style={{ width: '250px' }}
                     src='https://avatars3.githubusercontent.com/u/20017500?s=460&v=4'
                     size='medium' avatar bordered/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>
                Test
                <Header.Subheader>
                  Test
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              Test
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button circular color='facebook' icon='facebook'/>
              <Button circular color='twitter' icon='twitter'/>
              <Button circular color='linkedin' icon='linkedin'/>
              <Button circular color='google plus' icon='google plus'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default MainInformation;