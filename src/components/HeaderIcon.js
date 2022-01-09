import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const HeaderIcon = ( {src, Icon, title, className} ) => {

  return (
    <>
    <Container>

        {Icon && (<Icon className={className} />)}
        <p className="hide" style={{fontSize: "12px"}}>{title}</p>
        {src && ( <Avatar className="userAvatar" src={src} /> )}

    </Container>
        </>
  )
}

export default HeaderIcon

const Container = styled.div`
text-align: center;
padding: 0px 30px 0px 0px;
color: #666666;
transition: all .2s ease-in-out;

:hover {
    cursor: pointer;
    color: black;
    transition: 0.3s;
    transform: scale(1.3);   
}
`
