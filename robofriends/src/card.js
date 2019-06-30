import React from 'react';

const Card = ({id,name,email}) => {
    return (
    <div>
         <img alt='Robot' src={"https://robohash.org/"+ id}/ >
         <div>
            <h2>{name}</h2>
             <p>{email}</p>
         </div>
    </div>
    );
}

export default Card;
