import React from 'react'

const ButtonHandle = ({text,type}) => {
  return (
    <div>
      <button className='bg-blue-900 text-white w-full py-2 rounded-md' type = {type}>
        {text}
      </button>
    </div>
  )
}

export default ButtonHandle
