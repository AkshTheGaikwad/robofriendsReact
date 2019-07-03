import React from 'react';
import Card from './card';

const CardList = ({robots}) => {
    return (
        <div>
        {

            robots.map((user,i)=> {
                return (
                   <Card
                   key ={robots[i].id}
                   id ={robots[i].id}
                   name = {robots[i].name}
                   email ={robots[i].email} />

                    );
            })
        }

        </div>


         //   <Card id ={robots[2].id} name = {robots[2].name} email ={robots[2].email}/>


     );


}
export default CardList;
