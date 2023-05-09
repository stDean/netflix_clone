import { LockBody, Picture, ReleaseBody, Spinner } from "./loading.styles";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  )
}

export default Loading

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

