
var fileToUpload = $('#fileUploader').files;

var onDrop = function(e) {
  filesToUpload = e.dataTransfer.files;
};

var handleFiles = function(files) {
  var file = files[0];
  var image = $('img');
  var reader = new FileReader();
  image.width = 200;
  image.height = 200;
  reader.onload = function(e) {
    image.attr('src', e.target.result)
  };

  reader.readAsDataURL(file);

};

$('document').ready(function() {
  $('#fileSelect').on('click', function(e) {
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