import ReactGA from "react-ga"

// Initializes your GA tracking id
export const GAinit = () => {
  ReactGA.initialize("UA-151608223-1")
}
 
// When called, logs the current page view 
export const GAlogPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

// When called, logs an event. You must provide the event category and the event action
export const GAlogEvent = (category, action) => {
    ReactGA.event({
        category,
        action
    });
}