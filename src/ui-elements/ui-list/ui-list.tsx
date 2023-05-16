import classNames from "classnames";

export default function UiList({children, className, ...props}) {
  return (
    <ul className={classNames(className, `list`)} {...props}>
      {children}
    </ul>
  );
};