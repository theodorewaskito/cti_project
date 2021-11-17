import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoutes ({ children }) {
  let location = useLocation()

  if (localStorage.getItem('userId')) {
    return <Navigate to='/post' state={{ from: location }} />
  }

  return children
}

export default PrivateRoutes