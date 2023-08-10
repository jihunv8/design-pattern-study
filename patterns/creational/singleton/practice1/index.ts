import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Setting from './Setting';

const setting = Setting.getSetting();

setting.setColor('dark').setFontSize(20);

FirstPage();
SecondPage();

setting.setColor('blue').setFontSize(10);

FirstPage();
SecondPage();
