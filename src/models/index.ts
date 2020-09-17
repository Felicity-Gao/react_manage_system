import { useState, useCallback } from 'react'
export default function useAuthModel() {
  const [message, setMessage] = useState({ message: '我是model' })
  const update = useCallback((account, password) => {
    // signin implementation
    setMessage({ message: '我被改掉了' })
  }, [])
  return {
    message,
    update
  }
}