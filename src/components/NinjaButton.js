import React from 'react'
import PropTypes from 'prop-types'

const NinjaButton = ({
  text,
  id,
  type='submit',
  onClick
}) => {

  return (
    <input
      className='ninja-button'
      id={id}
      type={type}
      value={text}
      onClick={onClick}
    />
  )
}

NinjaButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default NinjaButton