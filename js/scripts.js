// business logic

var getTrack = function (scoreRuby,scorePHP,scoreJava,scoreCSS,scoreCSharp) {
  var max = Math.max(scoreRuby,scorePHP,scoreJava,scoreCSS,scoreCSharp);
  if (max === scoreRuby) {
    return "Ruby/Rails";
  } else if (max === scorePHP) {
    return "PHP/Drupal";
  } else if (max === scoreJava) {
    return "Java/Android";
  } else if (max === scoreCSS) {
    return "CSS/Design";
  } else if (max === scoreCSharp) {
    return "C\#/.NET";
  }
};

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

    var whatTrack = getTrack(totalRuby,totalPHP,totalJava,totalCSS,totalCSharp);

    alert(whatTrack);

    // var result = add(number1, number2);
    $(".scoreRuby").text(totalRuby);
    $(".scorePHP").text(totalPHP);
    $(".scoreJava").text(totalJava);
    $(".scoreCSS").text(totalCSS);
    $(".scoreCSharp").text(totalCSharp);
    $(".track").text(getTrack(totalRuby,totalPHP,totalJava,totalCSS,totalCSharp));
  });
});
