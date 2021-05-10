const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

console.log(cities);

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // 要將變數 wordToMatch 放入正則表達式中 需使用 RegExp(變數, '名稱') 方法 
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

// 將數字轉為千位點的格式
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArr = findMatches(this.value, cities);
    console.log(matchArr);

    const str = matchArr.map(place => {
        // 正規表達式結構 
        //new RegExp(/ab+c/, 'i') // literal notation
        // new RegExp('ab+c', 'i') // constructor
        const regex = new RegExp(this.value, 'gi');
        // 正規表達式,後為 flag 可讓比對功能更強大 g 表 Global search, i 表 Case-insensitive search
        
        // replace()語法 str.replace(regexp|substr, newSubstr|function)
        // replace() 方法會傳回一個新字串，此新字串是透過將原字串與 pattern 比對，以 replacement 取代吻合處而生成
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join(''); // 利用join()將內容連為一個字串
    suggestions.innerHTML = str;
}

// DOM
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// 監聽
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);