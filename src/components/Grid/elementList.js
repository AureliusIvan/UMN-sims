import {CreateBtn, PauseBtn} from '../buttons/cardBtn';
import { CreatePop } from '../PopUp/CardPop';
import Test1 from '../TestPopUp/Test1'
import "./List.css";
import { useState } from 'react';

function createPop(props){
    return(
        <CreatePop
            isOpen = {true}
        />
    );
}

export const items = [
    {
        id: 1,
        first: [<CreateBtn
        function = {createPop}
            id = "pause"
            content='II'
        />],
        second: [],
        third: [],
        fourth: ["status"]
    },
    {
        id: 2,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 3,
        first: [<Test1 />],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 4,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 5,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 6,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 7,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 8,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 9,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 10,
        first: [<CreateBtn/>],
        second: [<CreateBtn/>],
        third: [<CreateBtn/>],
        fourth: [<CreateBtn/>]
    },
];
