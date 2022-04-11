import { useLocation } from "react-router-dom"

export const Preview = () => {
  const { state } = useLocation();
  const { personal, education, experience } = state;

  return (
    <div>
      {personal.fName}
    </div>
  )
}
