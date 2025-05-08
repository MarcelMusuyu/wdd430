const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);


function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    if(window.confirm('Do you want to increment the like count?')) {
        setLikes(likes + 1);
        
    }else {
        alert('cancelled')
    } ;
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
       <button onClick={handleClick}>Like {likes}</button>
    </div>
  );
}
function Header ({title}){
    return <h1>{title ? title : "Default Title"}</h1>;
}
root.render(<HomePage />);  