import React,{Component} from 'react'

export default class StudentListIntem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <tr>
                <td>{this.props.studentItem.id}</td>
                <td>{this.props.studentItem.name}</td>
            </tr>
        )
    }
}