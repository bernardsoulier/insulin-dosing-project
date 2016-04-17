/**
 * Created by Albert on 3/13/2016.
 * adjusting insulin by 10-20%
 */


function calculateadjust (myform){
    function printratios(tdi){
        return("Basal insulin: "+ Math.floor(0.5 * tdi) + "units.  Carb ratio: " + Math.floor(550/tdi) + "gms carb per unit insulin.  "
            + "Sensitivity: " +Math.floor(1800/tdi));
    }
    var total = Number(myform.tdi.value);
    document.write("Based on current TDI of " +total+ " units insuln, current dosing might be distributed as: <br>" +printratios(total));
    document.write("<br><br>if currently above 140-180 glucose target, consider an increase of:<br>");
    document.write("<h3>+10% TDI -->  " + printratios(total*1.1) + "<br>");
    document.write("+20% TDI -->  "+printratios(total*1.2) + "</h3><br>");
    document.write("-----------------------<br> If glucoses are too low, consider a decrease:<br>");
    document.write("<h3>-20% TDI --> increase "+printratios(total*0.8) + "</h3><br><br>");
    document.write("You can use EPIC order set 5172 to help initiate insulin subQ orders, but during adjustment, changing current orders may make more sense.")
}
