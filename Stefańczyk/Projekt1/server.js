const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const fs = require('fs')
const app = express()
var PORT = process.env.PORT || 3000;

var site
var logged = false
var sortWay = 0
user_data = [
    { id: 0, login: 'login', password: 'pass', age: 20, student: 'on', gender: 'male' },
    { id: 1, login: 'login1', password: 'pass', age: 15, student: 'on', gender: 'female' },
    { id: 2, login: 'login2', password: 'pass', age: 17, student: 'off', gender: 'male' },
    { id: 3, login: 'login3', password: 'pass', age: 10, student: 'on', gender: 'female' },
    { id: 4, login: 'login4', password: 'pass', age: 14, student: 'on', gender: 'female' },
    { id: 5, login: 'login5', password: 'pass', age: 12, student: 'off', gender: 'male' },
    { id: 6, login: 'login6', password: 'pass', age: 11, student: 'off', gender: 'female' },
    { id: 7, login: 'login7', password: 'pass', age: 11, student: 'on', gender: 'male' },
]
function showOut() {
    var showOutput;
    showOutput = "<table style='border: 2px solid black; border-collapse: collapse; margin: auto;'>"
    for (i = 0; i < user_data.length; i++) {
        if (user_data[i].student == "on") {
            studentcheck = "<input type='checkbox' checked disabled>"
        } else {
            studentcheck = "<input type='checkbox' disabled>"
        }
        if (user_data[i].gender == "male") {
            gendercheck = "Mężczyzna"
        } else {
            gendercheck = "Kobieta"
        }

        showOutput += "<tr>"
        showOutput += '<td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">id: ' + user_data[i].id + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">user: ' + user_data[i].login + ' - ' + user_data[i].password + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">uczeń: ' + studentcheck + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">wiek: ' + user_data[i].age + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">płeć: ' + gendercheck + '</td>'
        showOutput += "</tr>"
    }
    showOutput += "</table>"

    return showOutput;
}

function genderOut() {
    var genderOutput;
    var genderOutputM;
    var genderOutputF;

    genderOutputM = "<table style='border: 2px solid black; border-collapse: collapse; margin: auto; width: 300px;'>"
    genderOutputF = "<table style='border: 2px solid black; border-collapse: collapse; margin: auto; width: 300px;'>"

    for (i = 0; i < user_data.length; i++) {

        if (user_data[i].gender == "male") {
            gendercheck = "Mężczyzna"
            genderOutputM += "<tr>"
            genderOutputM += '<td style="border: 2px solid black; border-collapse: collapse; padding: 10px;width: 100px;">id: ' + user_data[i].id + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">płeć: ' + gendercheck + '</td>'
            genderOutputM += "</tr>"
        } else {
            gendercheck = "Kobieta"
            genderOutputF += "<tr>"
            genderOutputF += '<td style="border: 2px solid black; border-collapse: collapse; padding: 10px;width: 100px;">id: ' + user_data[i].id + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">płeć: ' + gendercheck + '</td>'
            genderOutputF += "</tr>"
        }


    }
    genderOutputM += "</table>"
    genderOutputF += "</table>"
    genderOutput = genderOutputM + "<br> <br>" + genderOutputF
    return genderOutput;
}
function sortOut(sortWay) {
    if (sortWay == 0) {
        sortTab = user_data.sort((a, b) => a.age - b.age);
    } else {
        sortTab = user_data.sort((a, b) => b.age - a.age);
    }
    showOutput = `<div style='height: 60px; background-color: #993f9f; width: 100%; text-align: center;'><a href='sort' style='padding:30px;font-size:20px;' >Sortuj</a><a href='gender' style='padding:30px;font-size:20px;'>Płeć</a><a href='show' style='padding:30px;font-size:20px;'>Pokaż</a></div><br> <form method='POST' action='/sort' onchange='this.submit()'>\ <input ${sortWay === '0' ? checked = 'checked' : ''} default  type='radio' id='rosnaco' name='sortWay' value='0' /><label for='rosnaco'>rosnaco</label>\<input ${sortWay === '1' ? checked = 'checked' : ''} type='radio' id='malejaco' name='sortWay' value='1' /><label for='malejaco'>malejaco</label>\</form><br />`
    showOutput += "<table style='border: 2px solid black; border-collapse: collapse; margin: auto;'>"
    for (i = 0; i < sortTab.length; i++) {
        showOutput += "<tr>"
        showOutput += '<td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">id: ' + sortTab[i].id + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">user: ' + sortTab[i].login + ' - ' + sortTab[i].password + '</td>' + '</td><td style="border: 2px solid black; border-collapse: collapse; padding: 10px;">wiek: ' + sortTab[i].age + '</td>'
        showOutput += "</tr>"
    }
    showOutput += "</table>"

    return showOutput;

}

app.use(express.static('static'))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'))
})

app.get('/:site', function (req, res) {
    site = req.params.site

    switch (site) {
        case 'index':
        case 'index.html':
            res.sendFile(path.join(__dirname + '/static/index.html'))
            break;

        case 'admin':
        case 'admin.html':
            var data = fs.readFileSync(path.join(__dirname + '/static/pages/admin.html'), 'utf8')
            if (logged) {
                res.send(data
                    .replace('<nav></nav>', "<div id='navadmin'><a href='sort'>Sortuj</a><a href='gender'>Płeć</a><a href='show'>Pokaż</a></div><br>    ")
                    .replace('<h1></h1>', '<h1>admin page</h1>')

                )

            } else { res.send(data.replace('<h1></h1>', '<h1>access denied</h1>')) }
            break;

        case 'sort':
        case 'sort.html':
            if (logged) {
                var sortWay = '0'
                res.send(sortOut(sortWay))
            } else { res.send('<h1>access denied</h1>') }
            break;

        case 'gender':
        case 'gender.html':
            if (logged) {
                res.send("<div style='height: 60px; background-color: #993f9f; width: 100%; text-align: center;'><a href='sort' style='padding:30px;font-size:20px;' >Sortuj</a><a href='gender' style='padding:30px;font-size:20px;'>Płeć</a><a href='show' style='padding:30px;font-size:20px;'>Pokaż</a></div><br>" + genderOut())
            } else { res.send('<h1>access denied</h1>') }
            break;

        case 'show':
        case 'show.html':
            if (logged) {
                res.send("<div style='height: 60px; background-color: #993f9f; width: 100%; text-align: center;'><a href='sort' style='padding:30px;font-size:20px;' >Sortuj</a><a href='gender' style='padding:30px;font-size:20px;'>Płeć</a><a href='show' style='padding:30px;font-size:20px;'>Pokaż</a></div><br> " + showOut())

            } else { res.send('<h1>access denied</h1>') }
            break;

        case 'register':
        case 'register.html':
            res.sendFile(path.join(__dirname + '/static/pages/register.html'))
            break;

        case 'login':
        case 'login.html':
            res.sendFile(path.join(__dirname + '/static/pages/login.html'))
            break;

        default:
            res.send('Podana strona nie istnieje')
            break;
    }
})

app.post('/sort', (req, res) => {
    res.send(sortOut(req.body.sortWay))
    res.end()
})

app.post('/register', (req, res) => {
    var tester = false

    for (let i = 0; i < user_data.length; i++) {

        if (req.body.login == user_data[i].login) {
            tester = false
        } else {
            tester = true
        }

    }

    if (tester) {
        res.send('Witaj ' + req.body.login + '!')
        req.body.id = user_data.length

        if (req.body.student === undefined) {
            req.body.student = 'off'
        } else {
            req.body.student = 'on'
        }

        user_data.push(req.body)
    } else {
        res.send('Użytkownik o podanym loginie już istnieje!')
    }

    res.end()
})

app.post('/login', (req, res) => {
    var tester = false
    var i = 0

    while (true) {
        if (req.body.login === user_data[i].login && req.body.password === user_data[i].password) {
            tester = true
            break
        } else {
            tester = false
            i++
        }
    }

    if (tester) {
        logged = true
        res.redirect('admin');
    } else {
        res.send('Błędny login lub hasło')
    }

    res.end()
})

app.post('/admin', (req, res) => {
    var tester = false

    if (logged) {
        var div = document.getElementById('divID');

        div.innerHTML += 'Extra stuff';
    }


    res.end()
})


app.listen(PORT, function () {
    console.log('Start serwera na porcie: ' + PORT)
})