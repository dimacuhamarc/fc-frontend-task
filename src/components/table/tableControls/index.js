import React from 'react'
import Button from '../../button'
import { downloadFile } from '../../utils/fileExport'

const copy = {
  CSV: {
    title: 'CSV',
    tooltip: 'Export as CSV'
  },
  JSON: {
    title: 'JSON',
    tooltip: 'Export as JSON'
  },
  Console: {
    title: 'Console',
    tooltip: 'Show in Console'
  }
}

export default function TableControls({data}) {
  return (
    <div className='flex justify-center gap-4 py-3 border-2 border-b-0 border-l-0 border-r-0 bg-slate-100 rounded-es-lg rounded-ee-lg border-t-slate-200'>
      <Button twStyle={'btn-primary'} title={copy.CSV.title} tooltip={copy.CSV.tooltip} onClick={() => downloadFile(data,'csv')}/>
      <Button twStyle={'btn-secondary'} title={copy.JSON.title} tooltip={copy.JSON.tooltip} onClick={() => downloadFile(data,'json')}/>
      <Button twStyle={'btn-neutral'} title={copy.Console.title} tooltip={copy.Console.tooltip} onClick={() => downloadFile(data,'console')}/>
    </div>
  )
}
