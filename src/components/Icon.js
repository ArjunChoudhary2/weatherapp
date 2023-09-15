import classNames from "classnames";
import { useSelector } from "react-redux";

function Icon({ weatherType, className, ...rest }) {
  const finalClassName = classNames("h-22 w-22", className);

  const imageObject = useSelector((state) => {
    return state.response.myObject;
  });
  const imagePath = imageObject.iconCode;
  return (
    <img src={imagePath} alt="My Image" className={finalClassName} {...rest} />
  );
}
export default Icon;
