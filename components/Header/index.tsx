import router from 'next/router';
import { Search, Subscribe } from '@pinpt/react';
import Logo from '../Logo';

const Header = () => (
	<>
		<div className="ml-2 sm:!ml-0 flex justify-center sm:!justify-between items-center">
			<div className="left">
				<ul className="flex items-center flex-wrap justify-center sm:justify-start">
					<li className="block my-2">
						<a
							href="https://apps.apple.com/us/app/fish-rules-2013/id597875361?ls=1"
							title="Fish Rules Apple App Store"
						>
							<img
								className="h-10"
								alt="Get it on the App Store"
								src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
							/>
						</a>
					</li>
					<li className="block my-2">
						<a
							href="https://play.google.com/store/apps/details?id=com.fishrulesapp.fishrules2013&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							title="Fish Rules Google Play Store"
						>
							<img
								className="!h-[60px]"
								alt="Get it on Google Play"
								src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
							/>
						</a>
					</li>
				</ul>
			</div>

			<div className="hidden sm:!block">
				<Search.Bar onSubmit={(value) => router.push(`/search?term=${value}`)} />
			</div>
		</div>

		<div className="mt-4 sm:!mt-8 mb-10 sm:!mb-14 flex flex-col items-center">
			<Logo />
			<Subscribe href="/subscription/subscribe" className="mt-4" />
			<div className="mt-8 sm:!hidden">
				<Search.Bar onSubmit={(value) => router.push(`/search?term=${value}`)} />
			</div>
		</div>
	</>
);

export default Header;
