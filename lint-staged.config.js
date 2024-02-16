// eslint-disable-next-line @typescript-eslint/no-var-requires
const escape = require('shell-quote').quote
const isWin = process.platform === 'win32'

// https://github.com/lint-staged/lint-staged/issues/676#issuecomment-593390071
module.exports = {
  './src/**/*.{ts,tsx}': (filenames) => {
    const escapedFileNames = filenames
      // this will wrap all "[" "]" square brackets with another square brackets ([ => [[]) so [...customer].tsx will be processed to [[]...customer[]].tsx
      .map(
        (filename) =>
          `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`,
      )
      .join(' ')
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames.map((f) => `"${f}"`).join(' ')}`,
      `git add ${escapedFileNames}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    const escapedFileNames = filenames
      .map(
        (filename) =>
          `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`,
      )
      .join(' ')
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ]
  },
}
