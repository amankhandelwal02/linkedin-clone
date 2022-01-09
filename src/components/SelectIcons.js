import React from 'react'
import styled from 'styled-components'

const SelectIcons = ( { Icon, name, color } ) => {
  return (
    <Container>

        {Icon && ( <Icon className="iconImage" style={{ color: "#666666"}}/>)}
        <p className='iconTag'>{name}</p>
      
    </Container>
  )
}

export default SelectIcons

const Container = styled.div`
display: flex;
padding: 12px 7px 12px 7px;
margin-bottom: 6px;
border-radius: 5px;
transition: 0.3s;

:hover {
    background-color: lightgray;
    cursor: pointer;
}
`
