import React from 'react'
import PropTypes from 'prop-types'

const NinjaButton = ({ text }) => {
  return (
    <input
      className='ninja-button'
      type='submit'
      value={text}
    />
  )
}

NinjaButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default NinjaButton