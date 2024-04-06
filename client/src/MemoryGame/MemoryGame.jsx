import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; // Import your CSS file for styling

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  // Generate a deck of card pairs
  useEffect(() => {
    const symbols = ['🍎', '🍌', '🍒', '🥑', '🍉', '🍇'];
    const deck = symbols.concat(symbols).sort(() => Math.random() - 0.5);
    setCards(deck);
  }, []);

  // Handle card click
  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      setTimeout(() => checkForMatch(newFlippedCards), 1000);
    }
  };

  // Check if flipped cards match
  const checkForMatch = (flippedCards) => {
    const [card1, card2] = flippedCards;
    if (cards[card1] === cards[card2]) {
      setMatchedCards([...matchedCards, card1, card2]);
      setScore(score + 1); // Increase score on match
    } else {
      setScore(Math.max(score - 1, 0)); // Decrease score on mismatch, min score is 0
    }
    setTimeout(() => {
        setFlippedCards([]);
    }, 100);
  };

  // Render cards
  const renderCards = () => {
    return cards.map((symbol, index) => (
      <div
        key={index}
        className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        <span>{flippedCards.includes(index) || matchedCards.includes(index) ? symbol : '❓'}</span>
      </div>
    ));
  };

  // Check if all cards have been matched
  useEffect(() => {
    if (matchedCards.length !==0 && matchedCards.length === cards.length) {
      alert(`Congratulations! You completed the game in ${moves} moves with a score of ${score}.`);
    }
  }, [matchedCards, cards, moves, score]);

  // Reset the game
  const resetGame = () => {
    const symbols = ['🍎', '🍌', '🍒', '🥑', '🍉', '🍇'];
    const deck = symbols.concat(symbols).sort(() => Math.random() - 0.5);
    setCards(deck);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setScore(0);
  };

  return (
    <div className="memory-game-container">
      <h1>Memory Matching Game</h1>
      <div className="score">Score: {score}</div>
      <div className="moves">Moves: {moves}</div>
      <div className="cards-container">{renderCards()}</div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default MemoryGame