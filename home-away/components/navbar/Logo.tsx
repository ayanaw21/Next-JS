import { LuTent } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";

function Logo() {
	return (
		<Button size="icon" className="">
			<Link href='/' >
				<LuTent className="w-6 h-6"/>
			</Link>
		</Button>
	);
}

export default Logo;
