import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { getInicialPhotos, getSearchPhotos } from '../../services/api'

import * as Styled from './style'

export default function PrincipalPage() {
    const [inputValue, setInputValue] = useState()
    const [result, setResult] = useState()
    const [indexValue, setIndexValue] = useState(1)
    const [type, setType] = useState('curated')

    function handleClick() {
        setType('search')
        setIndexValue(1)
    }

    function nextPage() {
        setIndexValue(indexValue + 1)
    }

    function prevPage() {
        if(indexValue !== 1) {
            setIndexValue(indexValue - 1)
        }
    }

   useEffect(()=>{
       if(type === 'search') {
           getSearchPhotos({ searchResult: inputValue, index: indexValue, type: type })
               .then(setResult)
           console.log(type)
       }
   },[type, inputValue])
   
    useEffect(() => {
        getInicialPhotos({ index: indexValue, type: type })
            .then(setResult)
    },[])

    useEffect(()=>{
        if(type === 'search') {
            getSearchPhotos({ searchResult: inputValue, index: indexValue, type: type })
                .then(setResult)
        } else if(type === 'curated') {
            getInicialPhotos({ index: indexValue, type: type })
                .then(setResult)
        }
    },[indexValue])
    
    return(
        <>
            <Menu 
                onClick={handleClick}
                onBlur={(event) => {setInputValue(event.target.value)}}
            />
            
            <Styled.Container>
                <Styled.Content >
                    {result?.photos.map((photos, index)=> (
                        <img src={ photos.src.tiny } alt="MyGalleryPhoto" key={index} />
                    ))}
                </Styled.Content>
                <div className="buttonGroup">
                    <button onClick={prevPage}>Pagina anterior</button>
                    <button onClick={nextPage}>Proxima página</button>
                </div>
            </Styled.Container>
            <Footer />
        </>
    )
}