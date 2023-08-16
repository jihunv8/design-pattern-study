import Building from './Building';
import Person from './Person';

const building = new Building();

building.add(new Person('b', 30, 'jb'));
building.add(new Person('a', 50, 'ja'));
building.add(new Person('d', 40, 'jd'));
building.add(new Person('c', 20, 'jc'));

const iterators = [building.getIterater(), building.getAgeAscendingIterater(), building.getNameAscendingIterater()];

iterators.forEach((iterator, i) => {
  console.log('iterator', i);
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
});
