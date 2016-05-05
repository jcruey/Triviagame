$(document).ready(function(){

    //game object with question array and game logic

    var game = {

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

        // variable for time

        time: 30,

        
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        askedQuestions: 0,

        // Reset function

        reset: function() {
            game.time = 30;
            game.askedQuestions = 0;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;

            $("#time").html("");
            $("#question").html("");
            $("#answer").html("<button id ='start'>Start</button>")
            $("#start").click(game.pickQuestion);
        },

        start: function() {
            $("#time").html(game.time);
            game.countdown = setInterval(game.count, 1000);

        }, 

        

        count: function() {

            game.time--;

            $("#time").html(game.time);

            if (game.time <= 0) {
                game.unanswered++;
                game.stop();

                $("#question").html("<p>Out of Time!</p>");
                $("#answers").html("<p>The correct answer was: " + game.questions[game.askedQuestions].correctAnswer + "</p>");

                game.askedQuestions++;
                game.time = 30;

                
                if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 5000);
                }

                else {
                    game.timeout();
                }
            }
            

        },

        stop: function() {
            clearInterval(game.countdown);
        },

        pickQuestion: function() {

            game.start();
            $('#start').hide();

            $("#question").html(game.questions[game.askedQuestions].question);

            $("#answers").html("<button class='choice' data-answer='" + game.questions[game.askedQuestions].answer1 + "'>" + game.questions[game.askedQuestions].answer1 + "</button><br>");
            $("#answers").append("<button class='choice' data-answer='" + game.questions[game.askedQuestions].answer2 + "'>" + game.questions[game.askedQuestions].answer2 + "</button><br>");
            $("#answers").append("<button class='choice' data-answer='" + game.questions[game.askedQuestions].correctAnswer + "'>" + game.questions[game.askedQuestions].correctAnswer + "</button><br>");



            $(".choice").click(game.answerLogic);

        }, // End of function to cycle through questions

        // timer for correct answer slide, incorrect answer slide, and time out slide on zero moves to the next part of the array

        timeout: function() {
            var wait = setTimeout(game.pickQuestion, 5000);
        },

        // Determines if the guess is right or wrong

        answerLogic: function() {

            // if statement for onclick buttons to have class correct, say "Correct", have the correct answer, pull image, andcorrect count ++

            if (($(this).data("answer")) === game.questions[game.askedQuestions].correctAnswer) {
                game.correct++;
                game.stop();

                //new Audio("assets/sounds/clap.mp3").play();

                $("#question").html("<p>Correct!</p>");
                
                //$("#answers").html(game.questions[game.askedQuestions].image);

                game.askedQuestions++;
                game.time = 30;

                

                // if statement to check when to go to the end slide
                
                if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 5000);
                }

                else {
                    game.timeout();
                }
                

            } // End of if statment comparing data and correct answer

            // else statemen for onclick buttons to yield you got it wrong and show the right answer page incorrect count ++

            else {
                game.incorrect++;
                game.stop();

                //new Audio("assets/sounds/wrong.wav").play();

                $("#question").html("<p>Nope!</p>");
                $("#answers").html("<p>The correct answer was: " + game.questions[game.askedQuestions].correctAnswer + "</p>");
                //$("#answers").append(game.questions[game.askedQuestions].image);

                game.askedQuestions++;
                game.time = 30;
                
                // if statement to check when to go to the end slide
                
                if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 5000);
                }

                else {
                    game.timeout();
                }

            } 
            

        }, 


        end: function() {

            game.stop();

            $("#question").html("<p>You did it! Here are your results:</p>");
            $("#answers").html("<p>Correct Answers: " + game.correct + "</p>");
            $("#answers").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
            $("#answers").append("<p>Unanswered: " + game.unanswered + "</p>");
            $("#answers").append("<button id='reset'>Start Over?</button>");

            $("#reset").click(game.reset);

        }

    }; 


    $("#start").click(game.pickQuestion);
    

}); 