import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'

export const routes = [
    {
        component: Counter,
        path: '/',
        label: 'Home',
        key: 'asdtre'
    },
    {
        component: Counter,
        path: '/counter',
        label: 'Counter',
        key: 'asdahf'
    },
    {
        component: () => <PassingProps
            passingValue={5}
            passingFun={() => alert('bu!')}
        />,
        path: '/passing-props',
        label: 'Passing Props',
        key: 'gsafea',
    },
    {
        component: () => <Counter startValue={15} />,
        path: '/counter-with-start-value',
        label: 'Counter with start value 15',
        key: 'gsssgj',
    }
]