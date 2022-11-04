var module1 = new Object({
    _count: 0,
    m1: function () {
        console.log(_count)
    },
    m2: function () {
        console.log(_count + 1)
    }
});

var module2 = (function () {
    _count = 0;
    var m1 = (function () {
        console.log(_count)
    })();

    var m2 = (function () {
        console.log(_count + 1)
    })();

    return {
        m1: m1,
        m2: m2
    }

})();
module1._count = 1
// console.log(module1._count)
// console.info(module2._count)
// module2.m1