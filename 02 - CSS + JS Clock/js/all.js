const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');



function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360 + 90);

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360 + 90);

    const hours = now.getHours();
    const hoursDeg = (90 + (hours / 12) * 360 + (minutes / 12 / 60) * 360); // 加入分針所佔的時間，讓時針可以緩慢移動

    // 指針跳頓問題 解法 1. 到達卡頓角度時去掉 css 的 transition 屬性
    if (secondsDeg === 90) secondHand.style.transition = 'all 0s';
    else secondHand.style.transition = 'all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)';

    if (minutesDeg === 90) minuteHand.style.transition = 'all 0s';
    else minuteHand.style.transition = 'all 0.1s cubic-bezier(0.9, 0.54, 0.26, 1.68)';

    // 時針間距過大不做處理
    // if (hourDeg === 116.5) hourHand.style.transition = 'all 0s';
    // else hourHand.style.transition = 'all 3s';

    secondHand.style.transform = `rotate(${ secondsDeg }deg)`;
    minuteHand.style.transform = `rotate(${ minutesDeg }deg)`;
    hourHand.style.transform = `rotate(${ hoursDeg }deg)`;

    console.log(`${hours}:${minutes}:${seconds} - ${hoursDeg}:${minutesDeg}:${secondsDeg}`);
}

// setInterval(setDate, 1000);

// 指針跳頓問題 解法 2. 第一次載入獲取時間資訊後，之後每秒更新角度值

let hours = 0,
    minutes = 0,
    seconds = 0;


let secondsDeg = 0;
let minutesDeg = 0;
let hoursDeg = 0;

function initDate() {
    const now = new Date();

    seconds = now.getSeconds();
    secondsDeg = ((seconds / 60) * 360 + 90);

    minutes = now.getMinutes();
    minutesDeg = ((minutes / 60) * 360 + 90);

    hours = now.getHours();
    hoursDeg = (90 + (hours / 12) * 360 + (minutes / 12 / 60) * 360);
}

function updateDate() {
    initDate();
    secondsDeg += (1 / 60) * 360;
    minutesDeg += ((1 / 60) / 60) * 360;
    hoursDeg += (((1 / 60) / 60) / 12);

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    console.log(`${hours}:${minutes}:${seconds} - ${hoursDeg}:${minutesDeg}:${secondsDeg}`);
}


setInterval(updateDate, 1000);