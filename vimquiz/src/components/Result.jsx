// passing the function or value throught the props;
function Result({userAnswer,
                questionsBank,
                restartQuiz}) {

    // why ? To check how much answer is correct the user submit
    function getScore ()  {
        let finalScore = 0;  // initial set to the 0; 
        userAnswer.forEach((answer,index)=>{  // used the forEach Methods to go loop through all the options that user Clicked 
            // and try to match with the questionBank[index]; if it matched then increment the finalScore by 1; 
            if(answer===questionsBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    }

    const score = getScore();
    
    return(
        <div>
            <h2>Quiz-Completed</h2>
            <h2>{score}: {questionsBank.length}</h2>
            <button className="restart-button" onClick={restartQuiz}>Restart-Button</button>
        </div>
    )
}

export default Result;