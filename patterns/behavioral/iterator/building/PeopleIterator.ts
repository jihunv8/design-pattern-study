import { Iterator } from './Iterator';
import Person from './Person';

abstract class PeopleIterator implements Iterator<Person> {
  protected i = 0;
  protected arr: Person[] = [];

  next(): Person {
    const nextPerson = this.arr[this.i++];
    if (nextPerson === undefined) throw new Error('next가 없습니다.');
    return nextPerson;
  }

  hasNext(): boolean {
    return this.i < this.arr.length;
  }
}

export default PeopleIterator;

export class DefaultIterator extends PeopleIterator {
  constructor(people: Person[]) {
    super();
    this.arr = [...people];
  }
}

export class AgeAscendingIterator extends PeopleIterator {
  constructor(people: Person[]) {
    super();
    this.arr = [...people];
    this.arr.sort((a, b) => a.age - b.age);
  }
}

export class NameAscendingIterator extends PeopleIterator {
  constructor(people: Person[]) {
    super();
    this.arr = [...people];
    this.arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
