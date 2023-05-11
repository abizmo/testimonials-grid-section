import './App.css';
import Card from './components/Card';
import useCards from './hooks/userCards';

function App() {
  const [cards] = useCards();

  return (
    <main>
      <section className='grid'>
        {cards.length > 0 &&
          cards.map(({ id, body, ...restProps }) => (
            <Card key={id} {...restProps}>
              {body}
            </Card>
          ))}
      </section>
    </main>
  );
}

export default App;
