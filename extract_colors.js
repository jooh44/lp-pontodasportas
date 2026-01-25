
import ColorThief from 'color-thief';
import path from 'path';

const imgPath = path.resolve('foto-logo.png');

ColorThief.getColor(imgPath)
    .then(color => { console.log('Dominant Color:', color) })
    .catch(err => { console.log(err) });

ColorThief.getPalette(imgPath, 5)
    .then(palette => { console.log('Palette:', palette) })
    .catch(err => { console.log(err) });
