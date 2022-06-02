import * as React from 'react';
import PropTypes from 'prop-types';
import { QontoStepIconRoot } from './styles';

const QontoStepIcon = (props) => {
  const { active, completed, className } = props;
  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  };

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <div className={completed ? 'QontoStepIcon-completedIcon' : active ? 'QontoStepIcon-active' : 'QontoStepIcon-circle'} >
        <span className={'QontoStepIcon-label'}> {icons[String(props.icon)]} </span>
      </div>
    </QontoStepIconRoot>
  );
};

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

export default QontoStepIcon;
