import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

class NavigateMenu extends Component {

  static propTypes = {
    activePage: PropTypes.string.isRequired,
  };

  handleItemClick = (e, { name }) => {
    const { onNavigate } = this.props;

    onNavigate(name);
  };

  render() {
    const { activePage } = this.props;

    return (
      <Menu icon='labeled' vertical style={{ height: '600px', width: '95px' }}>
        <Menu.Item
          name='/'
          active={activePage === '/'}
          onClick={this.handleItemClick}
        >
          <Icon name='id card outline'/>
          About
        </Menu.Item>

        <Menu.Item
          name='/resume'
          active={activePage === '/resume'}
          onClick={this.handleItemClick}
        >
          <Icon name='briefcase'/>
          Resume
        </Menu.Item>

        <Menu.Item
          name='/contact'
          active={activePage === '/contact'}
          onClick={this.handleItemClick}
        >
          <Icon name='talk'/>
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}


const mapStateProps = (state) => {
  return {
    activePage: state.router.location.pathname,
  };
};

const mapDispatchProps = (dispatch) => ({
  onNavigate: bindActionCreators(push, dispatch),
});

export default connect(mapStateProps, mapDispatchProps)(NavigateMenu);