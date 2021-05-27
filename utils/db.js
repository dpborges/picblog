
/* This function executes a query to obtain a count. For example select * from tablex where ....
   For now I am just creating a boilerplate for an async function but using it return size of an array.
   Later I can plug a actual database call. 
*/
export async function getDbCount(dbquery) {

  return new Promise (
    function resolver(resolve, reject) {

      !dbquery && reject("Parameter was undefined");

      resolve(dbquery.length); /* dbquery in this case is an array */
    }
  )
}