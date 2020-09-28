import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import React from "react";


const BoardCustome = (props) => {
  const {data} = props
  return (
    <Board initialBoard={data} />
  )
}

export default BoardCustome;