import React from 'react'

export default function Button({
  twStyle = 'btn-primary', 
  title = 'Button', 
  onClick = ()=>{},
  tooltip = 'Tooltip'
}) {
  return (
    <div className="tooltip tooltip-top" data-tip={tooltip}>
      <button
        className={`btn w-28 ${twStyle}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}
