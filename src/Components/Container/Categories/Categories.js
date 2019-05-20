import React, { Component } from 'react';

class Categories extends Component {
  constructor(props){
    super(props);
    this.state={
      quiz : ['Simple Past Tense','Simple Present Tense','Present Continous Tense','Simple Future Tense'],
    }
  }
  render() {
    const {quiz} = this.state;
    const {category} = this.props;
  return (
      <div>
        <center><h1>Quiz Categories</h1></center>
        <br/> 
        <div id='categories'>
       {quiz.map((value,index) => {
         return (<h3 key={index} onClick={category.bind(this,index)}>{value}<hr/></h3>)
       })}
       </div>
      </div>
    );
  }
}

export default Categories;
