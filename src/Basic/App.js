// import { ClassComp } from "./ClassComp";

import Json from "../Component/Json"

// import {Comp} from "../Basic/ClassComp";
export function App() {
    let obj=[
        {
            age:21,
            name:"ABC"
        }
        ,
        {
            age:22,
            name:"Pooja"
        }
    ]
    return (
        <div>
            {/* <ClassComp />
            <Comp datas={obj}/> */}
            <Json/>
        </div>
    )
}