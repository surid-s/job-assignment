import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

type Props = {}

export default function AppRoutes({}: Props) {
  return (
    <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
    </Routes>
  )
}