import React from 'react';

export const Buttons=(props)=>{
    return(
        <div className="row">
            <div className="col-lg-12">
                <button onClick={(e)=>{props.event('Add')}} className="btn btn-primary mr-3">Add</button>
                {/* <button className="btn btn-secondary">Update</button> */}
                <button className="btn btn-info">Save to Server</button>
            </div>
        </div>
    );
}