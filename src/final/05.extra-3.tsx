// TypeScript with React
// 💯 default prop values
// http://localhost:3000/isolated/final/05.js
import * as React from 'react'

type MathFn = (left: number, right: number) => number
type Operator = '+' | '-' | '/' | '*'
const operations: Record<Operator, MathFn> = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
}

type CalculatorProps = {
  left?: number
  right?: number
  operator?: Operator
}
function Calculator({left = 0, right = 0, operator = '+'}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} right={2} />
      <Calculator />
      <Calculator left={1} operator="*" />
      <Calculator operator="/" right={2} />
    </div>
  )
}

export default App
