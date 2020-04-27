import React from 'react'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const ResultTableRow = ({ result, obstacles }) => {

  const obstacleIsPassed = (result, obstacle) => result.passed_obstacles.includes(obstacle.id)

  return (
    <tr>
      <td>{result.nickname}</td>

      {obstacles.map(o =>
        <td key={o.id}>
          {obstacleIsPassed(result, o)
            ? <FaCheckCircle color='green' />
            : <FaExclamationCircle color='red' />
          }
        </td>
      )}

      <td>{result.passed_obstacles.length}</td>
      <td>{result.time}</td>
      <td>{result.not_passed}</td>
    </tr>
  )
}

export default ResultTableRow