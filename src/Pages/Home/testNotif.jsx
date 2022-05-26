import { AllContext } from "../../components/Value/CoinContext";
import { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react"

function Notif () {
    const { coin } = useContext(AllContext);
    const[first, setFirst] = useState(true);
    
    const toast = useToast();
    useEffect(() => {
      if (first) 
        setFirst(false);
    
      if (!first) {
        toast({
          description: "koin nambah",
          status: "success",
          position : "bottom-start",
          isClosable: true,
        })
      }
    }, [coin]);
}

export default Notif