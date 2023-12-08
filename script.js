const myData = document.getElementById("myData");

const coinZero = document.getElementById("coinZero");
const rankZero = document.getElementById("rankZero");
const nameZero = document.getElementById("nameZero");
const priceZero = document.getElementById("priceZero");
const volumeZero = document.getElementById("volumeZero");
const marketCapZero = document.getElementById("marketCapZero");
const fluctuationHourZero = document.getElementById("fluctuationHourZero");
const fluctuationDayZero = document.getElementById("fluctuationDayZero");
const fluctuationWeekZero = document.getElementById("fluctuationWeekZero");

const coinOne = document.getElementById("coinOne");
const rankOne = document.getElementById("rankOne");
const nameOne = document.getElementById("nameOne");
const priceOne = document.getElementById("priceOne");
const volumeOne = document.getElementById("volumeOne");
const marketCapOne = document.getElementById("marketCapOne");
const fluctuationHourOne = document.getElementById("fluctuationHourOne");
const fluctuationDayOne = document.getElementById("fluctuationDayOne");
const fluctuationWeekOne = document.getElementById("fluctuationWeekOne");

const coinTwo = document.getElementById("coinTwo");
const rankTwo = document.getElementById("rankTwo");
const nameTwo = document.getElementById("nameTwo");
const priceTwo = document.getElementById("priceTwo");
const volumeTwo = document.getElementById("volumeTwo");
const marketCapTwo = document.getElementById("marketCapTwo");
const fluctuationHourTwo = document.getElementById("fluctuationHourTwo");
const fluctuationDayTwo = document.getElementById("fluctuationDayTwo");
const fluctuationWeekTwo = document.getElementById("fluctuationWeekTwo");

const coinThree = document.getElementById("coinThree");
const rankThree = document.getElementById("rankThree");
const nameThree = document.getElementById("nameThree");
const priceThree = document.getElementById("priceThree");
const volumeThree = document.getElementById("volumeThree");
const marketCapThree = document.getElementById("marketCapThree");
const fluctuationHourThree = document.getElementById("fluctuationHourThree");
const fluctuationDayThree = document.getElementById("fluctuationDayThree");
const fluctuationWeekThree = document.getElementById("fluctuationWeekThree");

const coinFour = document.getElementById("coinFour");
const rankFour = document.getElementById("rankFour");
const nameFour = document.getElementById("nameFour");
const priceFour = document.getElementById("priceFour");
const volumeFour = document.getElementById("volumeFour");
const marketCapFour = document.getElementById("marketCapFour");
const fluctuationHourFour = document.getElementById("fluctuationHourFour");
const fluctuationDayFour = document.getElementById("fluctuationDayFour");
const fluctuationWeekFour = document.getElementById("fluctuationWeekFour");

const coinFive = document.getElementById("coinFive");
const rankFive = document.getElementById("rankFive");
const nameFive = document.getElementById("nameFive");
const priceFive = document.getElementById("priceFive");
const volumeFive = document.getElementById("volumeFive");
const marketCapFive = document.getElementById("marketCapFive");
const fluctuationHourFive = document.getElementById("fluctuationHourFive");
const fluctuationDayFive = document.getElementById("fluctuationDayFive");
const fluctuationWeekFive = document.getElementById("fluctuationWeekFive");

const coinSix = document.getElementById("coinSix");
const rankSix = document.getElementById("rankSix");
const nameSix = document.getElementById("nameSix");
const priceSix = document.getElementById("priceSix");
const volumeSix = document.getElementById("volumeSix");
const marketCapSix = document.getElementById("marketCapSix");
const fluctuationHourSix = document.getElementById("fluctuationHourSix");
const fluctuationDaySix = document.getElementById("fluctuationDaySix");
const fluctuationWeekSix = document.getElementById("fluctuationWeekSix");

const coinSeven = document.getElementById("coinSeven");
const rankSeven = document.getElementById("rankSeven");
const nameSeven = document.getElementById("nameSeven");
const priceSeven = document.getElementById("priceSeven");
const volumeSeven = document.getElementById("volumeSeven");
const marketCapSeven = document.getElementById("marketCapSeven");
const fluctuationHourSeven = document.getElementById("fluctuationHourSeven");
const fluctuationDaySeven = document.getElementById("fluctuationDaySeven");
const fluctuationWeekSeven = document.getElementById("fluctuationWeekSeven");

const coinEight = document.getElementById("coinEight");
const rankEight = document.getElementById("rankEight");
const nameEight = document.getElementById("nameEight");
const priceEight = document.getElementById("priceEight");
const volumeEight = document.getElementById("volumeEight");
const marketCapEight = document.getElementById("marketCapEight");
const fluctuationHourEight = document.getElementById("fluctuationHourEight");
const fluctuationDayEight = document.getElementById("fluctuationDayEight");
const fluctuationWeekEight = document.getElementById("fluctuationWeekEight");

const coinNine = document.getElementById("coinNine");
const rankNine = document.getElementById("rankNine");
const nameNine = document.getElementById("nameNine");
const priceNine = document.getElementById("priceNine");
const volumeNine = document.getElementById("volumeNine");
const marketCapNine = document.getElementById("marketCapNine");
const fluctuationHourNine = document.getElementById("fluctuationHourNine");
const fluctuationDayNine = document.getElementById("fluctuationDayNine");
const fluctuationWeekNine = document.getElementById("fluctuationWeekNine");

const logoZero = document.getElementById("logoZero");
const logoOne = document.getElementById("logoOne");
const logoTwo = document.getElementById("logoTwo");
const logoThree = document.getElementById("logoThree");
const logoFour = document.getElementById("logoFour");
const logoFive = document.getElementById("logoFive");
const logoSix = document.getElementById("logoSix");
const logoSeven = document.getElementById("logoSeven");
const logoEight = document.getElementById("logoEight");
const logoNine = document.getElementById("logoNine");

const numberOfCoins = document.getElementById("numberOfCoins");
const btcDominance = document.getElementById("btcDominance");
const volumePerDay = document.getElementById("volumePerDay");
const globalMktCap = document.getElementById("globalMktCap");

// Currency conversion API request

let myRate;

const requestExchange = () => {
  var requestURL = " https://economia.awesomeapi.com.br/last/USD-GBP";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var response = request.response;
    myRate = response.USDGBP.ask;
  };
};

requestExchange();

// Global Crypto Function

async function requestCrypto() {
  let urlCryptoGlobal = "https://api.coinpaprika.com/v1/global";

  const response = await fetch(urlCryptoGlobal);

  const cryptoData = await response.json();

  let numberCoins = Intl.NumberFormat("en-GB").format(
    cryptoData.cryptocurrencies_number
  );
  let marketCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(cryptoData.market_cap_usd * myRate);
  let bitDominance = cryptoData.bitcoin_dominance_percentage;
  let volume = Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(
    cryptoData.volume_24h_usd * myRate
  );

  numberOfCoins.textContent = `Coins: ${numberCoins}`;
  globalMktCap.textContent = `Market Cap: £ ${marketCap}`;
  volumePerDay.textContent = `Volume (24h): £ ${volume}`;
  btcDominance.textContent = `BTC Dominance: ${bitDominance}%`;
}

requestCrypto();

// Crypto Coins Data Function

async function requestCoins() {
  console.log(`US$ 1 = £ ${myRate}`);

  let urlCoin = "https://api.coinpaprika.com/v1/ticker";

  const response = await fetch(urlCoin);

  const coinData = await response.json();

  // Coin Zero Data

  let zeroRank = coinData[0].rank;
  let zeroSymbol = coinData[0].symbol;
  let zeroName = coinData[0].name;
  let zeroPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[0].price_usd * myRate);
  let zeroFluctuationHour = coinData[0].percent_change_1h;
  let zeroFluctuationDay = coinData[0].percent_change_24h;
  let zeroFluctuationWeek = coinData[0].percent_change_7d;
  let zeroMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[0].market_cap_usd * myRate);
  let zeroVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[0].volume_24h_usd * myRate);

  rankZero.textContent = zeroRank;
  nameZero.textContent = `${zeroName} (${zeroSymbol})`;
  priceZero.textContent = `£ ${zeroPrice}`;
  volumeZero.textContent = `£ ${zeroVolume}`;
  marketCapZero.textContent = `£ ${zeroMarkCap}`;
  fluctuationHourZero.textContent = `${zeroFluctuationHour} %`;
  fluctuationDayZero.textContent = `${zeroFluctuationDay} %`;
  fluctuationWeekZero.textContent = `${zeroFluctuationWeek} %`;

  if (zeroFluctuationHour > 0) {
    fluctuationHourZero.style.color = "#39c08a";
  } else {
    fluctuationHourZero.style.color = "#c03939";
  }

  if (zeroFluctuationHour === "") {
    fluctuationHourZero.textContent = "0 %";
    fluctuationHourZero.style.color = "#676767";
  }

  if (zeroFluctuationDay > 0) {
    fluctuationDayZero.style.color = "#39c08a";
  } else {
    fluctuationDayZero.style.color = "#c03939";
  }

  if (zeroFluctuationDay === "") {
    fluctuationDayZero.textContent = "0 %";
    fluctuationDayZero.style.color = "#676767";
  }

  if (zeroFluctuationWeek > 0) {
    fluctuationWeekZero.style.color = "#39c08a";
  } else {
    fluctuationWeekZero.style.color = "#c03939";
  }

  if (zeroFluctuationWeek === "") {
    fluctuationWeekZero.textContent = "0 %";
    fluctuationWeekZero.style.color = "#676767";
  }

  async function getLogoZero() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[0].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoZero.src = `${logoData.logo}`;
  }

  getLogoZero();

  // Coin one data

  let oneRank = coinData[1].rank;
  let oneSymbol = coinData[1].symbol;
  let oneName = coinData[1].name;
  let onePrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[1].price_usd * myRate);
  let oneFluctuationHour = coinData[1].percent_change_1h;
  let oneFluctuationDay = coinData[1].percent_change_24h;
  let oneFluctuationWeek = coinData[1].percent_change_7d;
  let oneMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[1].market_cap_usd * myRate);
  let oneVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[1].volume_24h_usd * myRate);

  rankOne.textContent = oneRank;
  nameOne.textContent = `${oneName} (${oneSymbol})`;
  priceOne.textContent = `£ ${onePrice}`;
  volumeOne.textContent = `£ ${oneVolume}`;
  marketCapOne.textContent = `£ ${oneMarkCap}`;
  fluctuationHourOne.textContent = `${oneFluctuationHour} %`;
  fluctuationDayOne.textContent = `${oneFluctuationDay} %`;
  fluctuationWeekOne.textContent = `${oneFluctuationWeek} %`;

  if (oneFluctuationHour > 0) {
    fluctuationHourOne.style.color = "#39c08a";
  } else {
    fluctuationHourOne.style.color = "#c03939";
  }

  if (oneFluctuationHour === "") {
    fluctuationHourOne.textContent = "0 %";
    fluctuationHourOne.style.color = "#676767";
  }

  if (oneFluctuationDay > 0) {
    fluctuationDayOne.style.color = "#39c08a";
  } else {
    fluctuationDayOne.style.color = "#c03939";
  }

  if (oneFluctuationDay === "") {
    fluctuationDayOne.textContent = "0 %";
    fluctuationDayOne.style.color = "#676767";
  }

  if (oneFluctuationWeek > 0) {
    fluctuationWeekOne.style.color = "#39c08a";
  } else {
    fluctuationWeekOne.style.color = "#c03939";
  }

  if (oneFluctuationWeek === "") {
    fluctuationWeekOne.textContent = "0 %";
    fluctuationWeekOne.style.color = "#676767";
  }

  async function getLogoOne() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[1].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoOne.src = `${logoData.logo}`;
  }

  getLogoOne();

  // Coin two data

  let twoRank = coinData[2].rank;
  let twoSymbol = coinData[2].symbol;
  let twoName = coinData[2].name;
  let twoPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[2].price_usd * myRate);
  let twoFluctuationHour = coinData[2].percent_change_1h;
  let twoFluctuationDay = coinData[2].percent_change_24h;
  let twoFluctuationWeek = coinData[2].percent_change_7d;
  let twoMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[2].market_cap_usd * myRate);
  let twoVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[2].volume_24h_usd * myRate);

  rankTwo.textContent = twoRank;
  nameTwo.textContent = `${twoName} (${twoSymbol})`;
  priceTwo.textContent = `£ ${twoPrice}`;
  volumeTwo.textContent = `£ ${twoVolume}`;
  marketCapTwo.textContent = `£ ${twoMarkCap}`;
  fluctuationHourTwo.textContent = `${twoFluctuationHour} %`;
  fluctuationDayTwo.textContent = `${twoFluctuationDay} %`;
  fluctuationWeekTwo.textContent = `${twoFluctuationWeek} %`;

  if (twoFluctuationHour > 0) {
    fluctuationHourTwo.style.color = "#39c08a";
  } else {
    fluctuationHourTwo.style.color = "#c03939";
  }

  if (twoFluctuationHour === "") {
    fluctuationHourTwo.textContent = "0 %";
    fluctuationHourTwo.style.color = "#676767";
  }

  if (twoFluctuationDay > 0) {
    fluctuationDayTwo.style.color = "#39c08a";
  } else {
    fluctuationDayTwo.style.color = "#c03939";
  }

  if (twoFluctuationDay === "") {
    fluctuationDayTwo.textContent = "0 %";
    fluctuationDayTwo.style.color = "#676767";
  }

  if (twoFluctuationWeek > 0) {
    fluctuationWeekTwo.style.color = "#39c08a";
  } else {
    fluctuationWeekTwo.style.color = "#c03939";
  }

  if (twoFluctuationWeek === "") {
    fluctuationWeekTwo.textContent = "0 %";
    fluctuationWeekTwo.style.color = "#676767";
  }

  async function getLogoTwo() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[2].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoTwo.src = `${logoData.logo}`;
  }

  getLogoTwo();

  // Coin three data

  let threeRank = coinData[3].rank;
  let threeSymbol = coinData[3].symbol;
  let threeName = coinData[3].name;
  let threePrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[3].price_usd * myRate);
  let threeFluctuationHour = coinData[3].percent_change_1h;
  let threeFluctuationDay = coinData[3].percent_change_24h;
  let threeFluctuationWeek = coinData[3].percent_change_7d;
  let threeMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[3].market_cap_usd * myRate);
  let threeVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[3].volume_24h_usd * myRate);

  rankThree.textContent = threeRank;
  nameThree.textContent = `${threeName} (${threeSymbol})`;
  priceThree.textContent = `£ ${threePrice}`;
  volumeThree.textContent = `£ ${threeVolume}`;
  marketCapThree.textContent = `£ ${threeMarkCap}`;
  fluctuationHourThree.textContent = `${threeFluctuationHour} %`;
  fluctuationDayThree.textContent = `${threeFluctuationDay} %`;
  fluctuationWeekThree.textContent = `${threeFluctuationWeek} %`;

  if (threeFluctuationHour > 0) {
    fluctuationHourThree.style.color = "#39c08a";
  } else {
    fluctuationHourThree.style.color = "#c03939";
  }

  if (threeFluctuationHour === "") {
    fluctuationHourThree.textContent = "0 %";
    fluctuationHourThree.style.color = "#676767";
  }

  if (threeFluctuationDay > 0) {
    fluctuationDayThree.style.color = "#39c08a";
  } else {
    fluctuationDayThree.style.color = "#c03939";
  }

  if (threeFluctuationDay === "") {
    fluctuationDayThree.textContent = "0 %";
    fluctuationDayThree.style.color = "#676767";
  }

  if (threeFluctuationWeek > 0) {
    fluctuationWeekThree.style.color = "#39c08a";
  } else {
    fluctuationWeekThree.style.color = "#c03939";
  }

  if (threeFluctuationWeek === "") {
    fluctuationWeekThree.textContent = "0 %";
    fluctuationWeekThree.style.color = "#676767";
  }

  async function getLogoThree() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[3].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoThree.src = `${logoData.logo}`;
  }

  getLogoThree();

  // Coin Four data

  let fourRank = coinData[4].rank;
  let fourSymbol = coinData[4].symbol;
  let fourName = coinData[4].name;
  let fourPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[4].price_usd * myRate);
  let fourFluctuationHour = coinData[4].percent_change_1h;
  let fourFluctuationDay = coinData[4].percent_change_24h;
  let fourFluctuationWeek = coinData[4].percent_change_7d;
  let fourMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[4].market_cap_usd * myRate);
  let fourVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[4].volume_24h_usd * myRate);

  rankFour.textContent = fourRank;
  nameFour.textContent = `${fourName} (${fourSymbol})`;
  priceFour.textContent = `£ ${fourPrice}`;
  volumeFour.textContent = `£ ${fourVolume}`;
  marketCapFour.textContent = `£ ${fourMarkCap}`;
  fluctuationHourFour.textContent = `${fourFluctuationHour} %`;
  fluctuationDayFour.textContent = `${fourFluctuationDay} %`;
  fluctuationWeekFour.textContent = `${fourFluctuationWeek} %`;

  if (fourFluctuationHour > 0) {
    fluctuationHourFour.style.color = "#39c08a";
  } else {
    fluctuationHourFour.style.color = "#c03939";
  }

  if (fourFluctuationHour === "") {
    fluctuationHourFour.textContent = "0 %";
    fluctuationHourFour.style.color = "#676767";
  }

  if (fourFluctuationDay > 0) {
    fluctuationDayFour.style.color = "#39c08a";
  } else {
    fluctuationDayFour.style.color = "#c03939";
  }

  if (fourFluctuationDay === "") {
    fluctuationDayFour.textContent = "0 %";
    fluctuationDayFour.style.color = "#676767";
  }

  if (fourFluctuationWeek > 0) {
    fluctuationWeekFour.style.color = "#39c08a";
  } else {
    fluctuationWeekFour.style.color = "#c03939";
  }

  if (fourFluctuationWeek === "") {
    fluctuationWeekFour.textContent = "0 %";
    fluctuationWeekFour.style.color = "#676767";
  }

  async function getLogoFour() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[4].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoFour.src = `${logoData.logo}`;
  }

  getLogoFour();

  // Coin Five data

  let fiveRank = coinData[5].rank;
  let fiveSymbol = coinData[5].symbol;
  let fiveName = coinData[5].name;
  let fivePrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[5].price_usd * myRate);
  let fiveFluctuationHour = coinData[5].percent_change_1h;
  let fiveFluctuationDay = coinData[5].percent_change_24h;
  let fiveFluctuationWeek = coinData[5].percent_change_7d;
  let fiveMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[5].market_cap_usd * myRate);
  let fiveVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[5].volume_24h_usd * myRate);

  rankFive.textContent = fiveRank;
  nameFive.textContent = `${fiveName} (${fiveSymbol})`;
  priceFive.textContent = `£ ${fivePrice}`;
  volumeFive.textContent = `£ ${fiveVolume}`;
  marketCapFive.textContent = `£ ${fiveMarkCap}`;
  fluctuationHourFive.textContent = `${fiveFluctuationHour} %`;
  fluctuationDayFive.textContent = `${fiveFluctuationDay} %`;
  fluctuationWeekFive.textContent = `${fiveFluctuationWeek} %`;

  if (fiveFluctuationHour > 0) {
    fluctuationHourFive.style.color = "#39c08a";
  } else {
    fluctuationHourFive.style.color = "#c03939";
  }

  if (fiveFluctuationHour === "") {
    fluctuationHourFive.textContent = "0 %";
    fluctuationHourFive.style.color = "#676767";
  }

  if (fiveFluctuationDay > 0) {
    fluctuationDayFive.style.color = "#39c08a";
  } else {
    fluctuationDayFive.style.color = "#c03939";
  }

  if (fiveFluctuationDay === "") {
    fluctuationDayFive.textContent = "0 %";
    fluctuationDayFive.style.color = "#676767";
  }

  if (fiveFluctuationWeek > 0) {
    fluctuationWeekFive.style.color = "#39c08a";
  } else {
    fluctuationWeekFive.style.color = "#c03939";
  }

  if (fiveFluctuationWeek === "") {
    fluctuationWeekFive.textContent = "0 %";
    fluctuationWeekFive.style.color = "#676767";
  }

  async function getLogoFive() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[5].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoFive.src = `${logoData.logo}`;
  }

  getLogoFive();

  // Coin Six data

  let sixRank = coinData[6].rank;
  let sixSymbol = coinData[6].symbol;
  let sixName = coinData[6].name;
  let sixPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[6].price_usd * myRate);
  let sixFluctuationHour = coinData[6].percent_change_1h;
  let sixFluctuationDay = coinData[6].percent_change_24h;
  let sixFluctuationWeek = coinData[6].percent_change_7d;
  let sixMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[6].market_cap_usd * myRate);
  let sixVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[6].volume_24h_usd * myRate);

  rankSix.textContent = sixRank;
  nameSix.textContent = `${sixName} (${sixSymbol})`;
  priceSix.textContent = `£ ${sixPrice}`;
  volumeSix.textContent = `£ ${sixVolume}`;
  marketCapSix.textContent = `£ ${sixMarkCap}`;
  fluctuationHourSix.textContent = `${sixFluctuationHour} %`;
  fluctuationDaySix.textContent = `${sixFluctuationDay} %`;
  fluctuationWeekSix.textContent = `${sixFluctuationWeek} %`;

  if (sixFluctuationHour > 0) {
    fluctuationHourSix.style.color = "#39c08a";
  } else {
    fluctuationHourSix.style.color = "#c03939";
  }

  if (sixFluctuationHour === "") {
    fluctuationHourSix.textContent = "0 %";
    fluctuationHourSix.style.color = "#676767";
  }

  if (sixFluctuationDay > 0) {
    fluctuationDaySix.style.color = "#39c08a";
  } else {
    fluctuationDaySix.style.color = "#c03939";
  }

  if (sixFluctuationDay === "") {
    fluctuationDaySix.textContent = "0 %";
    fluctuationDaySix.style.color = "#676767";
  }

  if (sixFluctuationWeek > 0) {
    fluctuationWeekSix.style.color = "#39c08a";
  } else {
    fluctuationWeekSix.style.color = "#c03939";
  }

  if (sixFluctuationWeek === "") {
    fluctuationWeekSix.textContent = "0 %";
    fluctuationWeekSix.style.color = "#676767";
  }

  async function getLogoSix() {
    let urlLogo = `https://api.coinpaprika.com/v1/coins/${coinData[6].id}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoSix.src = `${logoData.logo}`;
  }

  getLogoSix();

  // Coin Seven data

  let sevenRank = coinData[7].rank;
  let sevenSymbol = coinData[7].symbol;
  let sevenName = coinData[7].name;
  let sevenPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[7].price_usd * myRate);
  let sevenFluctuationHour = coinData[7].percent_change_1h;
  let sevenFluctuationDay = coinData[7].percent_change_24h;
  let sevenFluctuationWeek = coinData[7].percent_change_7d;
  let sevenMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[7].market_cap_usd * myRate);
  let sevenVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[7].volume_24h_usd * myRate);

  rankSeven.textContent = sevenRank;
  nameSeven.textContent = `${sevenName} (${sevenSymbol})`;
  priceSeven.textContent = `£ ${sevenPrice}`;
  volumeSeven.textContent = `£ ${sevenVolume}`;
  marketCapSeven.textContent = `£ ${sevenMarkCap}`;
  fluctuationHourSeven.textContent = `${sevenFluctuationHour} %`;
  fluctuationDaySeven.textContent = `${sevenFluctuationDay} %`;
  fluctuationWeekSeven.textContent = `${sevenFluctuationWeek} %`;

  if (sevenFluctuationHour > 0) {
    fluctuationHourSeven.style.color = "#39c08a";
  } else {
    fluctuationHourSeven.style.color = "#c03939";
  }

  if (sevenFluctuationHour === "") {
    fluctuationHourSeven.textContent = "0 %";
    fluctuationHourSeven.style.color = "#676767";
  }

  if (sevenFluctuationDay > 0) {
    fluctuationDaySeven.style.color = "#39c08a";
  } else {
    fluctuationDaySeven.style.color = "#c03939";
  }

  if (sevenFluctuationDay === "") {
    fluctuationDaySeven.textContent = "0 %";
    fluctuationDaySeven.style.color = "#676767";
  }

  if (sevenFluctuationWeek > 0) {
    fluctuationWeekSeven.style.color = "#39c08a";
  } else {
    fluctuationWeekSeven.style.color = "#c03939";
  }

  if (sevenFluctuationWeek === "") {
    fluctuationWeekSeven.textContent = "0 %";
    fluctuationWeekSeven.style.color = "#676767";
  }

  async function getLogoSeven() {
    let sevenNameURL = sevenName.toLowerCase();

    let urlLogo = `https://api.coingecko.com/api/v3/coins/${sevenNameURL}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoSeven.src = `${logoData.image.small}`;
  }

  getLogoSeven();

  // Coin Eight data

  let eightRank = coinData[8].rank;
  let eightSymbol = coinData[8].symbol;
  let eightName = coinData[8].name;
  let eightPrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[8].price_usd * myRate);
  let eightFluctuationHour = coinData[8].percent_change_1h;
  let eightFluctuationDay = coinData[8].percent_change_24h;
  let eightFluctuationWeek = coinData[8].percent_change_7d;
  let eightMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[8].market_cap_usd * myRate);
  let eightVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[8].volume_24h_usd * myRate);

  rankEight.textContent = eightRank;
  nameEight.textContent = `${eightName} (${eightSymbol})`;
  priceEight.textContent = `£ ${eightPrice}`;
  volumeEight.textContent = `£ ${eightVolume}`;
  marketCapEight.textContent = `£ ${eightMarkCap}`;
  fluctuationHourEight.textContent = `${eightFluctuationHour} %`;
  fluctuationDayEight.textContent = `${eightFluctuationDay} %`;
  fluctuationWeekEight.textContent = `${eightFluctuationWeek} %`;

  if (eightFluctuationHour > 0) {
    fluctuationHourEight.style.color = "#39c08a";
  } else {
    fluctuationHourEight.style.color = "#c03939";
  }

  if (eightFluctuationHour === "") {
    fluctuationHourEight.textContent = "0 %";
    fluctuationHourEight.style.color = "#676767";
  }

  if (eightFluctuationDay > 0) {
    fluctuationDayEight.style.color = "#39c08a";
  } else {
    fluctuationDayEight.style.color = "#c03939";
  }

  if (eightFluctuationDay === "") {
    fluctuationDayEight.textContent = "0 %";
    fluctuationDayEight.style.color = "#676767";
  }

  if (eightFluctuationWeek > 0) {
    fluctuationWeekEight.style.color = "#39c08a";
  } else {
    fluctuationWeekEight.style.color = "#c03939";
  }

  if (eightFluctuationWeek === "") {
    fluctuationWeekEight.textContent = "0 %";
    fluctuationWeekEight.style.color = "#676767";
  }

  async function getLogoEight() {
    let eightNameURL = eightName.toLowerCase();

    let urlLogo = `https://api.coingecko.com/api/v3/coins/${eightNameURL}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoEight.src = `${logoData.image.small}`;
  }

  getLogoEight();

  // Coin Nine data

  let nineRank = coinData[9].rank;
  let nineSymbol = coinData[9].symbol;
  let nineName = coinData[9].name;
  let ninePrice = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(coinData[9].price_usd * myRate);
  let nineFluctuationHour = coinData[9].percent_change_1h;
  let nineFluctuationDay = coinData[9].percent_change_24h;
  let nineFluctuationWeek = coinData[9].percent_change_7d;
  let nineMarkCap = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[9].market_cap_usd * myRate);
  let nineVolume = Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 0,
  }).format(coinData[9].volume_24h_usd * myRate);

  rankNine.textContent = nineRank;
  nameNine.textContent = `${nineName} (${nineSymbol})`;
  priceNine.textContent = `£ ${ninePrice}`;
  volumeNine.textContent = `£ ${nineVolume}`;
  marketCapNine.textContent = `£ ${nineMarkCap}`;
  fluctuationHourNine.textContent = `${nineFluctuationHour} %`;
  fluctuationDayNine.textContent = `${nineFluctuationDay} %`;
  fluctuationWeekNine.textContent = `${nineFluctuationWeek} %`;

  if (nineFluctuationHour > 0) {
    fluctuationHourNine.style.color = "#39c08a";
  } else {
    fluctuationHourNine.style.color = "#c03939";
  }

  if (nineFluctuationHour === "") {
    fluctuationHourNine.textContent = "0 %";
    fluctuationHourNine.style.color = "#676767";
  }

  if (nineFluctuationDay > 0) {
    fluctuationDayNine.style.color = "#39c08a";
  } else {
    fluctuationDayNine.style.color = "#c03939";
  }

  if (nineFluctuationDay === "") {
    fluctuationDayNine.textContent = "0 %";
    fluctuationDayNine.style.color = "#676767";
  }

  if (nineFluctuationWeek > 0) {
    fluctuationWeekNine.style.color = "#39c08a";
  } else {
    fluctuationWeekNine.style.color = "#c03939";
  }

  if (nineFluctuationWeek === "") {
    fluctuationWeekNine.textContent = "0 %";
    fluctuationWeekNine.style.color = "#676767";
  }

  async function getLogoNine() {
    let nineNameURL = nineName.toLowerCase();

    let urlLogo = `https://api.coingecko.com/api/v3/coins/${nineNameURL}`;

    const require = await fetch(urlLogo);

    const logoData = await require.json();

    logoNine.src = `${logoData.image.small}`;
  }

  getLogoNine();
}

setTimeout(requestCoins, 200);
