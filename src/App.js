import { useState } from 'react'
import { AdressForm } from './components/Form'
import { ResidentsList } from './components/List'
import { Residents } from './components/Residents'

function App() {
  const [currentFlatId, setCurrentFlatId] = useState()

  return (
    <div style={{ width: '1200px', margin: '0 auto', marginTop: '50px' }}>
      <AdressForm setCurrentFlatId={setCurrentFlatId} />
      <Residents currentFlatId={currentFlatId} />
      <ResidentsList currentFlatId={currentFlatId} />
    </div>
  )
}

export default App
