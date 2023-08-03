import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Result from './pages/Result'
import { data } from './data'

const App = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinalResults, setshowFinalResults] = useState(false);

  return (
    <div className='font-nunito'>


      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/questions' element={
          <Questions
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={data}
            score={score}
            setScore={setScore}
            showFinalResults={showFinalResults}
            setshowFinalResults={setshowFinalResults} />
        } />

        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  )
}

export default App