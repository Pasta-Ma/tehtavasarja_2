export default = käytä, kun tiedosto vie yhden komponentin
    esim koodissa Header kutsunta -  import Header from './components/Header'

named export = käytä, kun vientiä on monta
    esim hyvä util-funktioille - import { upper } from '../utils/format'

Pienempiin tiedostoihin jakaminen helpottaa ylläpitoa ja uudelleenkäyttöä
    esim App.jsx tiedostoon luomani laskurin olisi voinut luoda erilliselle .jsx tiedostoon jota kutsua App.jsx:ssä
    importti - import Counter from './components/Counter'
    ja kutsunta - <Counter count={count} onIncrement={() => setCount(c => c + 1)} />

