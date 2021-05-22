import { format } from 'date-fns';

//******************************************************************
// Common Date Formats 
//******************************************************************
export const dayOfMonth = (jsDate) => format(jsDate, 'dd'); /* => 01 - 31 */

export const shortMonthName = (jsDate) => format(jsDate, 'MMM'); /* => Jan, Feb, Mar, etc */
 
export const longMonthName = (jsDate) => format(jsDate, 'MMMM'); /* =>  January, February, March, etc */


//******************************************************************
// Common Date Arithmetic functions
//******************************************************************