




/* customDancerFileHandler
 * ====================
 * Handles the file upload and creation of a custom image dancer.
 */

var customDancerFileHandler = function(files) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var dancer = new CustomImageDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      e.target.result
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  };

  reader.readAsDataURL(files[0]);

};

var customDancerCreator = function(files) {
  var url;
  handleFiles(files[0])
  .then(function(value) {
    console.log(value);
  });
  return;
  
};

$('document').ready(function() {
  $('.customImageDancerButton').on('click', function(e) {
    e.preventDefault();
    $('#fileUploader').click();

  });
  // $('#dropzone').on('dragenter', function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // });
  // $('#dropzone').on('dragover', function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // });
  // $('#dropzone').on('drop', function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   console.dir(e)
  //   handleFiles(e.dataTransfer.files);
  // });
});