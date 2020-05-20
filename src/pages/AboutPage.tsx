import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Info Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto nesciunt praesentium laboriosam eius quidem a! Sit atque asperiores enim! Totam dicta eaque reiciendis itaque nobis. Provident illum quae excepturi?</p>
      <button className="btn" onClick={() => history.push('/')} >Back To Todos</button>
    </>
  )
}