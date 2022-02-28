import React from 'react';
import Info from '../Info.json'
import { useState } from 'react';

const QuoteBox = () => {

const colors = ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6', 
'#E6B333', '#3366E6', '#999966']

    const [user, setUser] = useState(Info[random()])

    const changeUser = () =>{         
        
        setUser (Info[random()])        
        
    }

    const changeColor =  colors[Math.floor(Math.random()*colors.length)] 

    document.body.style = `background: ${changeColor}`

    return (
        <div className='content' style={{color:changeColor}} >
            
            <div className='text'>             
                <div><i class="fa-solid fa-quote-left quoote"></i></div>
                <p>{user.quote}</p>
            </div>            
            <p className='author'><em>{user.author}</em></p>
            <div className='bt'><button onClick={changeUser} style={{background:changeColor}} ><i class="fa-solid fa-angle-right angle"></i></button> </div> 
          {/* 
            <div className='content-principal'>
            <div className='quote'>
                <i class="fa-solid fa-quote-left quoote"></i>
                <p className='text'>{user.quote}</p>
                
                </div>            
            <p className='author'><em>{user.author}</em></p> 
            
            <button onClick={changeUser} style={{background:changeColor}} ><i class="fa-solid fa-angle-right angle"></i></button> 

            </div> */
            }

        
        </div>
    );
};

const random = () =>  Math.floor(Math.random()*Info.length) 

export default QuoteBox;