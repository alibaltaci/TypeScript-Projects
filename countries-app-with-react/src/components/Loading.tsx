import { FunctionComponent, ReactNode } from "react"

interface ILoading {
    loading: boolean;
    children: ReactNode;
}

const Loading: FunctionComponent<ILoading> = (props) => {
    const {loading, children} = props
  return (
    <>
        {loading ? "Loading..." : children}
    </>
  )
}

export default Loading