import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (<h2 className="title">{text.toUpperCase()}</h2>);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
