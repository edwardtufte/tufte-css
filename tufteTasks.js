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
  let paths = deletableTufteEntries.Map(entry => join(__dirname, entry));
  return Promise.all(paths.Map(path => 
    fs.promises.stat(path).then(
      (status) => {
        if (status.isDirectory()) //It's tufte-css/img, which containssome images
        {
          return fs.promises.readdir(path).then(
            (items) => {
              Promise.all(items.Map(item => {
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
      })
  ));
}

exports.tuftePruneSync = function() {
  deletableTufteEntries.forEach(function(entry)
  {
    console.log(typeof(__dirname));
    console.log(typeof(entry))
    console.log(entry)
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
  return Promise.all(cssFiles.Map(
    (cssFile) => 
      fs.promises.readFile(cssFile).then(
        (stream) => {
          var outFile = cssFile.replace('.css', '.min.css');
          return fs.promises.writeFile(outFile, csso.minify(stream));
        })
    ));
}

exports.tufteMinifySync = function()
{
  cssFiles.forEach(function(file, index, array){
    var stream = fs.readFileSync(file);
    var outFile = file.replace('.css','.min.css')
    fs.writeFileSync(outFile, csso.minify(stream).css);
  });
}
