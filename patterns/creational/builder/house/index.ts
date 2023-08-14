import HouseBuilder from './HouseBuilder';

const house1 = new HouseBuilder()
  .setRooms(4)
  .setToilets(3)
  .setWindows(7)
  .setHasBackyard(true)
  .setHasBalcony(true)
  .build();

const house2 = new HouseBuilder()
  .setRooms(2)
  .setToilets(1)
  .setWindows(4)
  .setHasBackyard(true)
  .setHasBalcony(true)
  .build();

console.log(house1);
console.log(house2);
