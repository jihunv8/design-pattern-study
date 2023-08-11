import SmartHome from './SmartHome';

const smartHome = new SmartHome();

smartHome.arriveHome();

smartHome.setMode('MOVIE');
smartHome.setMode('COMMON');

smartHome.leaveHome();
