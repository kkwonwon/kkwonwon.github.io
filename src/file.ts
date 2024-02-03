const folderPath = "./photos/";
import fs = require("fs");
import path = require("path");
import EXIF = require("exif-js");
let photos: Array<string> = [];

fs.readdirSync(folderPath).map(folderName => {
    const newPath = path.join(folderPath, folderName);
    // console.log(folderName); // debugging

    fs.readdirSync(newPath).map(fileName => {
        photos.push(path.join(newPath, fileName));
        // console.log(fileName); // debugging
    });
});

window.onload = getExif;

function getExif() {
    photos.map(url => {
        EXIF.getData(url, () => {
            let allMetadata = EXIF.getAllTags(url);
        });
    });
}