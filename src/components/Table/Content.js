import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import { Cell } from './Cell'
import './content.css'
import {listData} from './Data'

export const Content = () => {

  
  return (
      <main className='main'>
        <h2 className='main__title'>Tabla de Contenido</h2>
        <div className='main__table'>
          <table className='table'>
            <thead className='table__header'>
              <tr>
                <th className='table__column'>Nombre</th>
                <th className='table__column'>Edad</th>
                <th className='table__column'>Carrera</th>
                <th className='table__column'>Hobbie</th>
              </tr>
            </thead>
            {listData.map((item, index) => (
              <Cell
                key={index}
                name={item.nombre}
                years={item.edad}
                profession={item.carrera}
                hobbie={item.hobbie}
              />
            ))}
          </table>
        </div>
      </main>
    
  )
}
