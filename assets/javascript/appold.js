

    //Start Document and Set Basic Variables.

    $(document).ready(function() {

         // Start Game Function
            $('.start').click(function() {
                game.chooseQuestion();
                $('.start').hide();
                $('.questions').show();
                $('.answers').show();
            });

     // onclick function for buttons and answer logic.
            // $('.answers').on('click', 'button', function() {
            //     game.choice = $(this).text();
            //     console.log(game.choice);
            // });

    //question and array
    var game = {
        correct: 0,
        incorrect: 0,
        askedQuestions: 0,
        time: 30,
        choice: "",
    
        questions:[{
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
                    correctAnswer: "Monday",
                    answer2: "Friday",
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
                    correctAnswer : "Unicorn",
                    answer2 : "Chollima",
                    },{
                    question : "How many beaches does Australia have?",
                    answer1 : "12,400",
                    correctAnswer : "10,685",
                    answer2 : "6,942",
                    },{
                    question : "A grasshopper can leap ____ times the length of it's body?",
                    answer1 : "10",
                    correctAnswer : "20",
                    answer2 : "36",
                    },{
                    question : "The average iPhone user unlocks their device ___ times per day?",
                    correctAnswer : "80",
                    answer1 : "30",
                    answer2 : "140",
                    }],

    //Start Timer
     run: function (){
        $('#time').html("<p>" + game.time + "</p>");
          game.countdown = setInterval(game.count, 1000);
        },

     count: function(){
          game.time--;
          $('#time').html("<p>" + game.time + "</p>");
          if (game.time <= 0){
            game.stop();
            $('.question').hide()       
            $('.answers').html("<p>Out of Time!</p>");
                $(".results").html("<p>The correct answer was: " + game.questions[game.askedQuestions].correctAnswer + "</p>");
            game.time = 30;

            if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 3000);
                    results();
                }

                else {
                    game.timeout();
                }
          }
        },

    //Stop Timer
     stop: function(){
          clearInterval(game.countdown);
        },

    // Choose a question from the array.
     chooseQuestion: function() {
        $('.question').show();
        $('.answers').show();
        game.run();
        $('.question').html(game.questions[game.askedQuestions].question);
        $('.answers').html("<li><button id='selection1' data-answer='" + game.questions[game.askedQuestions].answer1 + "'>" + game.questions[game.askedQuestions].answer1 + "</button></li>");
        $('.answers').append("<li><button id='selection2' data-answer='" + game.questions[game.askedQuestions].answer2 + "'>" + game.questions[game.askedQuestions].answer2 + "</button></li>");
        $('.answers').append("<li><button id='selection3 data-answer='" + game.questions[game.askedQuestions].correctAnswer + "'>" + game.questions[game.askedQuestions].correctAnswer + "</button></li>");
        $(".answers").click(game.goodGuess);
    },

    timeout: function() {
            var wait = setTimeout(game.chooseQuestion, 3000);

        },

    // Results
     results: function() {
        $('.question').hide();
        $('.answers').hide();
        $('.results').html("<p>Correct Answers: " + game.correct + "</p><br>" + "<p>Incorrect Answers: " + game.incorrect + 
            "</p>")
    },


    goodGuess: function() {
    if (($(this).data("answer")) === game.questions[game.askedQuestions].correctAnswer) {
        game.correct ++;
        game.stop();
        game.askedQuestions++;
        game.time = 30;
       
        if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 3000);
                }

                else {
                    game.timeout();
                }

       } else {
        game.incorrect ++;
        game.stop();
        $('.answers').hide();
        $('.question').hide()
        $('.results').html("<p>Nope! The correct answer was: " + game.questions[game.askedQuestions].correctAnswer + "</p>");
        game.askedQuestions++;
        game.time = 30;
                
                // if statement to check when to go to the end slide
                
                if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 3000);
                }

                else {
                    game.timeout();
                }
            }
       },

    end: function() {

                    game.stop();
                    game.results();
                    // $(".question").html("<p>You did it! Here are your results:</p>");
                    // $(".answers").html("<p>Correct Answers: " + game.correct + "</p>");
                    // $(".answers").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
                    // $(".answers").append("<button id='reset'>Start Over?</button>");

                    // $("#reset").click(game.reset);

                } // End of end function

            }; // end game object


       
      

           
           
});

    












