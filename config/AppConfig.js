// Environment
const env = 'test';

// URL's for test should start with test- prefix.
const authUrl = "http://localhost:3000";  // This is url used for authentication services
const picUrl  = "http://localhost:4000";  // This is url used for PitchInClub (pic) services

// Used for internal links for CTA and Blog pages, hence reason for using Absolute URL's vs relative urls.
// In addition to defining internal links with absolute url's, its also used  to define a canonical url's
// when there are multiple links pointing to same page (eg. Read more on Home Page)
const siteUrl   = "http://localhost:8080";

// url for blog landing page 
const blogUrl = "http://localhost:8080/blog"

// Function to get parm values
export default (parmName, token) => {
    if (parmName === "env")     return env;
    if (parmName === "authUrl")  return authUrl;
    if (parmName === "picUrl")   return picUrl;
    if (parmName === "siteUrl")  return siteUrl;
    if (parmName === "blogUrl")  return blogUrl;
        
    if (parmName === "axiosConfig")  {
        if (token) {
            return { headers: { 'x-auth': token,  'Content-Type': 'text/plain; charset=utf-8' } }
        } else {
            return { headers: { 'Content-Type': 'text/plain; charset=utf-8'  } }  
        }
    }
    if (parmName === "logkey")  return 'dpb216716';
    if (parmName === "invitationkey")  return '5c539ac6b08b866450dd9664';

     /* site config parms */
     if (parmName === "showAd") return true;
}





