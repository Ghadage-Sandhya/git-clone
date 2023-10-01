import React,{Component} from "react";
export class ClassComp extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello world!</h1>
            </div>
        )
    }
}
export class Comp extends Component{
render(){
    // const {data}=this.props;
    return(
        <>
        {/* {
            this.props.obj.map((val)=>{
                return (
                    <h1>Name: {val.name}</h1>
                )
            })
        } */}
        {/* <h1>Data: {data[0].name}</h1> */}
        <h1>Data: {this.props.data[0].age}</h1>
        <h1>Data: {this.props.data[0].name}</h1>
        <h1>Data: {this.props.data[1].age}</h1>
        <h1>Data: {this.props.data[1].name}</h1>
        </>
    )
}
}