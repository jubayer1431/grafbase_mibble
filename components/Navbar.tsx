import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';

const Navbar = () => {
	let session = false;
	return (
		<nav className='flexBetween navbar'>
			<div className='flex-1 flexStart gap-10'>
				<Link href={'/'}>
					<Image src={'/logo.svg'} alt='Mibble' width={115} height={43} />
				</Link>
				<ul className='gap-7 xl:flex hidden text-small'>
					{NavLinks.map((navLink) => (
						<Link href={navLink.href} key={navLink.key}>
							{navLink.text}
						</Link>
					))}
				</ul>
			</div>
			<div className='gap-4 flexCenter'>
				{session ? (
					<>
						UserPhoto <Link href={'create-project'}>Share Work</Link>
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</nav>
	);
};

export default Navbar;
