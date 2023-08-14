import House from './House';

class HouseBuilder {
  private house: House = new House();

  setRooms(rooms: number) {
    this.house.rooms = rooms;
    return this;
  }

  setToilets(toilets: number) {
    this.house.toilets = toilets;
    return this;
  }

  setWindows(windows: number) {
    this.house.windows = windows;
    return this;
  }

  setFloors(floors: number) {
    this.house.floors = floors;
    return this;
  }

  setHasBalcony(hasBalcony: boolean) {
    this.house.hasBalcony = hasBalcony;
    return this;
  }

  setHasBasement(hasBasement: boolean) {
    this.house.hasBasement = hasBasement;
    return this;
  }

  setHasBackyard(hasBackyard: boolean) {
    this.house.hasBackyard = hasBackyard;
    return this;
  }

  build() {
    return this.house;
  }
}

export default HouseBuilder;
