let button = document.querySelector("#btn");
let priceSpan = document.querySelector("#price");
let usdButton = document.querySelector("#USD");
let gbpButton = document.querySelector("#GBP");
let eurButton = document.querySelector("#EUR");


button.addEventListener("click", function () {
    console.log("Clicked!!");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        console.log(XHR.readyState);
        if (XHR.readyState == 4 && XHR.status == 200) {
            let parsedData = JSON.parse(XHR.responseText);
            console.log(parsedData.bpi)
            if (usdButton.checked) {
                let usdPrice = parsedData.bpi.USD.rate;
                let usdString = usdPrice.toString();
                let roundedUsdString = usdString.slice(0, (usdString.length - 2))
                priceSpan.textContent = "$" + roundedUsdString;
            }
            else if (gbpButton.checked) {
                let gbpPrice = parsedData.bpi.GBP.rate;
                let gbpString = gbpPrice.toString();
                let roundedGbpString = gbpString.slice(0, (gbpString.length - 2));
                priceSpan.innerHTML = "&#163;" + roundedGbpString;
            }
            else if (eurButton.checked) {
                let eurPrice = parsedData.bpi.EUR.rate;
                let eurString = eurPrice.toString();
                let roundedEurString = eurString.slice(0, (eurString.length - 2));
                priceSpan.innerHTML = "&#8364;" + roundedEurString;
            }
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send()
})






















// var button = document.querySelector("#btn");
// var image = document.querySelector("#photo");
// button.addEventListener("click", function () {
//     //console.log("clicked");
//     var XHR = new XMLHttpRequest();
//     XHR.onreadystatechange = function () {
//         console.log(XHR.readyState);
//         console.log(XHR.status);
//         if (XHR.readyState == 4 && XHR.status == 200) {
//             console.log(XHR.responseText);
//             // the API returns data in JSON
//             var data = JSON.parse(XHR.responseText)
//             //now data is an object
//             console.log(data);
//             // url is the url for our random image
//             var url = data.message;
//             console.log(url);
//             image.src = url
//         }
//     }
//     // 1. .open() initialized the request
//     XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
//     // 2. calling .send()  sends the request to the server 
//     XHR.send();
// })
