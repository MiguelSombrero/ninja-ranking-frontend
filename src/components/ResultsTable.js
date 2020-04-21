import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import ResultTableRow from './ResultTableRow'

const Results = ({ obstacles, players }) => {
  const byPassedObstacles = (r1, r2) => r1.passed_obstacles.length > r2.passed_obstacles.length ? -1 : 1
  const byTime = (r1, r2) => r1.time > r2.time ? 1 : -1

  const results = players
    .map(player => player.results
      .map(result => Object.assign(result, { nickname: player.nickname }))
    )
    .flat()
    .sort(byPassedObstacles && byTime)

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
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {results.map(p =>
              <ResultTableRow
                key={p.id}
                result={p}
                obstacles={obstacles}
              />
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default Results