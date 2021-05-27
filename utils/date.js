import { format } from 'date-fns';

//******************************************************************
// Common Date Formats 
//******************************************************************
/* note, if the caller of these functions is creating jsDate with new Date("yyyy-mm-dd") you should append a time
   zone like so (eg T10:00:00Z) at the end to treat date as UTC date/time and allow server or browser serve up local time, 
   otherwise, it will return gmt time which may result in dayOfMonth being off 1 by day as you approache end of day
   around 10-11pm */
export const dayOfMonth = (jsDate) => format(jsDate, 'dd'); /* => 01 - 31 */

export const shortMonthName = (jsDate) => format(jsDate, 'MMM'); /* => Jan, Feb, Mar, etc */
 
export const longMonthName = (jsDate) => format(jsDate, 'MMMM'); /* =>  January, February, March, etc */


//******************************************************************
// Common Date Arithmetic functions
//******************************************************************