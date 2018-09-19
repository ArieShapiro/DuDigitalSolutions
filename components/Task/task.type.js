import PropTypes from 'prop-types';

const taskType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  reason: PropTypes.string,
  done: PropTypes.boolean,
  estimatedTime: PropTypes.string,
});

export default taskType;
