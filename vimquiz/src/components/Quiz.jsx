import React, { useState } from 'react'

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

//  storing the questions;
function Quiz() {

    const intialAnswer  = [null,null,null,null] 
    const [userAnswer,setUserAnswer] = useState(intialAnswer); 
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswer[currentQuestion];

    function handleSelectedOptions (option) {
        const newUserAnswer = [...userAnswer];
        newUserAnswer[currentQuestion] = option;
        setUserAnswer(newUserAnswer);
    }
    
    function goToNext () {
            setCurrentQuestion(currentQuestion + 1);
        }

    function goToPrevious () {
        setCurrentQuestion(currentQuestion -1);
    }
    return(
            // first step render 
        <div>
            <h2>Question {currentQuestion + 1 } </h2>
            <p>{questionsBank[currentQuestion].question}</p>
            {questionsBank[currentQuestion].options.map((option,index) => (
                <button key={index} className={"option" +  (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectedOptions(option)}>{option}</button>
            ))}

            <div className='nav-buttons'>
                <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={!selectedAnswer}>Next</button>
            </div>
        </div>
    )
   
}

export default Quiz
