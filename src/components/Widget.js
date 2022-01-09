import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import WidgetNews from './WidgetNews';

const Widget = () => {

  return (
    <Container>

      <WidgetsHeader>

      <h2 className='flex-1 text-lg font-semibold'>LinkedIn News</h2>
      <InfoIcon sx={{ height: "20px", width: "20px" }} />

      </WidgetsHeader>

      <WidgetsBody>
        <WidgetNews title="HR policies get creative at startups" analytics="3d ago • 5,980 readers"/>
        <WidgetNews title="Zerodha's Nikhil warns about inflation" analytics="4d ago • 26,479 readers"/>
        <WidgetNews title="Omicron wave hits travel industry again" analytics="2d ago • 6,895 readers"/>
        <WidgetNews title="Average pay across job levels" analytics="5d ago • 27,674 readers"/>
        <WidgetNews title="What if things don’t work out?" analytics="5d ago • 7,924 readers"/>
        <WidgetNews title="India's unemployment rate spikes up" analytics="4d ago • 11,837 readers"/>
        <WidgetNews title="Reliance Retail invests $200 M in Dunzo" analytics="2d ago • 3,034 readers"/>
        <WidgetNews title="Apple, Google execs rake in millions" analytics="1d ago • 4,304 readers"/>
      </WidgetsBody>

    </Container>
  )
}

export default Widget

const Container = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.23;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: fit-content;
  padding: 10px;
  justify-content: left;
  color: #666666;

  @media (max-width: 1124px) {
    display: none;
  }
`
const WidgetsHeader = styled.div`
display: flex;
align-items: center;
`

const WidgetsBody = styled.div``