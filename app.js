
function updateCaseNumber(product, price, bool) {

    const caseInput = document.getElementById(product + "-number");

    if (bool == true) {
        caseInput.value = parseFloat(caseInput.value) + 1;

    }
    else {
        if (caseInput.value > 0) {
            caseInput.value = parseFloat(caseInput.value) - 1;
        }

    }

    const phoneInput = document.getElementById(product + "-price");

    phoneInput.innerText = caseInput.value * price;

    calculateTotall();

}




function getinputValue(product) {
    const productInput = parseInt(document.getElementById(product + "-number").value);
    return productInput;

}


function calculateTotall() {

    const phoneTotall = getinputValue("phone") * 1219;
    const caseTotall = getinputValue("case") * 59;

    const subTotall = phoneTotall + caseTotall;
    document.getElementById("sub-totall").innerText = subTotall;

    document.getElementById("tax-amount").innerText = (subTotall * 2) / 100;

    document.getElementById("totll").innerText = subTotall + ((subTotall * 2) / 100);





}

// phone===================================
document.getElementById("phone-plus").addEventListener('click', function () {

    updateCaseNumber("phone", 1219, true);


});

document.getElementById("phone-minus").addEventListener('click', function () {

    updateCaseNumber("phone", 1219, false);

});

// =======================================
document.getElementById("case-plus").addEventListener('click', function () {

    updateCaseNumber("case", 59, true);


});

document.getElementById("case-minus").addEventListener('click', function () {

    updateCaseNumber("case", 59, false);

});