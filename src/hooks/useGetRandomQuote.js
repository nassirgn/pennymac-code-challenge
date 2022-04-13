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
      const response = await axios.get(
        'http://quotes.stormconsultancy.co.uk/random.json',
        config,
      )
      return response
    },
    {
      refetchInterval: 15000,
    },
  )
}

export default useGetRandomQuote