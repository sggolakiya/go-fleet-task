import React, { useEffect } from 'react'

const Home: React.FC = () => {
  useEffect(() => {
    window.location.pathname = '/register'
  }, [])

  return <></>
}

export default Home
