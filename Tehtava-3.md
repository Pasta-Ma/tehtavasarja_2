Tämä osuus App.jsx tiedostossa, käyttää Controlled state.

<div className="mt-4 p-4">
  <label className="block mb-2">Kirjoita jotain:</label>
  <input
    className="input input-bordered w-full max-w-xs mb-2"
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)} // <-- controlled: value + onChange
    placeholder="Kirjoita tähän..."
  />
  <div className="mb-2">Kirjoitettu: {inputValue}</div>
  <div className="mb-2">Laskuri: {count}</div>
  <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Lisää 1</button>
</div>


Syyt käyttää Conrolled statea:
  reaaliaikainen validaatio, automaattinen muotoilu.

Syyt olla käyttämättä:
  Suorituskyky, jokainen kirjoitus lähettää renderöinnin.