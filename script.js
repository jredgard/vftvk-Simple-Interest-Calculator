function compute()
{
    var principal = document.getElementById("principal").value;

    if (principal<=0)               /* a simple if else check to see if the content of principal is valid */
    {
       alert("Enter a positive number")
       document.getElementById("principal").value = "";
       document.getElementById("principal").focus(); 
    }else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * (rate/100);
        var year = new Date().getFullYear()+ parseInt(years);
        var amount = Math.round(interest*100)/100;                  /*rounding the amount to the nearest second decimal since money goes to 0.00 */

        var result = document.getElementById("result").value;
        document.getElementById("result").innerHTML= "If you deposit " + "<mark>" +principal+ "</mark>"+ ",\<br\>at an interest rate of "+ "<mark>" +rate+"</mark>" + "%\<br\>You will receive an amount of "+ "<mark>"+amount+"</mark>" + ",\<br\>in the year " +"<mark>"+year+"</mark>"+"\<br\>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}


        