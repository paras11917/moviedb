import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        query === "" ?
          `https://api.themoviedb.org/3/movie/popular?api_key=c4940b9c32ec587bf52f591fe70f8d70`
          :
          `https://api.themoviedb.org/3/search/movie?api_key=c4940b9c32ec587bf52f591fe70f8d70&page=1&query=${query}`

      )

      setItems(result.data.results)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App


//commenttggfgfdssdsd