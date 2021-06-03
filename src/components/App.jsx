import '../styles/index.scss'
import Recipes from './Recipes'
import drive from '../images/Drive_001.svg'
import Drive2 from '../images/Drive_002.svg'

function App() {
  return (
    <>
      <section className="hero">

      </section>
      <main>
        <section>
          <h1>Hai React..........</h1>
        </section>
        <img src={drive} alt="" srcset="" />
        {/* <Drive2 /> */}
      </main>

      <Recipes />
    </>
  )
}

export default App
