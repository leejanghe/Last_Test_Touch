import React,{useState,useEffect} from 'react'



function FavoriteCard({likeCard,handleDelete}) {

  // console.log('card',likeCard)

    const {image} = likeCard
    return (
        <div key={likeCard.id}>
        <div className="project">
      <video className="project__img" 
      // autoPlay="autoPlay" 
      // loop="loop" 
      src={image} alt={likeCard.title} />
        <div className="project__description">
            <h3 className="imgtext">{likeCard.title}</h3>
            <span className="imgtext">{likeCard.content}</span>
            <div className="audio" >
            <audio controls src={likeCard.sound} type="audio/mpeg" ></audio>
            <div>
            <button className="main__btn" 
            onClick={()=> handleDelete(likeCard.id)}
            >삭제하기</button>
            </div>
            </div>
        </div>
    </div>  
    </div>  
    )
}

export default FavoriteCard
