import React from 'react'
import styled from 'styled-components'

const RecentItems = ({ Icon, title  }) => {
  return (
    <Container>

        {Icon && ( <Icon sx={{ height: "16px", width: "16px" }} className="recentIcon" />)}
        <p>{title}</p>
      
    </Container>
  )
}

export default RecentItems

const Container = styled.div`
display: flex;
padding: 8px 10px;
align-items: center;
font-size: 14px;
font-weight: lighter;
transition: 0.3s;

:hover {
    cursor: pointer;
    background-color: lightgray;
}
`
