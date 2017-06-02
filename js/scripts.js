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
      totalCSS += 5;
    } else if (questionOneAnswer === "answerTwo"){
      totalPHP +=1;
      totalJava+=1;
      totalCSS+=1;
      totalCSharp+=1;
    }

    if ($('input:checkbox[name="questionTwo"][value="answerOne"]').is(':checked')) {
      totalPHP += 1;
    }

    if ($('input:checkbox[name="questionTwo"][value="answerTwo"]').is(':checked')) {
      totalJava += 1;
    }

    if ($('input:checkbox[name="questionTwo"][value="answerThree"]').is(':checked')) {
      totalRuby += 1;
    }

    if ($('input:checkbox[name="questionTwo"][value="answerFour"]').is(':checked')) {
      totalCSS += 1;
    }

    if ($('input:checkbox[name="questionTwo"][value="answerFive"]').is(':checked')) {
      totalCSharp += 1;
    }

    // var result = add(number1, number2);
    $(".scoreRuby").text(totalRuby);
    $(".scorePHP").text(totalPHP);
    $(".scoreJava").text(totalJava);
    $(".scoreCSS").text(totalCSS);
    $(".scoreCSharp").text(totalCSharp);
  });
});
