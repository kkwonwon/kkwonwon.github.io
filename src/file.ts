const folderPath= "./photos/";
import fs = require("fs");
import path = require("path");
import EXIF = require("exif-js");
let photos: Array<string> = [];

fs.readdirSync(folderPath).map(folderName => {
    const newPath = path.join(folderPath, folderName);
    // console.log(folderName);

    fs.readdirSync(newPath).map(fileName => {
        photos.push(path.join(newPath, fileName));
        // console.log(fileName);
    });
});

photos.map(s => {
    console.log(s);
})

