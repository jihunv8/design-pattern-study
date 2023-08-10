import Setting from './Setting';

const FirstPage = () => {
  const setting = Setting.getSetting();

  console.log(`in FirstPage: fontSize: ${setting.fontSize}; color: ${setting.color};`);
};

export default FirstPage;
