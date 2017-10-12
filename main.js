
var currentQuestion = 0;
var questionsCorrect = 0;

function prepareToStart(){
	$('.js-starter').click(function(event){
	event.preventDefault();
	$('.js-starter').addClass('hidden');
	$('.js-questionOne').removeClass('hidden');
	$('header h4').addClass('hidden');
	$('.superTitle').css({"margin-top":"50px","margin-bottom":"60px","font-size":"2vw","padding":"0"});

});
}

function checkAnswer(){
	$('.js-answerButton').click(function(event){
	event.preventDefault();
	var userAnswer = $(this).parent().find("input[type='radio']:checked").hasClass('correct');
	if(userAnswer===true){
		displayUserAnswer = 'Correct!';
		$(this).parent().find('.correct').next().addClass('highlight');
	}

	else {
		displayUserAnswer = 'Incorrect!'
		$("input[type='radio']:checked").next().addClass('lowlight');
		$(this).parent().find('.correct').next().addClass('highlight');
	}

	alert(displayUserAnswer);
	showQuestionStatus(userAnswer);
	userAnswer===0;
	$(this).next().removeClass('hidden');
	$(this).remove();
	});
}

function nextQuestion(){
	$('.js-nextButton').click(function(event){
		event.preventDefault();
		$(this).parent().parent().next().children().removeClass('hidden');
		$(this).parent().addClass('hidden');
	});
	
}
	


function showQuestionStatus(result){
	currentQuestion++;
	if (result === true){
		questionsCorrect ++;
	}
	$('.js-questionsAnswered').html(currentQuestion);
	$('.js-currentScore').html(questionsCorrect);
	$('.js-score').removeClass('hidden')
	if (currentQuestion===10){
		$('.js-score').html("<footer class='js-score'><h1>Final Score</h1><br><h3>" + questionsCorrect + " out of " + "10" + "</footer>" + "<br>" + "<form action='index.html'><input class='retake' type='submit' value='Retake the Test'></form>")
	}
}

$(prepareToStart);
$(checkAnswer);
$(nextQuestion);



