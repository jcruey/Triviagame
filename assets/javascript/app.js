

    //Start Document and Set Basic Variables.

    $(document).ready(function() {

    //question and array
    var game = {
        correct: 0,
        incorrect: 0,
        askedQuestions: 0,
        number: 30,
        answerTime: 15,
    
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
          counter = setInterval(game.countdown, 1000);
        },

     countdown: function(){
          game.number--;
          document.getElementById('time').innerHTML = (game.number)
          if (game.number === 0){
            game.stop();
            game.results();
          }
        },

    //Stop Timer
     stop: function(){
          clearInterval(counter);
        },


  



    // Choose a random question from the array.
     chooseQuestion: function() {
        $('.question').html(game.questions[game.askedQuestions].question);
        $('.answers').html("<li><button id='selection1'>" + game.questions[game.askedQuestions].answer1 + "</button></li>");
        $('.answers').append("<li><button id='selection2'>" + game.questions[game.askedQuestions].answer2 + "</button></li>");
        $('.answers').append("<li><button id='selection3'>" + game.questions[game.askedQuestions].correctAnswer + "</button></li>");
    },

    //Show answer
     answerDelay: function(){
          counter = setInterval(game.delay, 1000);
        },

     delay: function(){
          game.answerTime--;
          document.getElementById('time').innerHTML = (answerTime)
          if (answerTime === 0){
            game.stop();
            game.number=30;
            game.chooseQuestion();
            game.run();
          }
        },

    // Results
     results: function() {
        $('.question').hide();
        $('.answers').hide();
        $('.results').html("<p>Correct Answers: " + game.correct + "</p><br>" + "<p>Incorrect Answers: " + game.incorrect + 
            "</p>")
    }
    }
  // Start Game Function
    $('.start').click(function() {
        game.run();
        game.chooseQuestion();
        $('.start').hide();
    })
    // onclick function for buttons and answer logic.
    $('.answers').on('click', 'button', function() {
       var choice = $(this).text();
       console.log(choice);
       console.log(game.questions[game.askedQuestions].correctAnswer);
       if(choice == game.questions[game.askedQuestions].correctAnswer) {
        game.correct ++;
       } else {
        game.incorrect ++;
        game.stop();
        game.answerDelay();
        $('.answers').empty();
        $('.answers').html("<p>Nope! The correct answer was: " + game.questions[game.askedQuestions].correctAnswer + "</p>");
       };
       game.askedQuestions ++;


    //Game Finishes.
       if(game.askedQuestions == game.questions.length) {
            game.stop();
            $('#time').html("<h3>Game Over</h3>");
            game.results();
       } 
       else {
        game.stop();
        game.number=30;
        game.chooseQuestion();
        game.run();
        }
    })
});

    












