import { useState } from 'react'
import axios from 'axios'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const useResource = (baseUrl) => {

  const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
  }

  const getOne = async identifier => {
    const res = await axios.get(`${baseUrl}/${identifier}`)
    return res.data
  }

  const create = async (resource) => {
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await axios.post(baseUrl, resource, config)
    return res.data
  }

  const login = async (credentials) => {
    const res = await axios.post(baseUrl, credentials)
    return res.data
  }

  const update = async (id, resource) => {
    const config = {
      headers: {
        Authorization: token
      }
    }
    const res = await axios.put(`${baseUrl}/${id}`, resource, config)
    return res.data
  }

  return  {
    create, getAll, getOne, update, login
  }
}

export const useTextField = (type, minLength, maxLength, required = false) => {
  const [value, setValue] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onInvalid = () => {
    setValidationMessage('field must be within ' + minLength + '-' + maxLength + ' characters')
  }

  const setDefaultValue = (value) => {
    setValue(value)
  }

  return [
    {
      type,
      minLength,
      maxLength,
      required,
      value,
      onChange,
      onInvalid
    },
    validationMessage,
    setDefaultValue
  ]
}