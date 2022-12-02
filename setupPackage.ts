import fs from 'fs';
import path from 'path';

const resolve = (dir: string) => path.resolve(__dirname, dir);
const main = () => {
  const source = fs.readFileSync(resolve('package.json')).toString('utf-8');
  const sourceObj = JSON.parse(source);

  fs.writeFileSync(
    resolve('dist/version.txt'),
    Buffer.from(sourceObj.version, 'utf-8'),
  );
};

main();
