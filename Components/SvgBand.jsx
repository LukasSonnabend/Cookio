import react from 'react';
export default function SvgBand(props){
    return ( !props.top ? <svg className={props.extraClass} xmlns="http://www.w3.org/2000/svg" viewBox={props.customViewBox || "0 0 650 240"} fill="none">
    <path d="M 0 100 L 654 0 V 131.826 L 0 240 Z" fill={props.color || "#75E3EA"}/>
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 70" fill="none">
    <path d="M 0 0 L 854 0 V 0 L 0 30 Z" fill={props.color || "#75E3EA"}/>
    </svg>
    )
}