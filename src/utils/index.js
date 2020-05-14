export function shuffle(data = []) {
  let newData = [...data];
  newData.forEach((value, i) => {
    const j = Math.floor(Math.random() * i);
    newData[i] = newData[j];
    newData[j] = value;
  });

  return newData;
}
