import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const TestComponent = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [])
  return (
    <div>TestComponent</div>
  )
}

export default TestComponent