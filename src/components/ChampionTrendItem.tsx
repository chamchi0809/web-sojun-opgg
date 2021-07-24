
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ChampionTrendItemCss } from "./ChampionTrendHeader";
import classnames from "classnames";

import championTier1 from "../assets/icons/icon-champtier-1.png"
import champion32 from "../assets/champion32.png"
import tierStay from "../assets/icons/icon-championtier-stay.png"
import tierUp from "../assets/icons/icon-championtier-up.png"
import tierDown from "../assets/icons/icon-championtier-down.png"
import ChampionTrendHeader from "./ChampionTrendHeader";

interface ChampionTrendItemProps{
    championID:number;
    change:number;
    name:string;
    position:string;
    win:string;
    pick:string;
    tier:string;
    rank:string;
    ban:string;
    trendType:string;
}

const ChampionTrendWrapper = styled(ChampionTrendHeader)`
    background-color: white;
    border: 1px solid #e9eff4;
    &:not(:last-child){
        border-bottom:none;
    }
    &>.rank{
        font-style: italic;
        font-size:20px;
    }
    &>.champ{
        display: flex;
        align-items: center;
        text-align: left;
        &>.change{
            display: flex;
            align-items: center;
            font-size:14px;
            line-height: 14px;
            padding: 0 10px;
            width:50px;
            box-sizing:border-box;
            &>img{
                margin-right:2px;
            }
            &.up{
                color: green;
            }
            &.down{
                color: red;
            }
        }
        &>.champ-img{
            width: 32px;
            height: 32px;
            background-image: url(${champion32});            
        }
        &>.champ-desc{
            font-size:12px;
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &>:first-child{
                font-weight: bold;
            }
        }
    }
    &>.select{        
        color:#5383e8;
        font-weight:bold;     
        order:0;   
    }
`

const ChampionTrendItem: React.FC<ChampionTrendItemProps>=(props)=>{
    const getTierChangeIcon=()=>{
        if(props.change>0){
            return tierUp;
        }else if(props.change <0){
            return tierDown;
        }else{
            return tierStay;
        }
    }
    
    return(
        <ChampionTrendWrapper>
            <div className="rank">{props.rank}</div>
            <div className="champ">
                <div className={classnames("change",{up:props.change>0,down:props.change<0})}>
                    <img src={getTierChangeIcon()} alt="" />
                    {Math.abs(props.change)}
                </div>
                <div className={`champ-img __spc32-${props.championID}`}/>
                <div className="champ-desc">
                    <div>{props.name}</div>
                    <div>{props.position}</div>
                </div>
            </div>

            <div hidden={props.trendType !== "winratio" && props.trendType !== "pickratio" && props.trendType !== "tier"} className={classnames("win", {select: props.trendType == "winratio"})}  >{props.win}</div>
            <div hidden={props.trendType !== "pickratio" && props.trendType !== "winratio" && props.trendType !== "tier"} className={classnames("pick", {select: props.trendType == "pickratio"})} >{props.pick}</div>
            <div hidden={props.trendType !== "banratio" } className={classnames("ban", {select: props.trendType == "banratio"})}>{props.ban}</div>
            <div hidden={props.trendType !== "tier"} className={classnames("tier", {select: props.trendType == "tier"})}>
                <img src={props.tier} alt="" />
            </div>
        </ChampionTrendWrapper>
    )
}

export default ChampionTrendItem;