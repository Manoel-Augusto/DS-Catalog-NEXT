import Link from 'next/link'
import { NavLinkProps } from '../../@types';
import { returnSelect } from '../../utils';
const NavbarLink = ({target, label}:NavLinkProps)=>{
    return(
        <Link href={target}>
        <a className={returnSelect(target)}>{label}</a>
        </Link>
    )
}
export default NavbarLink;