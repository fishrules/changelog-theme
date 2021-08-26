import { ISite, Prebuilt } from '@pinpt/react';
import Logo from '../Logo';

export interface FooterProps {
	site: ISite;
}

const Footer = (props: FooterProps) => {
	const { site } = props;
	return (
		<Prebuilt.Footer site={site} renderLogo={() => <Logo />} />
	);
};

export default Footer;
