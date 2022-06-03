import { useState, useEffect, useContext } from 'react';
import { useToast } from '@chakra-ui/react';
import { AllContext } from '../Value/CoinContext';

export function Toast() {
  const { coin, prevCoin } = useContext(AllContext);
  const [first, setFirst] = useState(true);

  const toast = useToast();
  useEffect(() => {
    if (first) setFirst(false);

    if (!first) {
      if (coin > prevCoin.current)
        toast({
          description: 'Koin Bertambah',
          status: 'success',
          position: 'top',
          isClosable: true,
        });
      else {
        toast({
          description: 'Koin Berkurang',
          status: 'warning',
          position: 'top',
          isClosable: true,
        });
      }
    }
  }, [coin]);
}

export function Toastwarn() {
  const { makan, setMakan } = useContext(AllContext);
  const [first, setFirst] = useState(true);
  const toast = useToast();
  useEffect(() => {
    if (first) setFirst(false);
    if (!first) {
      toast({
        description: 'Warning anda sekarat',
        status: 'warning',
        position: 'top',
        isClosable: true,
      });
    }
  }, [makan]);
}
