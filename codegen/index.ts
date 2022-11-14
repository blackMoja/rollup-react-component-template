import fg from 'fast-glob';

// Fetch all 'codegen.ts';
const codegenFilePaths = fg.sync('./src/**/*.codegen.ts', {
  dot: false,
  onlyFiles: true,
});
console.log('find file paths : ', codegenFilePaths);

// 빌드에 필요한 파일 생성
Promise.all(
  codegenFilePaths.map((filePath) =>
    // Run `default function setup()` of `*.codegen.ts`
    import(`.${filePath}`).then(({ default: codegen }) => {
      codegen();
    }),
  ),
)
  .then(() => {
    console.log('Codegen complete');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
