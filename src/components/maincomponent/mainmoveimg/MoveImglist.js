import React from 'react'
import MovelistCard from './MovelistCard'

function MoveImglist({moveImgs,moveCurrentImgs, handleMoveCardClick}) {

    return (

<div>
<div className="test-back">
<div></div>
<div className="test">
{moveImgs && moveImgs.map((moveimg, idx) => <MovelistCard
handleMoveCardClick={handleMoveCardClick}
moveimg={moveimg} 
key={idx.id}/>)}
</div>
</div>
</div>




    )
}

export default MoveImglist