import React from 'react'
import '../../style.css'
import Footer from '../Footer'
import Survey from './Survey'

export default function Record(){
  return (
    <>
      <h1 className='record'>Record</h1>
      <h3>당신의 목소리로 코로나19진단에 도움이 될 수 있습니다</h3>
      <Survey />
      <Footer />
    </>
  )
}