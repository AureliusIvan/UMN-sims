import React, { useContext, useState} from "react";
import CharacterModule from "./Card";
import { AllContext } from "../Value/CoinContext";

export function CreateChar(props){
    const {character, setCharacter} = useContext(AllContext);
    const [hairfront, setHairFront] = useState('');
    const [face, setFace] = useState('');
    const [lefthand, setLefthand] = useState('');
    const [body, setBody] = useState('');
    const [righthand, setRightHand] = useState('righthand'+{});
    const [hairback, setHairback] = useState('hairback'+{});
    const [feet, setFeet] = useState('feet1');
    
    if(character == 1){
    }
    return(
        <>
        <CharacterModule
        feet = {'feet1'}
        />
        </>
    );
}