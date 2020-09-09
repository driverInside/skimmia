var fnOption = function (n) {
    var _loop_1 = function (i) {
        ifThen({
            ifArg: i % 3 === 0,
            thenFunction: function () {
                return ifThen({
                    ifArg: i % 5 === 0,
                    thenFunction: function () { return console.log('Musical'); },
                    elseFunction: function () { return console.log('Music'); }
                });
            },
            elseFunction: function () {
                return ifThen({
                    ifArg: false,
                    thenFunction: function () { return console.log('TI'); },
                    elseFunction: function () { return console.log(i); }
                });
            }
        });
    };
    for (var i = 1; i <= n; i++) {
        _loop_1(i);
    }
};
var ifThen = function (_a) {
    var ifArg = _a.ifArg, thenFunction = _a.thenFunction, elseFunction = _a.elseFunction;
    if (ifArg) {
        thenFunction();
        return;
    }
    elseFunction();
};
fnOption(100);
