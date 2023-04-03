var btc = document.getElementById('bitcoin');
		var eth = document.getElementById('ethereum');
		var doge = document.getElementById('dogecoin');

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=inr",
			"method": "GET",
			"headers": {}
		}

		$.ajax(settings).done(function (response) {
			btc.innerHTML = response.bitcoin.inr.toLocaleString();
			eth.innerHTML = response.ethereum.inr.toLocaleString();
			doge.innerHTML = response.dogecoin.inr.toLocaleString();
		});