var csso = require('csso');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

const fs = require('fs');
const join = require('path').join;

var exports = module.exports = {};

exports.tufteUpdate = function() {
  var execPromise = new Promise(function(resolve, reject) {
    exec("git submodule update --remote", function(err, stdout, stderr)
      {
        console.log("Output: \n" + stdout);
        if(err)
        {
          console.log("Error: \n" + stderr);
        }
        resolve();
      });
  });
  return execPromise;
}

exports.tufteUpdateSync = function() {
  try {
    var output = execSync("git pull");
    console.log("Output: "+output);
  } catch(error) {
    console.log("Error: " + error.stderr);
  }
}

const deletableTufteEntries = [
  'index.html',
  'README.md',
  'LICENSE',
  'img'
];

exports.tuftePrune = function() {
  let paths = deletableTufteEntries.map(entry => join(__dirname, entry));
  return Promise.all(paths.map(path => 
    fs.promises.stat(path).then(
      (status) => {
        if (status.isDirectory()) //It's tufte-css/img, which containssome images
        {
          return fs.promises.readdir(path).then(
            (items) => {
              Promise.all(items.map(item => {
                return fs.promises.unlink(path+'/'+item);
              })).then(() =>
                {
                  return fs.promises.rmdir(path);
                }
              );
            }
          );
        }
        else
        {
          return fs.promises.unlink(path);
        }
      }).catch( // If stat errors, the file is missing and we continue
        () => {}
      )
  ));
}

exports.tuftePruneSync = function() {
  deletableTufteEntries.forEach(function(entry)
  {
    var path = join(__dirname, entry);
    try
    {
      stat = fs.statSync(path);
      if (stat.isDirectory())
      {
        var img_files = fs.readdirSync(path);
        img_files.forEach(function(img)
        {
          fs.unlinkSync(path+'/'+img);
        });
        fs.rmdirSync(path);
      }
      else
      {
        fs.unlinkSync(path);
      }
    }
    catch(error)
    {
    }
  });
}

cssFiles = [
  'latex.css',
  'tufte.css'
];

exports.tufteMinify = function()
{
  let paths = cssFiles.map(file=> join(__dirname,file));
  return Promise.all(paths.map(
    (cssFile) => 
      fs.promises.readFile(cssFile).then(
        (stream) => {
          var outFile = cssFile.replace('.css', '.min.css');
          return fs.promises.writeFile(outFile, csso.minify(stream).css);
        })
    ));
}

exports.tufteMinifySync = function()
{
  cssFiles.forEach(function(file, index, array){
    var path = join(__dirname, file);
    var stream = fs.readFileSync(path);
    var outFile = path.replace('.css','.min.css')
    fs.writeFileSync(outFile, csso.minify(stream).css);
  });
}
