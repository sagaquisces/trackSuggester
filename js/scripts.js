// business logic

// user-interface logic

$(document).ready(function() {
  $("form#trackSuggesterForm").submit(function() {
    event.preventDefault();

    var totalRuby=0;
    var totalPHP=0;
    var totalJava=0;
    var totalCSS=0;
    var totalCSharp=0;

    var questionOneAnswer = $("input:radio[name=questionOne]:checked").val();
    if (questionOneAnswer === "answerOne") {
      var totalCSS =+ 5;
      alert("here");
    } else if (questionOneAnswer === "answerTwo"){
      var totalPHP =+1;
      var totalJava=+1;
      var totalCSS=+1;
      var totalCSharp=+1;
    }

    // var result = add(number1, number2);
    $(".scoreRuby").text(totalRuby);
    $(".scorePHP").text(totalPHP);
    $(".scoreJava").text(totalJava);
    $(".scoreCSS").text(totalCSS);
    $(".scoreCSharp").text(totalCSharp);
  });
});
