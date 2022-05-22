import React, { useContext, useState } from 'react';
import { AllContext } from '../Value/CoinContext';

export const SetBgHome = () => {
  const { hour, SetHour } = useContext(AllContext);
  if (hour >= 7) {
    return 'BgPagi';
  } else if (hour >= 12) {
    return 'BgSiang';
  } else if (hour >= 15) {
    return 'BgSore';
  } else if (hour >= 18) {
    return 'BgMalem';
  }
  return;
};
