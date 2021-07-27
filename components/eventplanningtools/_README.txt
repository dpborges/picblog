DEPENDENCIES
============================================
> lodash.merge@4.6.2  required for EventPlanningCalculators.js
> yup@0.32.1          required by EventPlanningTools InputForms
> For EventPlanningTools component need to install styled-components@4.2.1
  and add following line 
       "plugins": [["styled-components", { "ssr": true }]] 
  to the .babelrc file.

Component Hierarchy
==========================
pages/resources/event-planning-tools
  ==> EventPlanningCalculators
    ==> EPToolsWidgetContainer
      ==> EventPlanningToolsPage


Review status / Check styling and functionality
==========================================
faq                  (done)
features             (done)
type-of-events       (ip)  /* had trouble centering */
helping-hands        (ip)
contribution-list    (ip)  /* centering was miminmal effort  compared to type of events*/
how-to-create-event  (ip)  
how-to-pitch-in      (ip) 
event-planning-tools (ip)

Convert screen snapshot images to use next Image component
Consider refactoring type-of-events using position=fc or full container
Test each page functionality / links
enable google ads
