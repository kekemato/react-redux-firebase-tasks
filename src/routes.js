import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'
import FetchUsers from './FetchUsers'
import SyncUsers from './SyncUsers'
import Add from './Add'

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
    },
    {
        component: FetchUsers,
        path: '/fetch-users',
        label: 'Fetch Users',
        key: 'hfdsf'
    },
    {
        component: SyncUsers,
        path: '/sync-users',
        label: 'Sync Users',
        key: 'hfnup'
    },
    {
        component: Add,
        path: '/add',
        label: 'Add',
        key: 'pejfyw'
    }
]