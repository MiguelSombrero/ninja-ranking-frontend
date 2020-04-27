import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import ResultTableRow from './ResultTableRow'
import ObstacleTableRow from './ObstacleTableRow'

const Results = ({ obstacles, players }) => {
  const byPassedObstacles = (r1, r2) => r1.passed_obstacles.length > r2.passed_obstacles.length ? -1 : 1
  const byNotPassedObstacles = (r1, r2) => r1.not_passed > r2.not_passed ? 1 : -1
  const byTime = (r1, r2) => r1.time > r2.time ? 1 : -1

  const results = players
    .map(player => player.results
      .map(result => Object.assign(result, {
        nickname: player.nickname
      }))
    )
    .flat()

  const obstacleIsPassed = (result, obstacle) =>
    result.passed_obstacles.includes(obstacle.id)

  const passedCount = (obstacle) =>
    results.filter(result => obstacleIsPassed(result, obstacle)).length

  const passedRatio = (obstacle) =>
    Math.round(passedCount(obstacle) / results.length * 100) / 100

  const notPassedObstaclesInResult = result => {
    return obstacles
      .filter(obstacle => !obstacleIsPassed(result, obstacle))
      .reduce((sum, current) => sum + results.length - passedCount(current), 0)
  }

  const resultsToView = results
    .map(result => Object.assign(result, {
      not_passed: notPassedObstaclesInResult(result)
    }))
    .sort(byTime && byPassedObstacles && byNotPassedObstacles)

  return (
    <Row>
      <Col>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Player</th>

              {obstacles.map(o =>
                <th key={o.id} >{o.name}</th>
              )}

              <th>Passed count</th>
              <th>Time</th>
              <th>Not passed</th>
            </tr>
          </thead>
          <tbody>
            {resultsToView.map(p =>
              <ResultTableRow
                key={p.id}
                result={p}
                obstacles={obstacles}
              />
            )}
          </tbody>
          <thead>
            <ObstacleTableRow
              results={resultsToView}
              obstacles={obstacles}
              passedRatio={passedRatio}
            />
          </thead>
        </Table>
      </Col>
    </Row>
  )
}

export default Results