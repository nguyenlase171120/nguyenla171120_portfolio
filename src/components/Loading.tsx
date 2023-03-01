import { styled } from "@mui/system";
import { BallTriangle } from "react-loader-spinner";

const LoadingWrapper = styled("div")({
  display: "grid",
  placeItems: "center",
  height: "100vh",
  zIndex: 100,
});
const Loading = () => {
  return (
    <LoadingWrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoadingWrapper>
  );
};

export default Loading;
