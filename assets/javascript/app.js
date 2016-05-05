

    //Start Document and Set Basic Variables.

    $(document).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var askedQuestions = 0;
    var number = 30;


    //question and array
    var questions = [
    {
        question: "Pteronophobia is the fear of what?",
        correctAnswer: "Being tickled by feathers",
        answer1: "Being tickled by fingers",
        answer2: "Being tickled by Hair",
    },{
        question: "Saliva has a boiling point ___ times higher than water?",
        answer1: "Two times",
        answer2: "Five times",
        correctAnswer: "Three times",
    },{
        question: "Heart Attacks are most likely to occur on this day of the week?",
        answer1: "Tuesday",
        answer2Answer: "Monday",
        choice2: "Friday",
    },{
        question: "How many Americans are injured by Musical Instruments each year?",
        answer1: "12000",
        answer2:"6000",
        correctAnswer: "8000",
    },{
        question : "How many steps does it take to reach the top of the Eiffel Tower?",
        correctAnswer : "1665",
        answer1 : "1710",
        answer2 : "1980",
    },{
        question : "What is the national animal of Scotland",
        answer1 : "Gyrfalcon",
        answer2Answer : "Unicorn",
        choice2 : "Chollima",
    },{
        question : "How many beaches does Australia have?",
        answer1 : "12,400",
        answer2Answer : "10,685",
        choice2 : "6,942",
    },{
        question : "A grasshopper can leap ____ times the length of it's body?",
        answer1 : "10",
        answer2Answer : "20",
        choice2 : "36",
    },{
        question : "The average iPhone user unlocks their device ___ times per day?",
        correctAnswer : "80",
        answer1 : "30",
        answer2 : "140",
    }];

    //Start Timer
    function run(){
          counter = setInterval(countdown, 1000);
        }

    function countdown(){
          number--
          document.getElementById('time').innerHTML = (number)
          if (number === 0){
            stop();
            results();
          }
        }

    //Stop Timer
    function stop(){
          clearInterval(counter);
        }


    // Start Game Function
    $('.start').click(function() {
        run();
        chooseQuestion();
        $('.start').hide();
    });



    // Choose a random question from the array.
    function chooseQuestion() {
        $('.question').html(questions[askedQuestions].question);
        $('.answers').html("<button class='choice' id='selection'>" + questions[askedQuestions].answer1 + "</button><br>");
        $('.answers').append("<button class='choice' id='selection'>" + questions[askedQuestions].answer2 + "</button><br>");
        $('.answers').append("<button class='choice' id='selection'>" + questions[askedQuestions].correctAnswer + "</button><br>");
    }

    // Results
    function results() {
        $('.question').hide();
        $('.answers').hide();
        $('.results').html("<p>Correct Answers: " + correct + "</p><br>" + "<p>Incorrect Answers: " + incorrect + 
            "</p>")
    }



    // onclick function for buttons and answer logic.
    $('#selection').on('click', function() {
       if($('.choice', '.answers').val() == correctAnswer) {
        correct ++;
       } else {
        incorrect ++;
       }; 
       askedQuestions ++;

    //Game Finishes.
       if(askedQuestions == questions.length) {
            stop();
            $('#time').html("<h3>Game Over</h3>");
            results();
       } 
       else {
       chooseQuestion();
        }
    });




    });






