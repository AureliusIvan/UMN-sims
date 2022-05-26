import { useContext } from "react"
import { AllContext } from "../Value/CoinContext"

function statMakan({add, min}) {
    const [makan, setMakan] = useContext(AllContext)

    if (makan === 0)
        setMakan(0)
    else if (makan === 100)
        setMakan(100)
    else
        setMakan(makan + add);
        setMakan(makan - min)
}