import { useRouter } from 'next/router';
import Link from 'next/link';

import { Link as LinkS } from 'react-scroll';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  toggle?: () => void;
  includes?: boolean;
}

export function NavLink({ title, path, toggle, includes = false }: NavLinkProps) {
  const router = useRouter();

  function verifyIfActive() {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer isActive={isActive} onClick={toggle}>
      {title.includes('Home') || title.includes('Coffees') ? (
        <Link href={path}>{title}</Link>
      ) : (
        <LinkS
          to={path}
          href={`#${path}`}
          spy={true}
          smooth={true} 
          offset={-80} 
          duration={800}
        >{title}</LinkS>
      )}
    </NavLinkContainer>
  );
}