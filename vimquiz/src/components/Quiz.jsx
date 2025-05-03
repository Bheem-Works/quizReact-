import React, { useState } from 'react'
import Result from './Result';

//  storing the questions;
const questionsBank = [
    {
        question: 'Who is the singer of "Shape of You"?',
        options: ['Ed Sheeran', 'Justin Bieber', 'Ariana Grande', 'Eminem'],
        answer: 'Ed Sheeran'
    },
    {
        question: 'Which artist is known as the "King of Pop"?',
        options: ['Elvis Presley', 'Michael Jackson', 'Drake', 'Usher'],
        answer: 'Michael Jackson'
    },
    {
        question: 'Which band released the song "Bohemian Rhapsody"?',
        options: ['Queen', 'The Beatles', 'Nirvana', 'Linkin Park'],
        answer: 'Queen'
    },
    {
        question: 'Who is known for the hit track "Blinding Lights"?',
        options: ['The Weeknd', 'Zayn', 'Bruno Mars', 'Post Malone'],
        answer: 'The Weeknd'
    }
];

function Quiz() {
    const intialAnswer  = [null,null,null,null] // Why ? becasue there are the four answer and the answer will be the null at first when user clikc then the answer will be store; 
    const [userAnswer,setUserAnswer] = useState(intialAnswer); // why? when the user click the intial null become clicked value;
    const [currentQuestion,setCurrentQuestion] = useState(0); // why ? to pass the current question index 
    const selectedAnswer = userAnswer[currentQuestion]; // why ? to see if the user don't clikc it will not turn able to next buttons;
    const [isQuizfinished,setIsQuizFinished] = useState(false); // why ? if the user is in the last page of the quiz and if they finish the quiz; 

    function handleSelectedOptions (option) { // why ? to see which options is selected 
        const newUserAnswer = [...userAnswer]; // why ? copying by using the thread operator to pass to the new users;
        newUserAnswer[currentQuestion] = option; // if the user select some value then it should be like [value,null,null,null];
        setUserAnswer(newUserAnswer); // passing the user answer options;
    }

    
    function goToNext () {
        // when the user completed the  question and  reach at the end question  4 === 4 then set it true; 
        // why ? if it is true then it will pass it to the if statement
        if( currentQuestion === questionsBank.length-1) { 
            setIsQuizFinished(true); 
        } else {
            setCurrentQuestion(currentQuestion + 1); 
        }
        }

    function goToPrevious () {
        setCurrentQuestion(currentQuestion -1);
    }

    // if the is quizFinishes is true if they the user completed quiz then show the result Ui or then don't show;
    if(isQuizfinished) {
        return <Result />
    } else {

        return(
            <div>
            <h2>Question {currentQuestion + 1 } </h2>  {/* why? when the user page load to the next  the current question will also be added from 1; */}
            <p>{questionsBank[currentQuestion].question}</p>
            {questionsBank[currentQuestion].options.map((option,index) => (
                <button key= {index} className={"option" +  (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectedOptions(option)}>{option}</button>
            ))}
            <div className='nav-buttons'>
                <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={!selectedAnswer}>{currentQuestion.length === 0 ? "Finish Quiz" : "Next"}</button>
            </div>
        </div>
    )
    
}
}

export default Quiz
