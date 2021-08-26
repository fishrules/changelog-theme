import Link from 'next/link';

const Logo = () => (
	<Link href="/">
		<a title="Fish Rules Logo">
			<img className="w-64" src="https://fishrulesapp.com/images/logo-lg.png" alt="Fish Rules" />
		</a>
	</Link>
);

export default Logo;
