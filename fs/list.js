var fs = require("fs"); 
fs.readdir('fs/lib', function(err, files) { 
 if (err) { 
  throw err; 
 } 
 console.log(files); 
}); 
console.log("Reading Files...");