'use strict';

angular.module('angularApp')

.controller('detailCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Detail = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    $scope.timeObject = $scope.Detail.timeRepo;

    function buildCal(m, y, cM, cH, cDW, cD, brdr){
            console.log('000000');
        var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
        var dim=[31,0,31,30,31,30,31,31,30,31,30,31];

        var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
        oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st

        var todaydate=new Date() //DD added
        var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added

        dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
        var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
        t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
        var s;
        for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
        t+='</tr><tr align="center">';
        for(i=1;i<=42;i++){
        var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
        if (x==scanfortoday) //DD added
        x='<span id="today">'+x+'</span>' //DD added
        t+='<td class="'+cD+'">'+x+'</td>';
        if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
        }
        return t+='</tr></table></div>';
    }

    var themonths=['January','February','March','April','May','June',
    'July','August','September','October','November','December']

    var todaydate=new Date()
    var curmonth=todaydate.getMonth()+1 //get current month (1-12)
    var curyear=todaydate.getFullYear() //get current year

    var dropDown = document.getElementById("calendar-menu");
    var option = dropDown.options[dropDown.selectedIndex];

    console.log('dropDown.selectedIndex outside function ' + dropDown.selectedIndex);

    console.log('1111111');
    $scope.updateCalendar = function(theselection){
        if ( dropDown.selectedIndex > 0 ) {
            console.log('22222');
            console.log('this.options ' + this.options);
            console.log('dropDown.value ' + dropDown.value);
            console.log('dropDown.selectedIndex ' + dropDown.selectedIndex);
            console.log('dropDown.text ' + dropDown.text);
            console.log('dropDown.options ' + dropDown.options);
            console.log('dropDown.options[dropDown.selectedIndex] ' + dropDown.options[dropDown.selectedIndex]);
            console.log('Object.keys(dropDown) ' + Object.keys(dropDown));
            console.dir('$scope.updateCalendar ' + $scope.updateCalendar);
            console.log('$scope.updateCalendar.selectedIndex ' + $scope.updateCalendar.selectedIndex);
            var themonth=parseInt($scope.updateCalendar.selectedIndex);
            var calendarstr=buildCal(themonth, curyear, "main", "month", "daysofweek", "days", 0)
            if (dropDown) {
                var main = document.querySelector('.main:last-of-type');
                main.remove();
                document.getElementById("calendar-space").innerHTML=calendarstr;
            }
        }
    }

    $scope.calendar = '<option value="curmonth-1" selected="yes">Current Month</option>'

    dropDown.innerHTML="<option value='curmonth-1' selected='yes'>Current Month</option>";

    var months = "<option value='+i+'>'+themonths[i]+' '+curyear+'</option>";
    var i;
    for (i=0; i<12; i++) {//display option for 12 months of the year
        var opt = document.createElement('option');
        opt.innerHTML = themonths[i] + curyear;
        var attOne = document.createAttribute('value');
        attOne.value = i;
        dropDown.appendChild(opt);
    }

    document.getElementById("calendar-space").innerHTML=buildCal(curmonth, curyear, "main", "month", "daysofweek", "days", 0);

});
