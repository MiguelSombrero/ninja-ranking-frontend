import React from 'react'

const ObstacleTableRow = ({ results, obstacles, passedRatio }) => {

  return (
    <tr>
      <th>Obstacle pass ratio</th>

      {obstacles.map(o =>
        <th key={o.id}>
          {results.length === 0 ? 0.0 : passedRatio(o)}
        </th>
      )}

      <th></th>
      <th></th>
      <th></th>
    </tr>
  )
}

export default ObstacleTableRow