import React from 'react'
import styled from 'styled-components'
import MainFeed from './MainFeed'
import Sidebar from './Sidebar'
import Widget from './Widget'

const Feed = () => {
  return (
    <Container>

        {/* {Sidebar} */}
        <Sidebar className="hideSidebar"/>
        {/* {Main Feed} */}
        <MainFeed />
        {/* {Widget} */}
        <Widget />
      
    </Container>
  )
}

export default Feed

const Container = styled.div`
display: flex;
padding: 25px;
margin: 0px 50px 0px 50px;

@media (max-width: 605px) {
    margin: 0px 0px;
    padding: 25px 0px;
  }
`

