import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Footer(): JSX.Element {
	return (
		<footer id="footer">
			<div className="bg-zinc-900">
				<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4]">
					<div className="py-8 grow">
						<h1 className="text-3xl text-white">{ APP_MANIFEST.name }</h1>
						<p className="text-white text-xl pt-3">{ APP_MANIFEST.description }</p>
					</div>
					<div className="py-4">
						<ThemeToggle/>
					</div>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 h-12 flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] w-[1280px] px-12 z-[4]">
						Copyright © 2015 - { }<Link to="/"><span className="text-primary px-1">Josh Merlino</span></Link> - All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
}
