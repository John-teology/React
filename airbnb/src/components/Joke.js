import React from "react";


export default function Joke({setup,punchline}) {
    const [isShown, setIsShown] = React.useState(false)

    function showJoke(){
      setIsShown(prev => !prev)
    }

    return (
      <div>
        {setup && <h3>{setup}</h3>}
        {isShown && <h3>{punchline}</h3>}
        <button onClick={showJoke}>{isShown ? "Hide punchline" : 'Show punchlinde'}</button>
        <hr /> 
      </div>
    );
}