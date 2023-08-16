import PeopleIterator, { AgeAscendingIterator, DefaultIterator, NameAscendingIterator } from './PeopleIterator';
import Person from './Person';

class Building {
  private peopleInside: Person[] = [];

  add(person: Person) {
    this.peopleInside.push(person);
  }

  getIterater(): PeopleIterator {
    return new DefaultIterator(this.peopleInside);
  }

  getAgeAscendingIterater(): PeopleIterator {
    return new AgeAscendingIterator(this.peopleInside);
  }

  getNameAscendingIterater(): PeopleIterator {
    return new NameAscendingIterator(this.peopleInside);
  }
}

export default Building;
