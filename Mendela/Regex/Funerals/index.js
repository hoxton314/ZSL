const scrape = require('website-scraper');
const fs = require('fs');
const express = require('express')
const rimraf = require("rimraf");
// /(<h4><strong>).*(<\/strong><\/h4><table class=").*("><tbody>).*(<\/tbody><\/table>)*/gm;

rimraf.sync("./funerals");
let options = {
    urls: ['https://zck-krakow.pl/funerals'],
    directory: './funerals',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");


    var htmlFile = fs.readFileSync('X:\\Users\\igork\\Documents\\ZSL\\Mendela\\Regex\\Funerals\\funerals\\index.html', 'utf8');
    htmlFile = htmlFile.match(/(<h4><strong>)(.*?)(<\/strong><\/h4><table class="table table-striped prices-table funerals"><tbody>)(.*?)(<\/tbody><\/table>)/gm)
    //htmlFile = htmlFile[0]
    let sum = ''
    htmlFile.forEach(element => {
        sum += element
    });
    console.log(sum.length)
    fs.writeFileSync('X:\\Users\\igork\\Documents\\ZSL\\Mendela\\Regex\\Funerals\\funerals\\index.html', sum);
}).catch((err) => {
    console.log("An error ocurred", err);
});




const app = express()
const port = 80



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('funerals'))







