import React from 'react';


const Card = ({id,name,email}) => {
    return (
    <div className='bg-light-green ma2 pa3 dib br3 grow bw2 shadow-5'>
         <img alt='Robot' src={"https://robohash.org/"+ id}/ >
         <div>
            <h2>{name}</h2>
             <p>{email}</p>
         </div>
    </div>
    );
}

export default Card;
