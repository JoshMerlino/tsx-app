import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { MdMenu } from "react-icons/md";
import { setState } from "./Drawer";

export type ToolbarProps = { children?: ReactNode | string };

export default function Toolbar({ children }: ToolbarProps): JSX.Element {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="hover:bg-black/10 hover:active:bg-white/10 w-12 h-12 m-2 items-center flex justify-center rounded-full -mr-2 xl:hidden" onClick={ () => setState(true) }>
					<MdMenu className="text-white text-[24px]"/>
				</div>
				<h1 className="text-xl text-white leading-[4rem] px-4 select-none">
					<Link to="/">{ APP_MANIFEST.name }</Link>
					{ children && <><span className="opacity-50"> / </span> { children }</> }
				</h1>
				<div className="p-2 ml-auto">
					<ThemeToggle/>
				</div>
			</div>
		</>
	);
}
