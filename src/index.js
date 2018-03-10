module.exports = function getZerosCount(number, base) {

    var res = deviders(base);
    var baseSimple = res[0];
    var basePow = res[1];

    var numPow = [];

    for (var i = 0; i < baseSimple.length; i++) {
        numPow.push(getBasePowersCount(number, baseSimple[i]));

    }

    var rel = Math.floor(numPow[0] / basePow[0]);
    for (var j = 0; j < basePow.length; j++) {
        rel = Math.min(rel, (Math.floor(numPow[j] / basePow[j])));
    }

    return rel;


    function getBasePowersCount(num, devider) {
        var czero = 0;
        var j = 0;

        for (var i = devider; Math.floor(num / i) >= 1; i = i * devider) {
            czero = czero + Math.floor(num / i);
        }

        return czero;
    }

    function powers(num, devider) {
        var s = devider;
        var i = 1;

        do {
            s = Math.pow(devider, i);
            if (num % s === 0) {
                i++;
            }
            else {
                break
            }

        } while (s <= num)
        return (i - 1);
    }

    function simple(num) {
        var arr = [];
        for (var i = 2; i < num - 1; i++) {
            if (num % i === 0) {
                arr.push(i);
            }
        }
        if (arr.length === 0) {
            return true;
        }
        return false;
    }

    function deviders(num) {
        var arrSimple = [];
        var arrPow = [];
        for (var i = 2; i <= num; i++) {
            if (num % i === 0) {
                if (simple(i)) {
                    arrSimple.push(i);
                }
            }
        }
        for (var j = 0; j < arrSimple.length; j++) {
            arrPow.push(powers(num, arrSimple[j]));

        }

        return [arrSimple, arrPow];

    }


}