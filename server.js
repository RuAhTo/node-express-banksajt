import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 3000;
const app = express();



// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generera engångslösenord
function generateOTP() {
    // Generera en sexsiffrig numerisk OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

// Din kod här. Skriv dina arrayer

let users = [{id: 1, username: "Joe", password: "hemligt" }]
let idcount = 1


// Din kod här. Skriv dina routes:
app.post('/login', (req, res) => {

        const { username, password } = req.body;
        const user = users.find(user => user.username === username && user.password === password);
    
        if (user) {
            // Här kan du generera en token eller sessions-ID och skicka tillbaka till klienten
            const newSession = {
                token: generateOTP() // Förenklad version, använd JWT eller annan säker metod i produktion
            };
            res.json({ message: 'Login successful', newSession });
        } else {
            res.status(401).json({ message: 'Fel användarnamn eller lösenord' });
        }
});

app.post('/users', async (req,res) => {
    const { username, password } = req.body;
    const newUser = {
        "id": ++idcount,
        "username": username,
        "password": password
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Starta servern
app.listen(port, () => {
    console.log(`Bankens backend körs på http://localhost:${port}`);
});
