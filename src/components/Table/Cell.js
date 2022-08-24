import React from 'react'

export const Cell = ({name, years, profession, hobbie}) => {
  return (
    <tbody className='table__boddy'>
        <tr className='table__row'>
            <td className='table__column'>{name}</td>
            <td className='table__column'>{years}</td>
            <td className='table__column'>{profession}</td>
            <td className='table__column'>{hobbie}</td>
        </tr>
    </tbody>
  )
}
