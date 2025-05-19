
import { useState } from 'react';
const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

import LikeButton from './like-button';
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
function Header ({title}){
    return <h1>{title ? title : "Default Title"}</h1>;
}
root.render(<HomePage />);  