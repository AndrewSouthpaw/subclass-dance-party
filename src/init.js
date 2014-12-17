$(document).ready(function(){
  window.dancers = [];  // Collection of dancers
  window.groupies = 0;  // Collection of groupies

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */


    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);

    
  });


  /* Line up dancers & dancers get down buttons
   * ====================
   * Button handlers to tell dancers to line up or get down.
   */
  $('.lineUpDancersButton').on('click', function(e) {
    dancers.forEach(Dancer.prototype.lineUpDancers.call
                    .bind(Dancer.prototype.lineUpDancers));
    $(this).hide();
    $('.dancersGetDownButton').show();
  });

  $('.dancersGetDownButton').on('click', function(e) {
    dancers.forEach(Dancer.prototype.getDownDancers.call
                    .bind(Dancer.prototype.getDownDancers));
    $(this).hide();
    $('.lineUpDancersButton').show();
  });
});


