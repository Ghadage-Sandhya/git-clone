import React from "react";
// import data from "../data.json";
import Images from "./Images";
const Json = () => {
    const [aarr]=Images();
    console.log(aarr)
    return (
        <div>
            {
                aarr && aarr.map((val) => {
                    return (
                        <div>
                            <img src={val.imgUrl} alt="" width={"150px"}/>
                            {/* <br />
                           
                            {val.id} */}
                        </div>
                    )

                })
            }
        </div>
    )
}
export default Json