import Setting from './Setting';

const SecondPage = () => {
  const setting = Setting.getSetting();

  console.log(`Second Page----
  fontSize: ${setting.getFontSize()}
  isDarkMode: ${setting.getIsDarkMode()}`);
};

export default SecondPage;
