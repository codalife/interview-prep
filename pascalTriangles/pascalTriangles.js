var generate = function(numRows) {
    var pascalsTriangles = [[1]];

    var build = (prev = []) => {
        console.log(prev)
        const row = prev.map((el, index) => {
            if (index === 0) {
                return el = el;
            } else {
                return el += prev[index - 1];
            }
        })
        row.push(1);

        pascalsTriangles.push(row.slice());
    }

    for (let i = 0; i < numRows; i++) {
        build(pascalsTriangles[i - 1]);
    }

    return pascalsTriangles;
};