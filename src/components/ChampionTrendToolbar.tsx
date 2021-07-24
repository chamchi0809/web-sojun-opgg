import React from "react";
import styled,{css} from "styled-components";
import ChampionTrendHeader from "../components/ChampionTrendHeader"
import { ChampionTrendItemCss } from "../components/ChampionTrendHeader";

import championTier1 from "../assets/icons/icon-champtier-1.png"
import champion32 from "../assets/champion32.png"
import tierStay from "../assets/icons/icon-championtier-stay.png"

interface ChampionTrendItemProps{

}



const ChampionTrendToolbar=styled.div`
    ${ChampionTrendItemCss}
    &>div{
        flex:1;
        background-color: white;
        border:1px solid #e9eff4;                
        text-align: center;
        padding: 10px 0;
        font-size:12px;
        font-weight:bold;
        cursor:pointer;
        &:not(:first-child){
            border-left: none;
        }
        &.select{
            color:black;                    
        }
    }
`
export default ChampionTrendToolbar