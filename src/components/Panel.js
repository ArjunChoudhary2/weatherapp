import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassName = classNames(
    " border rounded p-3 shadow w-full p-6 max-w-sm mx-auto bg-blue-500  rounded-xl dark:bg-slate-700 dark:text-white",
    className
  );

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
