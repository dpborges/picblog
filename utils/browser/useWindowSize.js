//**************************************************************** */
// This is a react hook that listens to the window resize event.
// The ShowWindowDimensions function will display the current width
// and height of the window.
//**************************************************************** */

// N O T E :   THIS FUNCTION HAS NOT BEEN TEST

/* useLayoutEffect is used instead of useEffect because it waits for render to finish 
   (synchronously) before visually displaying page/component on the screen . Where as
   useEffect runs after render() completes and page is displayed on screen. If useEffect
   causes flicker, switch over to useEffect */ 
import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {

  const [size, setSize] = useState([0, 0]); /* initial size to 0 */

  /* code your side effect here; this is called for every render, but before display*/
  useLayoutEffect(() => {

    /* define function to update size variable each time window size changes */  
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    /* add window resize listener */
    window.addEventListener('resize', updateSize);
    updateSize();

    /* cleanup code (this is is like componentWillUnmount): remove window resize listener*/
    return () => window.removeEventListener('resize', updateSize);
    
  }, []);  /* emtpy array says don't watch for state change but run side effect once, when component mounts.*/

  return size;  /* returns an array with 2 values: width and height */
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return <span>Window size: {width} x {height}</span>;
}


export default useWindowSize;