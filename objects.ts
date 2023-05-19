function checkObj(person: { name: string; age: number; hobbys: { name: string; description: string }[] }): void {
  person.hobbys[0].description;
  console.log(person);
}

checkObj({ name: 'Peter', age: 20, hobbys: [{ name: 'Football', description: 'A sport' }] });

type Coords = { x: number; y: number };

function doubleCoords(coords: Coords): Coords {
  return { x: coords.x, y: coords.y };
}
