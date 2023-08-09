import Setting from './Setting';

const FirstPage = () => {
  const setting = Setting.getSetting();

  console.log(`First Page----
  fontSize: ${setting.getFontSize()}
  isDarkMode: ${setting.getIsDarkMode()}
  `);
};

export default FirstPage;
