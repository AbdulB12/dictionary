import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Search() {

    const [wordDisplay, setWordDisplay] = useState([]);
    const [words, setWords] = useState("");

    const wordsTarget =(e)=>{
    setWords(e.target.value)
 };

    const displayEachWord =()=>{
    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + words)
    .then(res=>{setWordDisplay(res.data)})
    .catch(err=>console.log(err))
 };

  return (
    <div>
        <hr/>
        <div className='search'>

            <h1>Search <br/>for any Word.</h1>
            <form>
                <label></label>
                <input type='text' placeholder='what would you like to search for?' onChange={wordsTarget}></input>
            </form>
            
             <button className='srch' onClick={displayEachWord}>Search</button>
            
           
           
        </div>
        
        
        <div className='result'>
            <div className='header'>
            {wordDisplay.map(displayOne=><h2 className='res'>{displayOne.word}</h2>)}
            </div>
            
            <div className='body'>
                {wordDisplay.map(displayTwo=><i><audio controls>{displayTwo.phonetics.map(a=>a.audio)}</audio></i>)}
                {wordDisplay.map(displayThree=><p>{displayThree.meanings.map(initial=>initial.definitions.map(one=>one.definition))}</p>)}
                <ol type='1' start='1' style={{backGround: '#FCFCFC'}}>
                    {wordDisplay.map(displayThird=><li>{displayThird.meanings.map(b=>b.synonyms)}</li>)}
                    {wordDisplay.map(displayFourth=><li>{displayFourth.meanings.map(c=>c.partOfSpeech)}</li>)}
                    {wordDisplay.map(displayFith=><li>{displayFith.meanings.map(d=>d.definitions.map(e=>e.example))}</li>)}
                </ol>
            </div>

        </div>
       
    </div>
  )
}

export default Search