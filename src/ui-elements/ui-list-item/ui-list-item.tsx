import classNames from "classnames";

export default function UiListItem({children, className, ...props}) {
  return (
    <li className={classNames(className, `list`)} {...props}>
      {children}
    </li>
  );
};