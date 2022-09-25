import React from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function changeSize(){
          setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeSize);

    return () => {  // cleanup function
        window.removeEventListener("resize", changeSize)
        // we use this return para if na unmount si <Window /> element mwawala rin yung event listener kase anong aabangan niya if wala yung element
    }
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
