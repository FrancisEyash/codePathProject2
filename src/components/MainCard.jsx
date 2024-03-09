import React, { useState } from 'react'
import '../index.css'



const cardData = [
  { question: 'Where is the Eiffel Tower located?', answer: 'France', image: 'src/assets/kiarash-mansouri-KaGWg7sqJV0-unsplash.jpg', difficulty: "easy"},
  { question: 'In which country can you find the Great Barrier Reef?', answer: 'Australia', image:'src/assets/amber-weir-ul0hbKwlRf4-unsplash.jpg', difficulty:"hard"},
  { question: 'Which country is home to the Amazon Rainforest?', answer: 'Brazil', image:'src/assets/matheus-camara-da-silva-6MA7HufwJkI-unsplash.jpg', difficulty:"medium"},
  { question: 'In which country is the Sahara Desert mainly found?', answer: 'Algeria', image:'src/assets/engin-akyurt-aZWWcLceqrQ-unsplash.jpg', difficulty: "medium"},
  { question: 'Which country has the city of Venice with its famous canals?', answer: 'Italy', image:'src/assets/michele-bitetto-jf5SQVEKSFw-unsplash.jpg', difficulty:"easy"},
];

const MainCard = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false); // Reset to show question for the new card
  };

  const getCardStyle = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return { backgroundColor: 'rgba(0, 128, 0, 0.7)' };
      case 'medium':
        return { backgroundColor: 'rgba(255, 255, 0, 0.7)' };
      case 'hard':
        return { backgroundColor: 'rgba(255, 0, 0, 0.7)' };
      default:
        return {}; // Default style if no difficulty is provided
    }
  };
  

  return (
    <div className='Main-card'>
      <h2>The World Geography Guru!</h2>
      <h4>How well are you familiar with the worlds geography? Let's test it out!</h4>
      <h3>Number of cards:{cardData.length}</h3>
      <div
        className='FlashCard'
        style={getCardStyle(cardData[currentCardIndex].difficulty)}
        onClick={handleCardClick}
      >
        {!showAnswer ? (
          <div>
            <p>{cardData[currentCardIndex].question}</p>
          </div>
        ) : (
          <div className='Answer'>
            <p>{cardData[currentCardIndex].answer}</p>
            <img src={cardData[currentCardIndex].image} alt="Answer" style={{ marginTop: '10px' }} />
          </div>
        )}
      </div>
      <div className='Buttons'>
        <button className='Button-one'>Button</button>
        <button onClick={handleNextClick}>Button</button>
      </div>
    </div>
  )
}

export default MainCard