import React from 'react'

const ObstacleTableRow = ({ results, obstacles }) => {
  if(!results || !obstacles) {
    return null
  }

  const passedCount = (obstacle) =>
    results.filter(result => result.passed_obstacles.includes(obstacle.id)).length

  return (
    <tr>
      <th>Obstacle pass-%</th>

      {obstacles.map(o =>
        <th key={o.id}>
          {Math.round(passedCount(o) / results.length * 100) / 100}
        </th>
      )}

      <th></th>
    </tr>
  )
}

export default ObstacleTableRow