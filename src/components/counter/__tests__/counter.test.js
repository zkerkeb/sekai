import React from 'react'

import {render,fireEvent} from '@testing-library/react'

import Counter from '../index'

test('Counter To match snapshot', ()=>{
    const {asFragment} = render(<Counter></Counter>)
    expect(asFragment()).toMatchSnapshot()
})


test('Counter have two buttons', () =>{
    const {getAllByRole} = render(<Counter/>)
    const buttons = getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
  
  test('Counter have a + button', () => {
    const {getByText} = render(<Counter></Counter>)
    const button = getByText('+')
    expect(button).toBeTruthy()
  })
  
  test('have a counter displayer', () => {
    const {getByText } = render(<Counter></Counter>)
    const button = getByText('0')
    expect(button).toBeTruthy()
  })
  
  test('+ button should increment', () => {
    const {getByText, getByTestId} = render(<Counter/>)
    const button = getByText('+')
    fireEvent.click(button)
    const counterValue = getByTestId('counterValue')
    expect(counterValue).toHaveTextContent("1")
  })
  
  test('- button should increment', () => {
    const {getByText, getByTestId} = render(<Counter/>)
    const button = getByText('-')
    fireEvent.click(button)
    const counterValue = getByTestId('counterValue')
    expect(counterValue).toHaveTextContent("-1")
  })

  test('Should have a default title "Compteur"', () => {
    const {getByRole} = render(<Counter/>)
    const title= getByRole('heading')
    expect(title).toHaveTextContent("Compteur")
  })
  
  
  test('Should have the title passed in props', () => {
    const {getByRole} = render(<Counter label="Algerie"/>)
    const title= getByRole('heading')
    expect(title).toHaveTextContent("Algerie")
  })