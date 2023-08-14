class House {
  private _rooms: number = 0;
  private _toilets: number = 0;
  private _windows: number = 0;
  private _floors: number = 0;
  private _hasBalcony: boolean = false;
  private _hasBasement: boolean = false;
  private _hasBackyard: boolean = false;

  get rooms() {
    return this._rooms;
  }

  set rooms(rooms: number) {
    this._rooms = rooms;
  }

  get toilets() {
    return this._toilets;
  }

  set toilets(toilets: number) {
    this._toilets = toilets;
  }

  get windows() {
    return this._windows;
  }

  set windows(windows: number) {
    this._windows = windows;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors: number) {
    this._floors = floors;
  }

  get hasBalcony() {
    return this._hasBalcony;
  }

  set hasBalcony(hasBalcony: boolean) {
    this._hasBalcony = hasBalcony;
  }

  get hasBasement() {
    return this._hasBasement;
  }

  set hasBasement(hasBasement: boolean) {
    this._hasBasement = hasBasement;
  }

  get hasBackyard() {
    return this._hasBackyard;
  }

  set hasBackyard(hasBackyard: boolean) {
    this._hasBackyard = hasBackyard;
  }
}

export default House;
