import classNames from 'classnames';
import { useSelector } from 'react-redux';

function Icon({ weatherType, className, ...rest }) {

  const finalClassName = classNames(
    "flex shadow bg-white p-2",
    className
  );

  const imageObject = useSelector((state) => {
    return state.response.myObject;
  })
  const imagePath = imageObject.iconCode;
  return (
    <div className={finalClassName}{...rest}>
      <img src={imagePath} alt="My Image" className="flex items-center w-25 h-25" />
    </div>
  );
}
export default Icon;
