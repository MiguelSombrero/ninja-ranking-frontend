import React from 'react'

const ObstacleTableRow = ({ results, obstacles }) => {

  const passedCount = (obstacle) =>
    results.filter(result => result.passed_obstacles.includes(obstacle.id)).length

  const passedRatio = (obstacle) =>
    Math.round(passedCount(obstacle) / results.length * 100) / 100

  return (
    <tr>
      <th>Obstacle pass-%</th>

      {obstacles.map(o =>
        <th key={o.id}>
          {results.length === 0 ? 0.0 : passedRatio(o)}
        </th>
      )}

      <th></th>
    </tr>
  )
}

export default ObstacleTableRow