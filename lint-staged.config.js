// eslint-disable-next-line @typescript-eslint/no-var-requires
const escape = require('shell-quote').quote
const isWin = process.platform === 'win32'

// https://github.com/lint-staged/lint-staged/issues/676#issuecomment-593390071

const scapeFileNames = (filenames) => {
  return filenames.map((filename) => {
    if (filename.includes('@')) return `"${filename}"`
    return isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])
  })
}

module.exports = {
  './src/**/*.{ts,tsx}': (filenames) => {
    // const escapedFileNames = filenames
    // this will wrap all "[" "]" square brackets with another square brackets ([ => [[]) so [...customer].tsx will be processed to [[]...customer[]].tsx
    // .map(
    //   (filename) =>
    //     `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`,
    // )
    // .join(' ')

    const scapedFilenames = scapeFileNames(filenames).join(' ')
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${scapedFilenames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames.map((f) => `"${f}"`).join(' ')}`,
      `git add ${scapedFilenames}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    const scapedFilenames = scapeFileNames(filenames).join(' ')
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${scapedFilenames}`,
      `git add ${scapedFilenames}`,
    ]
  },
}
