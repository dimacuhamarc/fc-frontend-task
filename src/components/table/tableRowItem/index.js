import React from 'react'

export default function TableRowItem({
  id, 
  item
}) {
  return (
    <tr className='hover:bg-slate-200 border-slate-200'>
      <th>{id+1}</th>
      <td>{item.type}</td>
      <td>{item.activity}</td>
      <td>{item.participants}</td>
    </tr>
  )
}
