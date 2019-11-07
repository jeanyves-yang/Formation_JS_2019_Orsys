const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

(async () => {
  try {
    // 1, 2: remove and create dist
    await fs.remove(distPath);
    await fs.mkdir(distPath);

    // 3: build dist/app.js
    // 3:a first method
        //const contentHorloge = await fs.readFile(horlogeJsPath);
    // await fs.appendFile(appJSDistPathMD5, contentHorloge.toString());
    // const contentIndexJS = await fs.readFile(indexJsPath);
    // await fs.appendFile(appJSDistPathMD5, contentIndexJS.toString());

    // 3b: second method
    const content = await Promise.all([
      fs.readFile(horlogeJsPath),
      fs.readFile(indexJsPath),
    ]);
    const contentToWrite = Buffer.concat(content); // faster to manipulate buffers than strings
    const appJSDistPathMD5 = path.resolve(distPath, `${md5(contentToWrite)}.js`);

    // 5-6: minify js and checksum it
    const minifiedJS = UglifyJS.minify(contentToWrite.toString()).code;
    await fs.writeFile(appJSDistPathMD5, minifiedJS);

    // 4: build html
    let contentIndexHTML = await fs.readFile(indexHtmlPath);
    const contentHTMLToWrite = contentIndexHTML
      .toString()
      .replace('./js/horloge.js', path.basename(appJSDistPathMD5))
      .replace('<script src="./js/index.js"></script>', '');
    await fs.appendFile(indexHtmlDistPath, contentHTMLToWrite);
  } catch (err) {
    console.log(err.message);
  }
})();
