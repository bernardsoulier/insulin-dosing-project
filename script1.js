/**
 * Created by Albert Sun on 3/12/2016.
 */


    /*

    needs to find start time, end time, total hours used,
    total insulin given, then divided by hours -> hourly rate -> estimated 24 hour basal need -> -20% for basal dose

    funny - myinsulinarray[i].value gives a string type.

    */


    $('#dosomething').on('click', (function(e) {
        document.write("Calculating ... <br>");
        e.preventDefault();
        var starttime = 9999; //initiated start time at nonsense hour
        var latestrate = 0;
        var total = 0;
        var endtime = 0;
        var i = 0;

        var driprate = 0;

        var $myforminput = $(':input',this);
        $myforminput.each(function(){
            document.write($(this).val())
        });

        $myforminput.each(function () {

            driprate = Number($(this).val());

            document.write("working... check");

            if (driprate == "") {
                total += latestrate;
            } else {
                if (starttime = 9999) {
                    starttime = i;
                    latestrate = driprate;
                    total += latestrate;
                } else if (driprate = 88) {
                    endtime = i;
                    latestrate = 0;
                } else {
                    latestrate = driprate;
                    total += latestrate;
                }
            }
            i += 1;
        });


        var hoursondrip = endtime - starttime;
        var hourlyrate = total / hoursondrip;
        var insulin24 = 24 * hourlyrate;
        var predictedbasal = .8 * insulin24;
        var tdi = predictedbasal + 0.5 * predictedbasal;

        var d = new Date();
        var hrs = Math.floor(24 - d.getHours());

        document.write("<br><br>Total insulin given: " + total + " " + "<br>" + "Start time: " + starttime + "<br>" + "End time: " + endtime + "<br>");
        document.write("Hours on drip: " + hoursondrip + "<br>" + "Estimated average hourly rate: " + hourlyrate + "<br>");
        document.write("Insulin projected for 24 hours based on average rate: " + Math.floor(insulin24) + "<br>");
        document.write("Advised basal dose (80% of above projection): " + Math.floor(predictedbasal) + "<br><br>");

        document.write("Adding 50% of advised basal as prandial gives an estimated total daily insulin: " + Math.floor(tdi) + "<br>");
        document.write("Calculated insulin sensitivity: " + Math.floor(1800 / tdi) + "<br>");
        document.write("Calculated carb ratio: " + Math.floor(550 / tdi) + "<br><br>");
        document.write("Please note that for ease of use, these ratios are often rounded to the nearest multiple of 5.<br><br>");

        document.write("---------------------<br><br>");

        document.write("Hours from now to midnight are about: " + hrs + "<br>");
        document.write("Please set IV drip and current glucose check orders to expire in " + hrs + " hours.<br><br>");
        document.write("In EPIC, consider using the IV -> subQ order set (10564) to help place new orders more easily. <br><br>");
    }
    ));


