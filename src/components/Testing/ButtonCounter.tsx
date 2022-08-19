import React from 'react'

export const ButtonCounter: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div role="contentInfo">Count is {count}</div>
    </div>
  )
}
