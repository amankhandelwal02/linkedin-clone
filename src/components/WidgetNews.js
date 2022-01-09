import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const WidgetNews = ({ title, analytics }) => {
  return (
    <div className='p-2'>

        <h3 className='text-sm mb-1 font-semibold'>{title}</h3>
        <div className='flex items-center'>
        <BubbleChartIcon sx={{ height: "15px", width: "15px" }} className='mr-[2px]' />
        <p className='text-xs'>{analytics}</p>
        </div>
      
    </div>
  )
}

export default WidgetNews
