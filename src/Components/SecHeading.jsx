import React from 'react'

const SecHeading = ({title,heading}) => {
  return (
    <div>
        <h5 className='font-pop text-primary font-semibold  border-l-20 border-primary pl-2.5 rounded-sm'>{title}</h5>
        <h2 className='text-4xl font-semibold mt-6'>{heading}</h2>
    </div>
  )
}

export default SecHeading