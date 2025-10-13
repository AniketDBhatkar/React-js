import React, { useState } from 'react'
import LanguageGrid from './components/LanguageGrid.jsx'
import AddLanguage from './components/AddLanguage.jsx'

import { languages } from './components/Dataset.js'
const App = () => {
  let [dataSetLanguages, setDataSetLanguages] = useState(languages)
  return (
    <>
      <AddLanguage dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />
      <LanguageGrid dataSetLanguages={dataSetLanguages} />
    </>
  )
}

export default App