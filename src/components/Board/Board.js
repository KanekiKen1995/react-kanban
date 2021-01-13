import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import React from "react";

const BoardCustome = (props) => {
  const {data} = props
  const test = (e)=> {
    console.log(e)
  }
  return (
    <Board initialBoard={data} 
    onCardDragEnd={(x)=>test(x)}/>
  )
}

export default BoardCustome;