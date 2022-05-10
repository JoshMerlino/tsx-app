import { default as classnames, default as classNames } from "classnames";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { base, icons } from "../../manifest.json";

export let setState: Dispatch<SetStateAction<boolean>>;

export default function Drawer(): JSX.Element {

	const [ open, setOpen ] = useState(false);
	setState = setOpen;

	type Props = { children?: ReactNode, to: string }
	function DrawerItem({ children, to }: Props) {
		const route = useLocation();
		const classes = classNames("h-12 rounded-r-full mr-4 text-sm font-bold font-manrope flex items-center px-4 text-zinc-800 dark:text-gray-300", route.pathname === to ? "bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20" : "hover:bg-black/20 dark:hover:bg-white/20");

		const LinkItem = ({ children }: { children?: ReactNode }) => to.toString().includes("://") ? <a href={ to } className={ classes } onClick={ () => setOpen(false) }>{ children }</a> : <Link to={ to } className={ classes } onClick={ () => setOpen(false) }>{ children }</Link>;

		return <LinkItem >{ children }</LinkItem>;
	}

	useEffect(function() {
		function keydown(event: KeyboardEvent) {
			if (event.key === "\\") {
				console.log({ open });
				setOpen(!open);
				event.preventDefault();
			}
		}
		document.addEventListener("keydown", keydown);
		return () => document.removeEventListener("keydown", keydown);
	}, [ open ]);

	return (
		<>
			<div className={ classnames("w-full fixed top-0 h-full left-0 bg-black/20 transition-opacity xl:hidden z-[9]", open ? "" : "opacity-0 pointer-events-none") } onClick={ () => setOpen(false) }></div>
			<aside className={ classnames("bg-white dark:bg-zinc-700 ease-in-out w-[300px] fixed top-0 h-full z-[10] shadow-md transition-[opacity,left] xl:left-0", open ? "left-0" : "left-[-300px]") }>
				<img src={ icons.filter(icon => icon.purpose.includes("maskable"))[0].src } alt="" className="backdrop-blur-lg bg-neutral/60 select-none rounded-full bg-black/10 max-h-[192px] mx-auto my-4" />
				<hr className="dark:border-zinc-600 mb-2" />
				<DrawerItem to="/">
					<AiOutlineHome className="text-2xl mr-3"/>
					Home
				</DrawerItem>
				<hr className="dark:border-zinc-600 my-2" />
				<h1 className="mr-4 text-sm font-medium font-manrope flex items-center px-4 text-zinc-800 dark:text-gray-300 h-12">Subheader</h1>

			</aside>
		</>
	);
}
