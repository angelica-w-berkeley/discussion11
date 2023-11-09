function challenge1() {
    if (document.getElementById("subscribe").checked == true){
        console.log("checked");
        document.querySelector("#emailDiv").style.display = "block";
    }
    else{
        console.log("unchecked");
        document.querySelector("#emailDiv").style.display = "none";
    }
}

function challenge2() {
    if (document.querySelector("#sameAddress").checked == true) {
        console.log("checked");
        let billing = document.getElementById("bill").value;
        document.querySelector("#home").value = billing;
        document.querySelector("#home").disabled = true;
    }
    else {
        document.querySelector("#home").value = "";
        document.querySelector("#home").disabled = false;
    }
}

function challenge3() {
    let standing = document.getElementsByName("standing");
    let grad = document.getElementsByName("gradDate");

    let numStanding = 0;
    let numGrad = 0;
    for (i = 0; i < standing.length; i++) {
        if (standing[i].checked) {
            numStanding++;
        }
    }
    for (j = 0; j < grad.length; j++) {
        if (grad[j].checked) {
            numGrad++;
        }
    }
    console.log("standing" + numStanding);
    console.log("grad" + numGrad);
    if (numStanding != 1 || numGrad != 1) {
        alert("Please answer both questions");
        return false;
    }
    else {
        return true;
    }
}

function challenge4() {
    let name = document.querySelector("#name").value;
    let street = document.querySelector("#addr").value;
}