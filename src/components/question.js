import React from 'react'

export const Question=(props)=>{
    //console.log("asd",props.sd)
    return(
        <div>
            <div className="row">
                <div className='col-sm-12'>
                    <div className="form-group">
                        <label>Id:</label>
                        <input onChange={(e)=>{props.input(e,'id')}} className="form-control" type="text"></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-sm-12'>
                    <div className="form-group">
                        <label>Question:</label>
                        <input onChange={(e)=>{props.input(e,'question')}} className="form-control" type="text"></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Option 1:</label>
                        <input onChange={(e)=>{props.input(e,'option1')}} className="form-control" type="text"></input>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Option 2:</label>
                        <input onChange={(e)=>{props.input(e,'option2')}} className="form-control" type="text"></input>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Option 3:</label>
                        <input onChange={(e)=>{props.input(e,'option3')}} className="form-control" type="text"></input>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Option 4:</label>
                        <input onChange={(e)=>{props.input(e,'option4')}} className="form-control" type="text"></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-sm-12'>
                    <div className="form-group">
                        <label>Right Answer:</label>
                        <input onChange={(e)=>{props.input(e,'rightans')}} className="form-control" type="text"></input>
                    </div>
                </div>
            </div>
        </div>
        
    );
}