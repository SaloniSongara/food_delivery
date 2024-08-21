import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/common/Header'
import Category from './pages/Category'

const appRoutes = [
    { path: '/', private: true, element: <Home /> },
    { path: '/category/:slug', private: true, element: <Category /> }
]

export const createRoute = (path, component, props, level) => {
    if (level) {
        return (
            <Route path={path} key={path} element={component} {...props}>
                {getApplicationRoutes(level)}
            </Route>
        )
    } else {
        return <Route path={path} key={path} element={component} {...props} />
    }
}

export const getApplicationRoutes = (routes) => {

    return routes.map((route) =>
        createRoute(route.path, route.element, route.props, route.level)
    )
}

export const buildRouter = (routesConfig) => {
    const applicationRoutes = getApplicationRoutes(routesConfig)
    return (
        <div>
            <Header />
            <Routes>{applicationRoutes}</Routes>
        </div>
    )
}

const AppRouter = () => {
    return buildRouter(appRoutes)
}

export default AppRouter