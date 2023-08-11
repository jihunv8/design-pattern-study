import { MyFile, MyFolder } from './FileSystem';

const root = new MyFolder('root');

const typescriptFolder = new MyFolder('typescript');
typescriptFolder.add(new MyFile('main.ts', 20));
typescriptFolder.add(new MyFile('hello.ts', 30));
typescriptFolder.add(new MyFile('world.ts', 50));
typescriptFolder.add(new MyFile('foo.ts', 10));
typescriptFolder.add(new MyFile('bar.ts', 11));

const imageFolder = new MyFolder('image');
imageFolder.add(new MyFile('main.png', 201));
imageFolder.add(new MyFile('hello.png', 212));
imageFolder.add(new MyFile('world.jpg', 540));
imageFolder.add(new MyFile('foo.svg', 150));
imageFolder.add(new MyFile('bar.svg', 161));

root.add(typescriptFolder);
root.add(imageFolder);

console.log('root: ' + root.getSize());
console.log('typescript: ' + typescriptFolder.getSize());
console.log('image: ' + imageFolder.getSize());

imageFolder.remove();
