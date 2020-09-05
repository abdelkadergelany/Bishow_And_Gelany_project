function viralAdvertising(n) {
    var days =[];
    var day = new function() {
            this.s = 5;
            this.l = Math.floor(this.s/2);
            this.c = this.l;
        };
    days.push(day)

    //The s, l, c Equations
    var i = 1;

    var shared;
    var liked;    
    var comulative;

    while(i < n){
     shared = days[i-1]["l"]*3;
     liked = Math.floor(shared/2);    
     comulative = days[i-1]["c"]+liked;
        day= {
             s: shared,
             l: liked, 
             c: comulative 
             };
        days.push(day);
        i++;
        }
    var last_c = days[days.length-1]["c"];
console.log(days);
    return last_c;

    }