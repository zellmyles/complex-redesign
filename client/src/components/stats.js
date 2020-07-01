import React from 'react'
import { Statistic } from 'semantic-ui-react'
import { FormHelperText } from '@material-ui/core'

const vel = {
    marginBottom: '40px',
    marginTop: '70px',
    border: '5px solid pink',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: 'pink',
    borderRadius: '20px',
}

const vell = {
    color: 'white', 
    fontWeight: 'bolder',
    fontSize: '30px',
    textShadow: '0px 1px black',

}
const StatisticExampleGroup = () => (
  <div style={vel}>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value style={vell}>2,302</Statistic.Value>
        <Statistic.Label>Faves</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value style={vell}>31,200</Statistic.Value>
        <Statistic.Label>Views</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value style={vell}>750</Statistic.Value>
        <Statistic.Label>Shares</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
)

export default StatisticExampleGroup
