import React from 'react';
import Card from './Card'
import cardData from '../data'
import Header from './Header'

export default function App (){
    
    const cards = cardData.map((card=>{
        return <Card
                    key={card.id}
                    {...card}
        />
    }))
    
    return(
        <div className="app">
          <Header/>
          {cards}
        </div>
    )
}