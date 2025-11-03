import React from 'react'

function Container({children} : {children : React.ReactNode}) {
  return (
    <div className='container mx-auto px-20 py-5'>
        {children}

    </div>
  )
}

export default Container