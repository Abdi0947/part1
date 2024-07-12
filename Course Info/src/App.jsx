import React from "react";

// for the header 
const Header =(props)=>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
// for the content 
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part,index)=> 
       <Part key={index} part={part.name} exercises={part.exercises} />)}
    </div>
  );
}
const Part = (props)=>{
  return(
    <div>
      <p>{props.part}{props.exercises}</p>
    </div>
  )
}
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Total number of exercises: {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App