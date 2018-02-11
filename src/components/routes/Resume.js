import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image, Header } from 'semantic-ui-react';

class Resume extends Component {
  static propTypes = {
    resume: PropTypes.object.isRequired,
  };

  renderExperience = () => {
    const { experience } = this.props.resume;

    return (experience.map((item, index) => {
      return (
        <Grid.Row key={`education${index}`}>
          <Grid.Column style={{ width: '40%' }} textAlign="center" verticalAlign="middle">
            <Image
              src={item.logo}
              size="tiny"
              centered
            />
            <br />
            <span>{item.position}</span>
            <br />
            <span>{item.period}</span>
          </Grid.Column>
          <Grid.Column style={{ width: '60%' }}>
            <Header>{item.name}</Header>
            <p>{item.description}</p>
          </Grid.Column>
        </Grid.Row>
      );
    }));
  };

  renderEducation = () => {
    const { education } = this.props.resume;

    return (education.map((item, index) => {
      return (
        <Grid.Row key={`education${index}`}>
          <Grid.Column style={{ width: '40%' }} textAlign="center" verticalAlign="middle">
            <Image
              src={item.logo}
              size="tiny"
              centered
            />
            <br />
            <span>{item.period}</span>
          </Grid.Column>
          <Grid.Column style={{ width: '60%' }}>
            <Header>{item.name}</Header>
            <p>{item.description}</p>
          </Grid.Column>
        </Grid.Row>
      );
    }));
  };

  render() {
    return (
      <Grid textAlign="left" style={{ width: '100%', padding: 10 }}>
        <Grid.Row>
          <Grid.Column>
            <Header size="large">Resume</Header>
            <Header size="tiny">Experience</Header>
          </Grid.Column>
        </Grid.Row>
        {this.renderExperience()}

        <Grid.Row>
          <Grid.Column>
            <Header size="tiny">Education</Header>
          </Grid.Column>
        </Grid.Row>
        {this.renderEducation()}

      </Grid>
    );
  }
}

const mapStateProps = (state) => {
  return {
    resume: state.app.profile.resume,
  };
};

export default connect(mapStateProps, null)(Resume);
