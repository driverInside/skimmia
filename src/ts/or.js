var orOption = function (n) {
    var map = {
        3: 'Music',
        5: 'TI',
        15: 'Musical'
    };
    for (var i = 1; i < n; i++) {
        var music = (i % 3) * -1 + 3;
        var ti = (i % 5) + 5;
        var musical = music * ti;
        console.log(map[musical] || map[music] || map[ti] || i);
    }
};
orOption(100);
