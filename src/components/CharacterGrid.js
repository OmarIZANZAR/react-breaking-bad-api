import React from 'react'
import Spiner from './Spiner'
import CharcterItem from './CharcterItem'

const CharacterGrid = ({items , isLoading}) => {
    return isLoading
    ?
    <Spiner/> 
    :
    <section className="cards">
        {items.map(item => (
            <CharcterItem key={item.char_id} item={item} />
        ))}
    </section>
}

export default CharacterGrid
