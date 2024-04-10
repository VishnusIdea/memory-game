import { useState, useRef } from 'react'
import Card from './Card'

 function Cards() {
    const [cards, setCards] = useState([
         { id: 0, name: 'image1', status: '', img: '/images/pmg1.webp' },
  { id: 0, name: 'image1', status: '', img: '/images/pmg1.webp' },
  { id: 1, name: 'image2', status: '', img: '/images/pmg2.jpg' },
  { id: 1, name: 'image2', status: '', img: '/images/pmg2.jpg' },
  { id: 2, name: 'image3', status: '', img: '/images/pmg3.jpg' },
  { id: 2, name: 'image3', status: '', img: '/images/pmg3.jpg' },
  { id: 3, name: 'image4', status: '', img: '/images/pmg4.jpg' },
  { id: 3, name: 'image4', status: '', img: '/images/pmg4.jpg' },
  { id: 4, name: 'image5', status: '', img: '/images/pmg5.jpg' },
  { id: 4, name: 'image5', status: '', img: '/images/pmg5.jpg' },
  { id: 5, name: 'image6', status: '', img: '/images/pmg6.jpg' },
  { id: 5, name: 'image6', status: '', img: '/images/pmg6.jpg' },
  { id: 6, name: 'image7', status: '', img: '/images/pmg7.jpg' },
  { id: 6, name: 'image7', status: '', img: '/images/pmg7.jpg' },
  { id: 7, name: 'image8', status: '', img: '/images/pmg8.jpg' },
  { id: 7, name: 'image8', status: '', img: '/images/pmg8.jpg' },
   ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {
        
        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched'){
                alert('Already matched')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('cards currently seleted 😇')
        }

    }

    return (
      <div className="container">
        { cards.map((card, index) => {
            return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
        })}
      </div>
    );
}

export default Cards