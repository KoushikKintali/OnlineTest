import React,{Component} from 'react';
import { Header } from '../components/header';
import { LeftNav } from '../components/leftnav';
import { Body } from '../components/body';
import { Question } from '../components/question';
import { Buttons } from '../components/buttons';
import { Table } from '../components/table';
import { questionOperations } from '../models/questionOperations';
import {connect} from 'react-redux'
import {actionCreator} from '../actioncreator/actioncreator'
import { store } from '../centralstore/centralstore';

export class User extends Component{
    constructor(){
        super();
        this.questionObj={}
        this.quesArr=[]
        this.state={quesObj:this.questionObj,quesArr:this.quesArr};
    }

    takeinputs(event,key){
        //console.log("Take Input Called");
        this.questionObj[key]=event.target.value;
        //console.log("Input Ended",this.questionObj);
        this.setState({...this.state,quesObj:this.questionObj})
    }

    buttonevents(key){
        if(key=="Add"){
            console.log("Dispatch Called");
            store.dispatch(actionCreator(this.state.quesObj,'Add'))
            this.setState({...this.state,quesArr:this.props.questions})
            console.log("Question Array is ",this.props.questions)
        }
    }
    printevent(){
        
        return this.props.questions;
    }

    render(){
        
        return(
            <>
            <div className="container">
            {/* <Header></Header>
            </div>
            <div className="row">
            <div className="col-lg-4">
                <LeftNav></LeftNav>
            </div>
            <div className="col-lg-8">
                <Body></Body>
            </div> */}
            <h1 className="text-center alert alert-primary">Question</h1>
            <Question input={this.takeinputs.bind(this)}></Question>
            <Buttons event={this.buttonevents.bind(this)}></Buttons>

            <br></br>
            <Table print={this.printevent.bind(this)}></Table>
            </div>
            
           
            </>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log("Map State to props ",state);
    return{ 
        questions:state.Array
    }
}
//console.log("Map state ",mapStateToProps(User));
// const fn = connect(mapStateToProps);

export default connect(mapStateToProps)(User);