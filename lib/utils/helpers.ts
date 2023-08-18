// to potrzebne?
function getRandomElements<T>(array: T[], numberOfElem : number): T[] {
    const randomElements: T[] = [];
  
    while (randomElements.length < numberOfElem) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomElement = array[randomIndex];
  
      if (!randomElements.includes(randomElement)) {
        randomElements.push(randomElement);
      }
    }
  
    return randomElements;
  }







  
export { getRandomElements };