import { useEffect } from 'react'

export default function ChildExample({ value, onIncrement, children }) {
  // Logataan aina kun parentin välittämä prop 'value' muuttuu
  useEffect(() => {
    console.log('ChildExample: prop "value" changed:', value)
  }, [value])

  return (
    <div className="p-4 border rounded">
      <div>Child value (saatu parentilta): {value}</div>
      <div className="mt-2">{children}</div>
      <button className="btn btn-secondary mt-2" onClick={onIncrement}>Increment from Child</button>
    </div>
  )
}