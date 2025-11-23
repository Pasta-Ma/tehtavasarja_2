import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Drawer from './components/Drawer'
import ChildExample from './components/ChildExample'
import useWindowWidth from './hooks/useWindowWidth'


// TODO: Signals were found not to be working properly, we'll come back to this!
// Docs: https://preactjs.com/guide/v10/signals

export default function App() {


  const windowWidth = useWindowWidth()

  // Simple custom language switch for the links, currently applied only to Footer
  // Check links.js and Footer.jsx for more context
  // Proper destructuring naming: (arvo, setArvo)
  const [currentLanguage, setCurrentLanguage] = useState('fi')

  // Lisätään esimerkkitila: laskuri (count, setCount) oletusarvolla 0
  const [count, setCount] = useState(0)

  // Esimerkkitila tekstikentälle: value + setValue
  const [inputValue, setInputValue] = useState('')

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'fi' ? 'en' : 'fi')
  }

  return <>
    {/* Check the Drawer.jsx for more context! */}
    <Drawer>
      <Header toggleLangue={toggleLanguage} currentLangue={currentLanguage}></Header>
      <main className="h-screen">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
          {/* Esimerkkilaskuri joka näytää tilan ja päivittää sen setCount:illa. demonstrointi set funktion käytöstä */}

          {/* Tekstikenttä: value muutoksen kuuntelu onChange:lla */}

          <div className="mt-4 p-4">
            <label className="block mb-2">Kirjoita jotain:</label>
            <input
              className="input input-bordered w-full max-w-xs mb-2"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // value-change listener
              placeholder="Kirjoita tähän..."
            />
            <div className="mb-2">Kirjoitettu: {inputValue}</div>
            <div className="mb-2">Laskuri: {count}</div>

            {/* Klikkauksen kuuntelija (onClick) päivittää laskuria */}

            <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Lisää 1</button>
          </div>

          {/* Tehtävä 6: Parent välittää count-propin ChildExample-komponentille- kun count muuttuum ChildExample useEffect tuottaa konsoliin.*/}
         <div className="mt-6">
          <ChildExample value={count} onIncrement={() => setCount(c => c + 1)}>
             <div>Children: Tämä renderöidään ChildExample-komponentin kautta.</div>
           </ChildExample>
          </div>

          {/* Tehtävä 7: Ikkunan leveyden näyttäminen ja Hook */}
          <div className="mt-4 p-4">
            <div className="mb-2">Laskuri: {count}</div>
            <div className="mb-2">Ikkunan leveys: {windowWidth}px</div> {/* renderöinti varmistaa hookin toimivuuden */}
            <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Lisää 1</button>
          </div>

        </div>
      </main>

      <Footer currentLangue={currentLanguage}></Footer>
    </Drawer>

  </>
}