import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';

class MainInformation extends Component {
  static propTypes = {
    about: PropTypes.object.isRequired,
  };

  renderSocialContacts = () => {
    const { socials } = this.props.about;

    return (socials.map((item, index) => {
      return (
        <Button
          as="a"
          target="_blank"
          key={`social${index}`}
          href={item.src}
          color={item.color}
          icon={item.icon}
          circular
        />
      );
    }));
  };

  render() {
    const { avatar, name, position, shortDescription } = this.props.about;

    return (
      <Segment style={{ height: '600px' }}>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column style={{ paddingTop: '30px' }}>
              <Image
                style={{ width: '250px' }}
                src={avatar}
                size="medium"
                bordered
                avatar
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">
                {name}
                <Header.Subheader>
                  {position}
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {shortDescription}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {this.renderSocialContacts()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateProps = (state) => {
  return {
    about: state.app.profile.about,
  };
};

export default connect(mapStateProps)(MainInformation);
