import { LoadingWraper } from "./Loading.styles"

const Loading = () => {
  return (
    <LoadingWraper>
        <h3>Sisyphus Game</h3>
        <p >Loading Questions...</p>
        <div className="icon">?</div>
    </LoadingWraper>
  )
}

export default Loading