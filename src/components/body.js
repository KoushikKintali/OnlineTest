import React from 'react'

export const Body = ()=>{
    return(
        <div className="card">
        <div className="card-body">
            <div>
                
                <p> <span>Q1)</span> What is the Capital of INDIA ?</p>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <input type="radio" value=""></input><label>A) Hyderabad</label>
                </div>
                <div className="col-lg-6">
                <input type="radio"></input>B) Delhi
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                <input type="radio"></input>C) Banglore
                </div>
                <div className="col-lg-6">
                <input type="radio"></input>D) Bhubaneswar
                </div>
            </div>
        </div>

        </div>
    );
}