import fs from 'fs';
import path from 'path';

const resolve = (dir: string) => path.resolve(__dirname, dir);
const deleteDist = (str: string) => str.startsWith('./dist/') ? str.slice(7) : str;

const main = () => {
  const source = fs.readFileSync(resolve('package.json')).toString('utf-8');
  const sourceObj = JSON.parse(source);
  
  sourceObj.scripts = undefined;
  sourceObj.devDependencies = undefined;

  sourceObj.main = deleteDist(sourceObj.main);
  sourceObj.module = deleteDist(sourceObj.module);
  sourceObj.browser = deleteDist(sourceObj.browser);
  sourceObj.types = deleteDist(sourceObj.types);
  sourceObj.style = deleteDist(sourceObj.style);

  fs.writeFileSync(resolve('dist/package.json'), Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
  fs.writeFileSync(resolve('dist/version.txt'), Buffer.from(sourceObj.version, 'utf-8'));
};

main();