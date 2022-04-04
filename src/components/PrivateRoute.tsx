import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
    Component: () => JSX.Element
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
    const {Component } = props

    const authorizationStatus: string | null = localStorage.getItem('isAuthorized')


    return authorizationStatus === 'true' ? <Component /> : <Navigate to='/login' />

}
