// Бодлого  1: Тооны цифрүүдийн нийлбэр палимдром эсэхийг шалгах
function checkSumPalindrome(n) {

    let sum = 0;
    let tempStr = n.toString();
    
    for (let char of tempStr) {
        sum += parseInt(char);
    }
    

    let sumStr = sum.toString();
    let reversedSumStr = sumStr.split('').reverse().join('');
    
    if (sumStr === reversedSumStr) {
        console.log(`Тоо: ${n}, Цифрүүдийн нийлбэр: ${sum}. Энэ бол ПАЛИМДРОМ мөн.`);
        return true;
    } else {
        console.log(`Тоо: ${n}, Цифрүүдийн нийлбэр: ${sum}. Энэ бол палимдром БИШ.`);
        return false;
    }
}

// Бодлого 2: Чоно 25 км/ц хурдтай, туулай 18 км/ц хурдтай. Гараас өгсөн зайтай байхад хэдэн минут хэдэн секундын дараа гэхэд гүйцэх вэ?
function timeToCatch(distanceKm) {
    let speedDiff = 25 - 18; 
    

    let timeInHours = distanceKm / speedDiff;
    

    let totalSeconds = timeInHours * 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    console.log(`Чоно туулайг ${minutes} минут ${seconds} секундын дараа гүйцнэ.`);
    return { minutes, seconds };
}

//Бодлого 3: Байшин 9 давхар, 3 орцтой, давхартаа 4 айлтай бол гараас өгсөн тоот нь хэддүгээр орцны хэддүгээр давхарын хэд дэх хаалга вэ

function findApartmentInfo(toot) {
    const davharToo = 9;
    const ortsToo = 3;
    const ailToo = 4;
    const ortsNiiAil = davharToo * ailToo; // 36
    const niitAil = ortsNiiAil * ortsToo;  // 108

    if (toot > niitAil || toot <= 0) {
        console.log("Ийм тоот байхгүй байна.");
        return;
    }

    let orts = Math.floor((toot - 1) / ortsNiiAil) + 1;
    let uldegdel = (toot - 1) % ortsNiiAil;
    let davhar = Math.floor(uldegdel / ailToo) + 1;
    let haalga = (uldegdel % ailToo) + 1;
    console.log(`${toot} тоот нь: ${orts}-р орц, ${davhar}-р давхар, ${haalga} дахь хаалга.`);
}

// Бодлого 4:  Array-д өгөгдсөн 5 тооны хамгийн бага ерөнхий хуваагдагчийг ол

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findArrayLCM(arr) {
    if (arr.length !== 5) {
        console.log("5 ширхэг тоо оруулна уу.");
        return;
    }

 
    let result = arr.reduce((acc, curr) => lcm(acc, curr));
    
    console.log(`Өгөгдсөн тоонууд: [${arr}], ХБЕХ: ${result}`);
    return result;
}

// Бодлого 5: 
function mathByTime(num) {
    const now = new Date();
    const currentHour = now.getHours(); // 
    
    let result;
    
    
    if (currentHour < 18) {
        result = Math.pow(num, 2); 
        console.log(`Одоо өглөө/өдөр байна. ${num}-ийн квадрат: ${result}`);
    } else {
        result = Math.sqrt(num); 
        console.log(`Одоо орой байна. ${num}-ийн язгуур: ${result}`);
    }
    
    return result;
}





