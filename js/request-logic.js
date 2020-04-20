// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


filename = "readme.html"

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

  function showContentType(extension) {
    if (extension === 'text/html') {
      console.log('It\'s html');
    } else {
      console.log('no idea');
    }
  }
showContentType(extension);
}
getContentType(filename);



