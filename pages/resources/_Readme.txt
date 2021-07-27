DEPENDENCIES
> For the How-To pages I needed to install bootstrap 4.1.3
> For EventPlanningTools dependencies, see eventplanningtools folder
> Upgraded to next/js 11 to be able to use the next/script <Script> tag
  so I can load the modernizr script for the resources pages. I had problems 
  trying to make text responsive over the banner image using nextjs Image 
  component in the banner section. I decided that for resource pages I'd use
  the manual webp approach.

RECOMMENDATIONS
When creating Text overlay over the BannerSection of the resources pages,'
I found that using full container (fc), as with contribution list, centering text 
for various devices was easier. Using center (c), as I did with contribution-list,
I found centering the text for various sizes was more difficult.

As far as media queries, I recommend structuring media queries as I've done 
in typeevents.module.scss. First create media queries for positioning text block, 
then copy same media queries for font-sizing using same breakpoints.

Work Status
==========================================
features            (done)
type-of-events      (done)  /* had trouble centering */
event-planning-tools(done)  
helping-hands       (done) converted to Image component
contribution-list   (done) converted to Image componenthas image
how-to-create-event (done) converted to Image component   
how-to-pitch-in     (done)  
do banner related cleanup (not started)

> Convert screen snapshot images to use next Image component
> Test each page functionality / links
> enable google ads



