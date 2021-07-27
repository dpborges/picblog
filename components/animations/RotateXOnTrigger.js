import React from 'react';
import { Transition } from 'react-transition-group';

/**
 * RotateXOnTrigger - is simple animation that causes an object (eg Arrow icon), to point up or down, 
 *                over set DURATION. The animation flips the object 180deg on the x axis when
 *                trigger value changes. Note transform origin was hardcode below to provide
 *                effect of rotating on center. 
 * @param trigger  - boolean value used to trigger animation. Will cause the object to 
 *                   to flip up or down on the x axis, every time the trigger value changes.
 * @param children - is the object you would like to flip
 * 
 * status    - status represents the different stages (appear, enter, leave) that are fired
 *             within the Transition component. You can do a console log to view which of
 *             stages are being fired.
 * DURATION  - is a configurable value (found below component) to ensure that when you change it, 
 *             it is changed in both the Transition component timeout prop and the css transition 
 *             duration value.
 * 
 * Future enhancement: when used with another object and may need to provide transform origin 
 *   as a prop so I can reset hardcode values provided in the inline styles.
 * 
 * For debugging purpose add a console.log(status) before the return statement to transition states
 */
export default function RotateXOnTrigger({trigger, children}) {
  return (
      <Transition in={trigger} timeout={DURATION} >
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
  )
}

// Set the duration for the transform. Make sure that the duration on on the timeout prop
// of the Transition component is same as duration value in css transform. If transforms
// are chained, the value of the Transition timeout parameter should be total time of all
// the events and delays need to complete animation.
let DURATION = 600;

// Below we are using inline styles as per the CSSTransition documented examples. 
// Note same DURATION is reflected in both the transform and the timeout prop for Transition
// component.
const defaultStyle = {
  transition: `transform ${DURATION}ms ease-in-out`
}
const transitionStyles = {
  entering: { transformOrigin: '50% 40%' },
  entered:  { },
  exiting:  { transform: 'rotateX(180deg)', transformOrigin: '50% 40%' },
  exited: { transform: 'rotateX(180deg)', transformOrigin: '50% 40%' }
}






     
