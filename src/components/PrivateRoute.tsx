import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
    Component: () => JSX.Element
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
    const {Component } = props

    let authorizationStatus: boolean | null = false

    useEffect(() => {
        authorizationStatus = Boolean(localStorage.getItem('isAuthorized'))
    }, [localStorage])

    return authorizationStatus ? <Component /> : <Navigate to='/login' />

}
