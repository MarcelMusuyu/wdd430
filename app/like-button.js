'use client'; //to make the LikeButton a Client Component
import { useState } from 'react';
export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    function handleClick() {
        if(window.confirm('Do you want to increment the like count?')) {
            setLikes(likes + 1);
            
        }else {
            alert('cancelled')
        } ;
      }
   
    return <button onClick={handleClick}>Like ({likes})</button>;
  }