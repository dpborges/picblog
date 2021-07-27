import React from 'react';
import { Transition } from 'react-transition-group';


// This animation component scales some into view on entry and scale it out on exit

export default function CollapsibleSection({trigger, children}) {
  // console.log("trigger: ", trigger)

  return (
    <Transition in={!trigger} timeout={DURATION} >
      {status => {
        {/* console.log(status) */}
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

const DURATION = 325

const defaultStyle = {
  transition: `all ${DURATION}ms ease-in-out`,
}

const transitionStyles = {
  entering: { transform: 'scale(1,1)' },
  entered:  { transform: 'scale(1,1)' },
  exiting:  { transform: 'scale(1,1)' },
  exited:   { transform: 'scale(1,0)' }
}
