import { question } from "./question";

export const questionOperations={
    questArray:[],
    add(quesObj){
        let Obj = new question(quesObj.id,quesObj.question,quesObj.option1,quesObj.option2,quesObj.option3,quesObj.option4,quesObj.rightans)
        this.questArray.push(Obj);
    },
    getArray(){
        //console.log("Get Array is ",this.questArray)
        return this.questArray;
    }
}