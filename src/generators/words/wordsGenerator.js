import { words, WORDS_COUNT } from './words';

export function getWords(numberOfWords) {
  const generated = [];

  while (generated.length < numberOfWords) {
    const word = getRandomWord();

    if (!generated.includes(word)) {
      generated.push(word);
    }
  }

  return generated;
}

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS_COUNT);

  return words[randomIndex];
}

export default getWords;
