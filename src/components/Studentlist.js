import React,{Component} from 'react'
import StudentListItem from './components/StudentListItem'

export default class StudentList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let studentItems=
        this.props.studentlist.map((s,n)=><StudentListItem studentItem={s}/>
            );
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {studentItems}
            </tbody>
        </table>
    )

    }
}