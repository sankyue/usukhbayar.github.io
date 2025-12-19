// 1. Асуулт болон Хариултуудын өгөгдөл
const questions = [
    'Biggest Mammal?', 
    'Fastest vehicle?', 
    'Capital of Mongolia?', 
    'King of the Jungle?',
    'Planet we live on?'
];

const answers = [
    'WHALE', 
    'JET', 
    'ULAANBAATAR', 
    'LION',
    'EARTH'
];

// Хувьсагчууд
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

// Canvas тохиргоо
const canvas = document.getElementById('hangman');
const ctx = canvas.getContext('2d');

// Тоглоом эхлүүлэх функц
function startGame() {
    // Хувьсагчдыг цэвэрлэх
    mistakes = 0;
    guessed = [];
    document.getElementById('message').innerText = "";
    
    // Canvas цэвэрлэх
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Санамсаргүй асуулт сонгох
    const randomIndex = Math.floor(Math.random() * questions.length);
    answer = answers[randomIndex];
    document.getElementById('questionDisplay').innerText = questions[randomIndex];

    // Гарыг үүсгэх
    generateKeyboard();
    
    // Үгийг дэлгэцэнд харуулах (_ _ _ хэлбэрээр)
    guessWord();
}

// Дэлгэц дээр товчлууруудыг үүсгэх (A-Z)
function generateKeyboard() {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button
            class="key-btn"
            id='${letter}'
            onClick="handleGuess('${letter}')"
        >
            ${letter}
        </button>
        `
    ).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

// Тоглогч үсэг таах үед ажиллах функц
function handleGuess(chosenLetter) {
    // Сонгосон үсгийг disabled болгох
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        // Зөв таасан бол
        guessWord();
        checkIfGameWon();
    } else {
        // Буруу таасан бол
        mistakes++;
        drawHangman();
        checkIfGameLost();
    }
}

// Нууц үгийг шинэчлэн харуулах
function guessWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordDisplay').innerHTML = wordStatus;
}

// Хожсон эсэхийг шалгах
function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('message').innerText = 'Та хожлоо!!!';
        document.getElementById('message').style.color = '#2ecc71';
        document.getElementById('keyboard').innerHTML = ''; // Гарыг алга болгох
    }
}

// Хожигдсон эсэхийг шалгах
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordDisplay').innerHTML = answer; // Хариуг харуулах
        document.getElementById('message').innerText = 'Та хожигдлоо!!!';
        document.getElementById('message').style.color = '#e74c3c';
        document.getElementById('keyboard').innerHTML = '';
    }
}

// Дүүжлүүр зурах функц
function drawHangman() {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#2c3e50";

    switch (mistakes) {
        case 1: // Суурь болон шон
            ctx.beginPath();
            ctx.moveTo(10, 240); ctx.lineTo(150, 240); // Газар
            ctx.moveTo(30, 240); ctx.lineTo(30, 20);   // Босоо шон
            ctx.lineTo(100, 20);                       // Хэвтээ шон
            ctx.lineTo(100, 50);                       // Уяа
            ctx.stroke();
            break;
        case 2: // Толгой
            ctx.beginPath();
            ctx.arc(100, 70, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 3: // Бие
            ctx.beginPath();
            ctx.moveTo(100, 90); ctx.lineTo(100, 170);
            ctx.stroke();
            break;
        case 4: // Зүүн гар
            ctx.beginPath();
            ctx.moveTo(100, 100); ctx.lineTo(70, 130);
            ctx.stroke();
            break;
        case 5: // Баруун гар
            ctx.beginPath();
            ctx.moveTo(100, 100); ctx.lineTo(130, 130);
            ctx.stroke();
            break;
        case 6: // Хоёр хөл (Төгсгөл)
            ctx.beginPath();
            ctx.moveTo(100, 170); ctx.lineTo(70, 210); // Зүүн хөл
            ctx.moveTo(100, 170); ctx.lineTo(130, 210); // Баруун хөл
            ctx.stroke();
            break;
    }
}

// Хуудас ачаалахад тоглоомыг эхлүүлэх
startGame();