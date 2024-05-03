import { InfinitySpin } from "react-loader-spinner";
import { LoaderProps } from "./Loader.types";

const Loader: React.FC<LoaderProps> = ({
  color = "#4fa94d",
  width = 200,
  visible = true,
  ariaLabel = "infinity-spin-loading",
}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <InfinitySpin
        width={width.toString()}
        color={color}
        // visible={visible}
        // ariaLabel={ariaLabel}
      />
    </div>
  );
};

export default Loader;
