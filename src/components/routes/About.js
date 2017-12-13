import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Header, Image } from 'semantic-ui-react';

class About extends Component {
  static propTypes = {
    about: PropTypes.object.isRequired,
  };

  renderAboutMe() {
    const { name, yearBorn, phone, skype, email } = this.props.about;

    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const age = (yearNow - yearBorn) || null;

    return (
      <Grid textAlign="left" style={{ width: '100%', padding: 10 }}>
        <Grid.Row>
          <Grid.Column>
            <Header size="large">About Me</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column style={{ width: '80px' }} textAlign="right">
            <Header size="small">Name :</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header size="tiny">{name}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column style={{ width: '80px' }} textAlign="right">
            <Header size="small">Age :</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header size="tiny">{age}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column style={{ width: '80px' }} textAlign="right">
            <Header size="small">Phone :</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header size="tiny">{phone}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column style={{ width: '80px' }} textAlign="right">
            <Header size="small">Email :</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header size="tiny">{email}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column style={{ width: '80px' }} textAlign="right">
            <Header size="small">Skype :</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header size="tiny">{skype}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  renderSkills() {
    const { skills } = this.props.about;

    return (
      <Grid textAlign="left" style={{ width: '100%', padding: 10 }}>

        <Grid.Row>
          <Grid.Column>
            <Header size="large">Skills</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image.Group size="mini">
              {skills.map((items, index) =>
                <Image key={`skill${index}`} src={items.src} />
              )}
            </Image.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  renderMyServices() {
    const { services } = this.props.about;

    return (
      <Grid textAlign="left" style={{ width: '100%', padding: 10 }}>

        <Grid.Row>
          <Grid.Column>
            <Header size="large">My Services</Header>
          </Grid.Column>
        </Grid.Row>

        {services.map((item, index) => {
          return (
            <Grid.Row key={`service${index}`}>
              <Grid.Column style={{ width: '100%' }}>
                <Header size="medium">{item.title}</Header>
                <Header.Subheader>
                  {item.content}
                </Header.Subheader>
              </Grid.Column>
            </Grid.Row>
          );
        })}
      </Grid>
    );
  }

  render() {
    return (
      <div>
        {this.renderAboutMe()}
        {this.renderSkills()}
        {this.renderMyServices()}
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    about: state.app.profile.about,
  };
};

export default connect(mapStateProps, null)(About);
