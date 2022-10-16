import React from "react";
import { Form } from "react-bootstrap";
export default class SelectionComponent extends React.Component{

    // this.props.onChange(this.props.data[val.target.value])

    render(){
        return (<>
        <Form.Group>
            <Form.Label>{this.props.label}</Form.Label>
            <Form.Select defaultValue={this.props.topingId} onChange={(val) => {
                
                        for(let v = 0;v<this.props.data.length;v++){

                            if(this.props.data[v].id.toString() === val.target.value.toString())
                            {
                                this.props.onChange(this.props.data[v]);
                                break;
                            }
                        }   
                    }
                }>
                {this.props.data.map((value,key)=><option key={value.id} value={value.id}>{value.topingName}</option>)}
            </Form.Select>
        </Form.Group>
        </>);
    }

    // componentDidMount(){
    //     for(let i=0;i<this.props.data.length;i++){
    //         console.log(this.props.data[i]);
    //         this.tdata.push(<option>{this.props.data[i]}</option>);
    //     }
    // }

}