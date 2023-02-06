export default function Greeting(props){
    const {firstName, emoji} = props
    return (
        <h2>{emoji}Hello there, {firstName}</h2>
    )
}


/*
NEXT LEVEL
same as above
*/

export function GreetingNextLevel( {lastName, arrow} ){
    return (
        <h2> {arrow} {lastName}</h2>
    )
}