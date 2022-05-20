import hairfront  from "./characterAsset/default/nakMukbang/1.png"
import face from "./characterAsset/default/nakMukbang/2.png"
import lefthand from "./characterAsset/default/nakMukbang/3.png"
import body from "./characterAsset/default/nakMukbang/4.png"
import righthand from "./characterAsset/default/nakMukbang/5.png"
import hairback from "./characterAsset/default/nakMukbang/6.png"
import feet from "./characterAsset/default/nakMukbang/7.png"
import React from "react"
import CharacterModule from "./Card"

const CharData = [
    {
        id:0,
        text:"halo",
        img1:'./characterAsset/default/nakMukbang/1.png',
        img2:{face},
        img3:{lefthand},
        img4:{body},
        img5:{righthand},
        img6:{hairback},
        img7:{feet}
    }
]

export default CharData;