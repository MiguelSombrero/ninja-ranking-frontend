import React from 'react'
import PropTypes from 'prop-types'

const NinjaButton = ({ text, onClick }) => {
  return (
    <input
      className='ninja-button'
      type='submit'
      value={text}
      onClick={onClick}
    />
  )
}

NinjaButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default NinjaButton