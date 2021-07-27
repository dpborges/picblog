import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
// import { mediaQuery } from '../styles/GlobalStyles';
import { setMedia } from '../../styles/CommonStyles';
import { Transition } from 'react-transition-group';
 
// This animation provides effect that content is expanding down on enterand retracting up on exit.
// The following props are mandatory
//   trigger - this is a boolean that triggers the entering and exiting of the transtion
//   expandedHeight - this is an object that specifies min and max height when the section is expanded.
//             The max height is used when you are on mobile (eg anything smaller that tablet) 
//             and min height is used when you are desktop.
//   children - is the JSX you would like to expand and contract.
//
// The TransitionContainer is what implements the media query. Note that even if your max height for 
// your mobile device is larger than desktop, the TranstionContainer will limit the heigh of the desktop
// using the max-height property.
//
export default function ExpandableSection(props) {
  
  let {trigger, children,  expandedHeight} = props;

  const DURATION = 325

  const defaultStyle = {
    transition: `all ${DURATION}ms ease-in-out`,
    height: '0rem',
    opacity: 0,
    zIndex: -1
  }

  const transitionStyles = {
    entering: { transform: 'translateY(0px)', height: `${expandedHeight}`, opacity: 1  },
    entered:  { transform: 'translateY(0px)', height: `${expandedHeight}`, opacity: 1  },
    exiting:  { transform: 'translateY(-30px)' },
    exited:   { transform: 'translateY(-30px)',  height: '0rem', opacity: 0   }
  }

  return (
    <TransitionContainer>
      <Transition in={!trigger} timeout={DURATION} >
        {status => {
          return (
            <div style={{ 
                  ...defaultStyle,
                  ...transitionStyles[status],
                  margin: 0, padding: 0
              }}>
              {children}
            </div>
          )}
        }
      </Transition>       
    </TransitionContainer>
  )
}

const TransitionContainer = styled.div`
  
`;

ExpandableSection.propTypes = {
  expandedHeight: PropTypes.string   // provide number and append units (eg rem or px )
};

ExpandableSection.defaultProps = {
  expandedHeight: '80em'
};

