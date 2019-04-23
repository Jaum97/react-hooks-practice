import React, { useState, useEffect } from 'react'

const App = () => {
  const [title, setTitle] = useState('React App')

  useEffect(() => {
    document.getElementsByTagName('head')[0].title = title
  }, [title])

  return (
    <div className="App">
      <input onChange={e => setTitle(e.target.value)} placeholder="type title here" />
    </div>
  )
}

export default App
