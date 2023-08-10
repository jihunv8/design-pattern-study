import Setting from './Setting';

const SecondPage = () => {
  const setting = Setting.getSetting();

  console.log(`in SecondPage: fontSize: ${setting.fontSize}; color: ${setting.color};`);
};

export default SecondPage;
