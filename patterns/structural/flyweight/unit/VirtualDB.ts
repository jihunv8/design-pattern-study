interface UnitModelProps {
  name: string;
  hitpoint: number;
  speed: number;
  defaultWeapon: string;
}

const db: { [key: string]: UnitModelProps } = {
  rifleman: { name: 'rifleman', hitpoint: 80, speed: 10, defaultWeapon: 'M1 Garand' },
  tomy: { name: 'tomy', hitpoint: 100, speed: 8, defaultWeapon: 'Lee Enfield' },
  grenadier: { name: 'grenadier', hitpoint: 80, speed: 10, defaultWeapon: 'Kar98k' },
  sherman: { name: 'sherman', hitpoint: 640, speed: 50, defaultWeapon: '75mm tank gun' },
};

const virtualFetch = (key: string) => {
  const data = db[key];
  return data;
};

export default virtualFetch;
