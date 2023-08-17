namespace ColorLog {
  export const common = (...str: string[]) => {
    console.log(`\x1b[37m${str.join(' ')}\x1b[0m`);
  };

  export const black = (...str: string[]) => {
    console.log(`\x1b[30m${str.join(' ')}\x1b[0m`);
  };

  export const red = (...str: string[]) => {
    console.log(`\x1b[31m${str.join(' ')}\x1b[0m`);
  };

  export const green = (...str: string[]) => {
    console.log(`\x1b[32m${str.join(' ')}\x1b[0m`);
  };

  export const yellow = (...str: string[]) => {
    console.log(`\x1b[33m${str.join(' ')}\x1b[0m`);
  };

  export const blue = (...str: string[]) => {
    console.log(`\x1b[34m${str.join(' ')}\x1b[0m`);
  };

  export const magenta = (...str: string[]) => {
    console.log(`\x1b[35m${str.join(' ')}\x1b[0m`);
  };

  export const cyan = (...str: string[]) => {
    console.log(`\x1b[36m${str.join(' ')}\x1b[0m`);
  };
}

export default ColorLog;
