import './ui-list-item.scss'
import classNames from "classnames";

export default function UiListItem({children, className, disc = false, ...props}: {
  disc?: boolean
}) {
  return (
    <li className={classNames(className, `list-item`, {disc})} {...props}>
      {children}
    </li>
  );
};