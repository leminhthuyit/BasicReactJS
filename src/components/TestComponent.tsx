import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const TestComponent = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(456);
    navigate("/login");
  }, [])
  console.log(123);
  return (
    <div>TestComponent</div>
  )
}

export default TestComponent