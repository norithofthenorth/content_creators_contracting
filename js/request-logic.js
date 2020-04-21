// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

//PARAMETERS 
//extension - the output of the getContentType function. it's a string of the file type.
//filename - supplied file name. a parameter of getContentType function.

//FUNCTIONS
//getContentType - this function takes a file and strips the name leaving just the file type as a string
//showContentType - this function logs the file type as a string in the console
//extension - this is the supplied function with REGEX to take a file name and strip the file type out as a string






function getContentType(filename) {
  
filename = "readme.html"
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  return extension
  function showContentType(extension) {
    if (extension === 'text/html') {
      console.log('It\'s html');
    } else if (extension === "text/css") {
      console.log('It is CSS');
    } else {
      console.log('Not sure. Keep trying.')
    }
  }
showContentType(extension);

}
getContentType(filename);



