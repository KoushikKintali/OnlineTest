import React from 'react'

export const Table=(props)=>{
    //console.log("Questions is ",props.ques)
   return(
    <table className="table">
        <tbody>
            <tr className="thead-dark">
                <th>Id</th>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Right Answer</th>
            </tr>
            <tr>
                <td>{props.print.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
   );
}