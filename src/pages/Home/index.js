import React from 'react'
import useGetRandomQuote from '../../hooks/useGetRandomQuote'

const Home = () => {
  const quote = useGetRandomQuote()

  if(quote){
    console.log(quote);
    return null
  }
  return (
    <div>Home</div>
  )
}

export default Home