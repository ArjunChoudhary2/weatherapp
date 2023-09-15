import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassName = classNames(
    " border rounded p-3 shadow w-full p-6 max-w-sm mx-auto bg-slate-700 rounded-xl",
    className
  );

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
