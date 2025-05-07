const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
function Header ({title}){
    return <h1>{title ? title : "Default Title"}</h1>;
}
root.render(<HomePage />);  