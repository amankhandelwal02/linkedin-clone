import React from 'react'
import styled from 'styled-components'

const FormInput = ({ title, placeholder, type, value, onChange }) => {
  return (
    <Container>
      
      <p className='inputPara'>{title}</p>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange}/>

    </Container>
  )
}

export default FormInput

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Input = styled.input`
padding: 10px;
border-radius: 5px;
border: 1px solid lightgray;
`