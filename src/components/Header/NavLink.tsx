import { useRouter } from 'next/router';
import Link from 'next/link';

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
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
}