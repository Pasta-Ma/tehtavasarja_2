import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Drawer from './components/Drawer'


export default function App() {


  const [currentLanguage, setCurrentLanguage] = useState('fi')

  // Lisätään esimerkkitila: laskuri (count, setCount) oletusarvolla 0
  const [count, setCount] = useState(0)

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
          <div className="mt-4 p-4">
            <div className="mb-2">Laskuri: {count}</div>
            <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Lisää 1</button>
          </div>
        </div>
      </main>

      <Footer currentLangue={currentLanguage}></Footer>
    </Drawer>

  </>

}