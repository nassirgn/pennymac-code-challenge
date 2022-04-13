import React from 'react'
import useGetRandomQuote from '../../hooks/useGetRandomQuote'

const Home = () => {
  const quote = useGetRandomQuote()

  
  return (
    <React.Fragment>
    {quote.isLoading? (
      <span>loading...</span>
    ):quote.isError? (
      <span>Ops something happened...</span>
    ):(
      <pre>{JSON.stringify(quote.data.data)}</pre>
    )}
    </React.Fragment>
  )
}

export default Home