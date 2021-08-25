
// baap er Bank project

function getInputValue(fieldId) {
	const inputField = document.getElementById(fieldId);
	const inputFieldInText = inputField.value;
	const inputValue = parseFloat(inputFieldInText);
	document.getElementById(fieldId).value = "";
	return inputValue;
}

function updateBankAmount(amount, fieldId) {
	const previousValue = getInnerText(fieldId);
	const updateAmount = previousValue + amount;
	// const depositValue = getInnerText('deposit-update');
	// const withDrawValue = getInnerText('withdraw-update');
	// const updateAmount = depositValue - withDrawValue + 1200;
	document.getElementById(fieldId).innerText = updateAmount;
}

function getInnerText(fieldId) {
	const hasTag = document.getElementById(fieldId);
	const valueInText = hasTag.innerText;
	const value = parseFloat(valueInText);
	return value;
}
function updateBankAmountTotal() {
	const depositValue = getInnerText("deposit-update");
	const withDrawValue = getInnerText("withdraw-update");
	const updateAmount = depositValue - withDrawValue + 1200;
	// const previosBanlace = getInnerText("balance-update");
	// let updateBalance;
	// if (isAdding == true) {
	// 	updateBalance = previosBanlace + amount;
	// } else {
	// 	updateBalance = previosBanlace - amount;
	// }
	document.getElementById("balance-update").innerText = updateAmount;
}

document
	.getElementById("deposit-button")
	.addEventListener("click", function () {
		const amount = getInputValue("deposit-value");
		if (amount > 0) {
			const updatedAmount = updateBankAmount(amount, "deposit-update");
			updateBankAmountTotal();
		}
	});
document
	.getElementById("withdraw-button")
	.addEventListener("click", function () {
		const amount = getInputValue("withdraw-value");
		const balance = getInnerText("balance-update");
		if (amount > 0 && amount <= balance) {
			const updatedAmount = updateBankAmount(amount, "withdraw-update");
			updateBankAmountTotal();
		}
	});
