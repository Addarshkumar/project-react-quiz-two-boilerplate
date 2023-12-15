import React, { useState } from "react";
import "./Quizzpage.css";
import quizQuestion from "../resources/quizQuestion.json";

function QuizzPage() {
  const [ques, setQues] = useState(0);
  const {question, optionA, optionB, optionC, optionD} = quizQuestion[ques];
    // console.log(quizQuestion)
const next = () => {
    if(ques==quizQuestion.length-1){
      setQues(0)
    }
    else{
      setQues(ques + 1);
    }
}

  const prev=()=>{
    if(ques==0){
        setQues(14)
      }
    else{
    setQues(ques-1);
    }
  }

  return (
    <>
      <div className="main-container">
        <h2 className="questions">Questions</h2>
        <p className="quesNo">{ques+1} of 15</p>
        <h3>{question}</h3>
        <div className="options">
          <div>{optionA}</div>
          <div>{optionB}</div>
          <div>{optionC}</div>
          <div>{optionD}</div>
        </div>
        <div id="btn-container">
          <div className="btns">
            <button onClick={prev} className="previous">
              Previous
            </button>
            <button onClick={next} className="next">
              Next
            </button>
            <button onClick={() => { alert("Are you sure you want to quit ?"); }} className="quit">
              Quit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizzPage;



// export default class Quizpage extends Component{
//     constructor(){
//         super()
//         this.state={currIndex:0}
//     }

//     next=()=>{
//         if(this.state.currIndex==quizData.length-1){
//             this.setState({currIndex:0})
//         }
//         else{
//         this.setState({currIndex:this.state.currIndex+1})
//         }
//     }

//     prev=()=>{
//         if(this.state.currIndex==0){
//             this.setState({currIndex:14})
//         }
//         else{
//             this.setState({currIndex:this.state.currIndex-1})
//         }
//     }

//     render(){
//         return(
//             <>
//              <div className="main-container">
//                 <h2 className="questions">Questions</h2>
//                 <h3>{quizData[this.state.currIndex].question}</h3>
//                 <div className="options">
//                     <div>{quizData[this.state.currIndex].optionA}</div>
//                     <div>{quizData[this.state.currIndex].optionB}</div>
//                     <div>{quizData[this.state.currIndex].optionC}</div>
//                     <div>{quizData[this.state.currIndex].optionD}</div>
//                 </div>
//                 <div id="btn-container">
//                 <div className="btns">
//                      <button onClick={this.prev} className="previous">previous</button>
//                      <button onClick={this.next} className="next">Next</button>
//                      <button onClick={()=>{alert("Are you sure you want to quit ?")}} className="quit">Quit</button>
//                 </div>
//                 </div>
//              </div>
//             </>
//         ) 
//     }
// }