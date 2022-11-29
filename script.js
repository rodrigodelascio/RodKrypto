const exchangeRate = document.getElementById("exchangeRate")

const myData = document.getElementById("myData")

const coinZero = document.getElementById("coinZero")
const rankZero = document.getElementById("rankZero")
const nameZero = document.getElementById("nameZero")
const priceZero = document.getElementById("priceZero")
const volumeZero = document.getElementById("volumeZero")
const marketCapZero = document.getElementById("marketCapZero")
const fluctuationHourZero = document.getElementById("fluctuationHourZero")
const fluctuationDayZero = document.getElementById("fluctuationDayZero")
const fluctuationWeekZero = document.getElementById("fluctuationWeekZero")

const coinOne = document.getElementById("coinOne")
const rankOne = document.getElementById("rankOne")
const nameOne = document.getElementById("nameOne")
const priceOne = document.getElementById("priceOne")
const volumeOne = document.getElementById("volumeOne")
const marketCapOne = document.getElementById("marketCapOne")
const fluctuationHourOne = document.getElementById("fluctuationHourOne")
const fluctuationDayOne = document.getElementById("fluctuationDayOne")
const fluctuationWeekOne = document.getElementById("fluctuationWeekOne")

const coinTwo = document.getElementById("coinTwo")
const rankTwo = document.getElementById("rankTwo")
const nameTwo = document.getElementById("nameTwo")
const priceTwo = document.getElementById("priceTwo")
const volumeTwo = document.getElementById("volumeTwo")
const marketCapTwo = document.getElementById("marketCapTwo")
const fluctuationHourTwo = document.getElementById("fluctuationHourTwo")
const fluctuationDayTwo = document.getElementById("fluctuationDayTwo")
const fluctuationWeekTwo = document.getElementById("fluctuationWeekTwo")


// Currency conversion API request

let myRate;

const requestExchange = () => {

    var requestURL = 'https://api.exchangerate.host/convert?from=USD&to=GBP';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var response = request.response;

        myRate = response.result        
    }
}

requestExchange()


// Global Crypto Function

async function requestCrypto() {

    let urlCryptoGlobal = "https://api.coinpaprika.com/v1/global"

    const response = await fetch(urlCryptoGlobal)

    const cryptoData = await response.json()

    console.log(cryptoData)

    let numberCoins = cryptoData.cryptocurrencies_number
    let marketCap = cryptoData.market_cap_usd
    let bitDominance = cryptoData.bitcoin_dominance_percentage
    let volume = cryptoData.volume_24h_usd


    console.log(numberCoins, marketCap, bitDominance, volume)

    // console.log(numberCoins, marketCap.toLocaleString(), bitDominance, volume.toLocaleString())

    // console.log(Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(marketCap))

    console.log(Intl.NumberFormat().format(marketCap))
}


// Crypto Coins Data Function

async function requestCoins() {

    console.log(`US$ 1 = £ ${myRate}`)

    let urlCoin = "https://api.coinpaprika.com/v1/ticker"

    const response = await fetch(urlCoin)

    const coinData = await response.json()

    // for (let i = 0; i < 20; i++) {

    //     let zeroRank = coinData[i].rank
    //     let zeroSymbol = coinData[i].symbol
    //     let zeroName = coinData[i].name
    //     let zeroPrice = Intl.NumberFormat().format(coinData[i].price_usd)
    //     let zeroFluctuationHour = coinData[i].percent_change_1h
    //     let zeroFluctuationDay = coinData[i].percent_change_24h
    //     let zeroFluctuationWeek = coinData[i].percent_change_7d
    //     let zeroMarkCap = Intl.NumberFormat().format(coinData[i].market_cap_usd)
    //     let zeroVolume = Intl.NumberFormat().format(coinData[i].volume_24h_usd)

    //     let cryptoCoins = ""

    //     cryptoCoins = `<tr>\n<td>${zeroRank}</td>\n<td>${zeroName}</td>\n<td>${zeroSymbol}</td>\n<td>${zeroPrice}</td>\n<td class="fluct">${zeroFluctuationHour}</td>\n<td class="fluct">${zeroFluctuationDay}</td>\n<td class="fluct">${zeroFluctuationWeek}</td>\n<td>${zeroVolume}</td>\n<td>${zeroMarkCap}</td>\n</tr>`

    //     myData.innerHTML += cryptoCoins


    // Coin Zero Data

    let zeroRank = coinData[0].rank
    let zeroSymbol = coinData[0].symbol
    let zeroName = coinData[0].name
    let zeroPrice = Intl.NumberFormat('en-GB', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(coinData[0].price_usd * myRate)
    let zeroFluctuationHour = coinData[0].percent_change_1h
    let zeroFluctuationDay = coinData[0].percent_change_24h
    let zeroFluctuationWeek = coinData[0].percent_change_7d
    let zeroMarkCap = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(coinData[0].market_cap_usd * myRate)
    let zeroVolume = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(coinData[0].volume_24h_usd * myRate)

    rankZero.textContent = zeroRank
    nameZero.textContent = `${zeroName} (${zeroSymbol})`
    priceZero.textContent = `£ ${zeroPrice}`
    volumeZero.textContent = `£ ${zeroVolume}`
    marketCapZero.textContent = `£ ${zeroMarkCap}`
    fluctuationHourZero.textContent = `${zeroFluctuationHour} %`
    fluctuationDayZero.textContent = `${zeroFluctuationDay} %`
    fluctuationWeekZero.textContent = `${zeroFluctuationWeek} %`

    if (zeroFluctuationHour > 0) {
        fluctuationHourZero.style.color = "#39c08a"
    } else {
        fluctuationHourZero.style.color = "#c03939"
    }

    if (zeroFluctuationDay > 0) {
        fluctuationDayZero.style.color = "#39c08a"
    } else {
        fluctuationDayZero.style.color = "#c03939"
    }

    if (zeroFluctuationWeek > 0) {
        fluctuationWeekZero.style.color = "#39c08a"
    } else {
        fluctuationWeekZero.style.color = "#c03939"
    }


    // Coin one data

    let oneRank = coinData[1].rank
    let oneSymbol = coinData[1].symbol
    let oneName = coinData[1].name
    let onePrice = Intl.NumberFormat('en-GB', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(coinData[1].price_usd * myRate)
    let oneFluctuationHour = coinData[1].percent_change_1h
    let oneFluctuationDay = coinData[1].percent_change_24h
    let oneFluctuationWeek = coinData[1].percent_change_7d
    let oneMarkCap = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(coinData[1].market_cap_usd * myRate)
    let oneVolume = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(coinData[1].volume_24h_usd * myRate)

    rankOne.textContent = oneRank
    nameOne.textContent = `${oneName} (${oneSymbol})`
    priceOne.textContent = `£ ${onePrice}`
    volumeOne.textContent = `£ ${oneVolume}`
    marketCapOne.textContent = `£ ${oneMarkCap}`
    fluctuationHourOne.textContent = `${oneFluctuationHour} %`
    fluctuationDayOne.textContent = `${oneFluctuationDay} %`
    fluctuationWeekOne.textContent = `${oneFluctuationWeek} %`

    if (oneFluctuationHour > 0) {
        fluctuationHourOne.style.color = "#39c08a"
    } else {
        fluctuationHourOne.style.color = "#c03939"
    }

    if (oneFluctuationDay > 0) {
        fluctuationDayOne.style.color = "#39c08a"
    } else {
        fluctuationDayOne.style.color = "#c03939"
    }

    if (oneFluctuationWeek > 0) {
        fluctuationWeekOne.style.color = "#39c08a"
    } else {
        fluctuationWeekOne.style.color = "#c03939"
    }


    // Coin two data

    let twoRank = coinData[2].rank
    let twoSymbol = coinData[2].symbol
    let twoName = coinData[2].name
    let twoPrice = Intl.NumberFormat('en-GB', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(coinData[2].price_usd * myRate)
    let twoFluctuationHour = coinData[2].percent_change_1h
    let twoFluctuationDay = coinData[2].percent_change_24h
    let twoFluctuationWeek = coinData[2].percent_change_7d
    let twoMarkCap = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0}).format(coinData[2].market_cap_usd * myRate)
    let twoVolume = Intl.NumberFormat('en-GB', { maximumFractionDigits: 0}).format(coinData[2].volume_24h_usd * myRate)

    rankTwo.textContent = twoRank
    nameTwo.textContent = `${twoName} (${twoSymbol})`
    priceTwo.textContent = `£ ${twoPrice}`
    volumeTwo.textContent = `£ ${twoVolume}`
    marketCapTwo.textContent = `£ ${twoMarkCap}`
    fluctuationHourTwo.textContent = `${twoFluctuationHour} %`
    fluctuationDayTwo.textContent = `${twoFluctuationDay} %`
    fluctuationWeekTwo.textContent = `${twoFluctuationWeek} %`

    if (twoFluctuationHour > 0) {
        fluctuationHourTwo.style.color = "#39c08a"
    } else {
        fluctuationHourTwo.style.color = "#c03939"
    }

    if (twoFluctuationDay > 0) {
        fluctuationDayTwo.style.color = "#39c08a"
    } else {
        fluctuationDayTwo.style.color = "#c03939"
    }

    if (twoFluctuationWeek > 0) {
        fluctuationWeekTwo.style.color = "#39c08a"
    } else {
        fluctuationWeekTwo.style.color = "#c03939"
    }
}

setTimeout(requestCoins, 200)