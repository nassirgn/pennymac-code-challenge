import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const useGetRandomQuote = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  return useQuery(
    ['quote'],
    async () => {
      const res = await axios.get(
        'http://quotes.stormconsultancy.co.uk/random.json',
        config,
      )

      console.log(res);
      return res
    },
    {
      refetchInterval: 15000,
    },
  )
}

export default useGetRandomQuote