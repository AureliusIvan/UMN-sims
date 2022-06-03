import { AllContext } from '../Value/CoinContext';
import { useContext } from 'react';

export function StatFunction(what, setWhat, add, min) {
  // console.log (`${what}, ${setWhat}, ${add}, ${min}`)

  // const { countMakan, setCountMakan } = useContext(AllContext)

  if (what <= 0 && add !== 0) setWhat(add); // sama aja kyk setWhat(what + add)
  else if (what - min <= 0 && min !== 0) setWhat(0);
  else if (what >= 100 && min !== 0) setWhat(what - min);
  else if (what + add >= 100 && add !== 0) setWhat(100);
  else setWhat(what + add - min);
}

export function CoinFunction(what, setWhat, add, min) {
  if (what <= 0 && add !== 0) setWhat(add);
  else if (what <= 0 && min !== 0) setWhat(0);
  else setWhat(what + add - min);
}

export function CheckStatFull(what, countWhat, setCountWhat) {
  if (what >= 95) {
    setCountWhat(countWhat + 1);
    console.log('percentage : ' + countWhat);
  }

  // sleep utama beda sendiri, krn ada ukurannya sendiri
}
