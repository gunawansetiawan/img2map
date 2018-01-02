var ExifImage = require('exif').ExifImage;
const opn = require('opn')
img = "IMG_20180102_155209.jpg";
try {
    new ExifImage({ image : img }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else{

            // console.log(exifData.gps); // Do something with your data!
            var loc = 'https://www.google.co.id/maps/place/'+
            exifData.gps.GPSLatitude[0]+'%C2%B0'+exifData.gps.GPSLatitude[1]+'\''+exifData.gps.GPSLatitude[2]+'%22S+'+
            exifData.gps.GPSLongitude[0]+'%C2%B0'+exifData.gps.GPSLongitude[1]+'\''+exifData.gps.GPSLongitude[2]+'%22E';

            // https://www.google.co.id/maps/place/6%C2%B053'47.644%22S%20107%C2%B038'22.9815%22E
            console.log(loc);
            
            opn(loc);
            
            // 6°53'47.644"S 107°38'22.9815"E
        }
    });
} catch (error) {
    console.log('Error: ' + error.message);
}