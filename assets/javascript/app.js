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

        initialize: function(){
            game.shuffle(game.questions);
            game.reset();
            game.pickQuestion();
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

                $("#question").html("<p>Bogus!! You're out of Time!</p>");
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

        shuffle: function(a) {
            var j, x, i;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        },

        pickQuestion: function() {

            game.start();
            $('#start').hide();
            $("#question").html(game.questions[game.askedQuestions].question);
            var firstChoice = "<button class='choice' data-answer='" + game.questions[game.askedQuestions].answer1 + "'>" + game.questions[game.askedQuestions].answer1 + "</button><br>"
            var secondChoice = "<button class='choice' data-answer='" + game.questions[game.askedQuestions].answer2 + "'>" + game.questions[game.askedQuestions].answer2 + "</button><br>"
            var thirdChoice = "<button class='choice' data-answer='" + game.questions[game.askedQuestions].correctAnswer + "'>" + game.questions[game.askedQuestions].correctAnswer + "</button><br>"

            var choicesArray = [firstChoice, secondChoice, thirdChoice];
            // shuffle this array ^^^ using the algorithm you found. Make it a method on this game object
            game.shuffle(choicesArray);

            $('#answers').html(choicesArray.join(''));

            $(".choice").click(game.answerLogic);

        }, 

        timeout: function() {
            var wait = setTimeout(game.pickQuestion, 5000);
        },


        answerLogic: function() {

            if (($(this).data("answer")) == game.questions[game.askedQuestions].correctAnswer) {
                game.correct++;
                game.stop();

                $("#question").html("<p>Correct!</p>");
                game.askedQuestions++;
                game.time = 30;

                if (game.askedQuestions == game.questions.length) {
                    setTimeout(game.end, 5000);
                }

                else {
                    game.timeout();
                }
                

            } 

            else {
                game.incorrect++;
                game.stop();


                $("#question").html("<p>Nope!</p>");
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


        end: function() {

            game.stop();

            $("#question").html("<p>Totally Bodacious you Finished! Here are your results:</p>");
            $("#answers").html("<p>Correct Answers: " + game.correct + "</p>");
            $("#answers").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
            $("#answers").append("<p>Unanswered: " + game.unanswered + "</p>");
            $("#start").show();
            game.reset();

        }

    }; 


    $("#start").click(game.initialize);
    

}); 