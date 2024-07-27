import React from 'react'
import TableControls from './tableControls'
import TableRowItem from './tableRowItem'

export default function Table({ data, loading }) {
  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <span className="loading loading-spinner loading-lg"/>
      </div>
    )
  }
  return (
    <div className='p-4'>
      <div className="overflow-x-auto shadow-sm rounded-ss-lg rounded-se-lg bg-slate-100">
        <table className='table table-md'>
          <thead className='bg-slate-200'>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Activity</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRowItem key={index} id={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <TableControls data={data} />
    </div>
  )
}
