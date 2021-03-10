function compute() {
    var principal = document.getElementById("principal").value;
    //principal validation.
    var isInputValid = true;
    if (principal <= 0) {
        //display an alert.
        alert("Enter a positive number");
        //set the focus on principal box.
        document.getElementById("principal").focus();
        document.getElementById("principal").select();
        isInputValid = false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest.
    var interest = principal * years * rate / 100;
    //logic to convert the 'No of Years' into the actual year in the future.
    var currentTime = new Date();
    var newYear = new Date();
    newYear.setFullYear(newYear.getFullYear() + parseInt(years));
    //spanTagStart and spanTagEnd are used to create highlighted span tags.
    spanTagStart = "<span class='numbers'>";
    spanTagEnd = "</span>";
    //display result if principal input is valid.
    if (isInputValid) {
        document.getElementById('result').innerHTML =
            "If you deposit " + spanTagStart + principal + spanTagEnd +
            ", <br> at an interest rate of " + spanTagStart + rate + spanTagEnd +
            "<br> You will receive an amount of " + spanTagStart + interest + " %." + spanTagEnd +
            ", <br> in the year " + spanTagStart + newYear.getFullYear() + spanTagEnd;
    }
}
//function to update rateSpan tag.
function changeRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById('rateSpan').innerHTML = rate + " %";
}
