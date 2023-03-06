import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Transiton() {
    return (
        <>
            <h2>User Details</h2>
            <Outlet />
        </>
    )
}
