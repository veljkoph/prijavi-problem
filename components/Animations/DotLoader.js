import React from "react";
import LottieView from "lottie-react-native";

const DotLoader = () => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current.play(30, 57);
  }, []);

  return (
    <LottieView
      ref={animation}
      style={{ width: 70, height: 70, alignSelf: "center" }}
      source={require("../../assets/animations/greenCircle.json")}
      autoPlay={true}
    />
  );
};

export default DotLoader;
