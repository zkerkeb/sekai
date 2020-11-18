import React from 'react'

import {render,fireEvent} from '@testing-library/react'

import Counter from '../index'

test('Counter To match snapshot', ()=>{
    const {asFragment} = render(<Counter></Counter>)
    expect(asFragment()).toMatchSnapshot()
})
