import Setting from './Setting';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

console.log();
console.log('프로그램 시작');
console.log();

const setting = Setting.getSetting();
setting.setFontSize(20).setIsDarkMode(true);

FirstPage();
SecondPage();

console.log();
console.log('프로그램 끝');
console.log();
