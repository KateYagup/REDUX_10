import React from "react";

const Spinner = ({ size }) => {
    const style = {
        width: size,
        height: size
    }
    const s = false;
    console.log(size);
    return (<>
        <div className="spinner" style={style} >
        </div >
    </>
    )
}
export default Spinner;