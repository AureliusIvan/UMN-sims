export function StatFunction(what, setWhat, add, min) {
    // console.log (`${what}, ${setWhat}, ${add}, ${min}`)

    if (what === 0 && add !== 0)
        setWhat(add) // sama aja kyk setWhat(what + add)
    else if (what === 0 && min !== 0)
        setWhat(0)
    else if (what === 100 && min !== 0)
        setWhat(what - min)
    else if (what === 100 && add !== 0)
        setWhat(100)
    else {
        setWhat(what + add - min);
    } // mgkn ini ga perlu, tp buat jaga" aja
}