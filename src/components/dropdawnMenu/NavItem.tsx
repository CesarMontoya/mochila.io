type Props = {
    children: React.ReactNode;
}

export const NavItem = ({children}: Props) => {
  return <li className="dropdawn-nav-item"><a href="#" className="dropdawn-nav-icon">{children}</a></li>;
}
