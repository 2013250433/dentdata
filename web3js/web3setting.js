		var abiArray = [
	{
		"constant": true,
		"inputs": [],
		"name": "getSecond",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFirst",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "toggle1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getThrid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "toggle3",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "toggle2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "oN",
				"type": "string"
			},
			{
				"name": "cN",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

		if(typeof web3 !== 'undefined'){
			web3 = new Web3(web3.currentProvider);
			console.log(web3.currentProvider);
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io"));
			console.log(web3.currentProvider);
		}
		
		var MyContract = web3.eth.contract(abiArray);
		var address = "0x356534059f5e767a7fc5d5edbdadcc2aa9f7d010";
		const contractInst = MyContract.at(address);
