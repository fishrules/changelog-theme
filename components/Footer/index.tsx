import { ISite, PrebuiltFooter } from '@pinpt/react';
import Logo from '../Logo';

export interface FooterProps {
	site: ISite;
}

const Footer = (props: FooterProps) => {
	const { site } = props;
	return (
		<PrebuiltFooter site={site} renderLogo={() => <Logo />} />
	);
};

export default Footer;
