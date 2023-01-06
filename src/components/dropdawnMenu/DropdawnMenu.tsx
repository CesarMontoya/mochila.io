import '../../styles/components/dropdawnMenu.scss';

type Props = {
	children: React.ReactNode;
};

export const DropdawnMenu = ({children}: Props) => {
  return (
    <nav className="dropdawn"><ul className="dropdawn-nav">{children}</ul></nav>
  )
}
