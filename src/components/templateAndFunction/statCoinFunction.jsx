export function StatFunction(what, setWhat, add, min) {
    // console.log (`${what}, ${setWhat}, ${add}, ${min}`)

    if (what <= 0 && add !== 0)
        setWhat(add) // sama aja kyk setWhat(what + add)
    else if (what <= 0 && min !== 0)
        setWhat(0)
    else if (what >= 100 && min !== 0)
        setWhat(what - min)
    else if (what >= 100 && add !== 0)
        setWhat(100)
    else {
        setWhat(what + add - min);
    }

    // if (what + add >= 100) {
    //     add = 100-what;
    //     setWhat(what + add);
    // }
    // else if (what - min <= 0) {
        //     min = 0 + what
        //     setWhat(0)
    // }
    // else
    //     setWhat(what + add - min)
}

export function checkStat(what, setWhat) {
    if (what <= 0)
        setWhat(0)
    else if (what >= 100)
        setWhat(100)
}

export function CoinFunction (what, setWhat, add, min) {
    if (what <= 0 && add !== 0)
        setWhat(add)
    else if (what <= 0 && min !== 0)
        setWhat(0)
    else
        setWhat(what + add - min) 
}

export function checkCoin (what, setWhat) {
    if (what < 0)
        setWhat(0)
}