/**
 * Created by Albert on 3/13/2016.
 * this will perform insulin initiation calculations.
 */

function calculatestart(myform){
    var basal = 0.2 * Number(myform.weight.value);

    document.write("<h2>Weight based initial insulin dosing</h2>><br>");
    document.write("Based on 0.2*kg, starting basal is: " + basal + " units.<br><br>");
    document.write("Estimated prandial (e.g. aspart/Novolog) dosing based on 2*basal total daily insulin: <br><br>");
    document.write("<h3>carbohydrate ratio 1 unit : " + Math.floor(550/(2*basal)) + " grams carb consumed in meal.<br>");
    document.write("insulin sensitivity: " + Math.floor(1800/(2*basal)) + " units (usually (pt glc - 140/sensitivity) is the ordered formula)</h3>");
    document.write("<br><br>usually, these ratios are rounded to the nearest increment of 5.<br>")
    document.write("<br>Remember, you can use EPIC order set 5172 to help place these orders.");
}


