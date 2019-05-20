import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <p class="footer__title">VAUX &copy; 2019. 1-2-3 Working Together Ltd.</p>
        <span className="ml-auto footer__sub-title">Powered by <a href="https://vibenewmedia.co.uk">Vibe New Media, Ltd</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
