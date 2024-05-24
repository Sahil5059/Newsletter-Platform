//imports
"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const Toolbar = () => {
	return (
		<>	
			{/* watch- 34:00 to 34:50 */}
			<Button
				color="primary"
				className="text-lg"
			>
				Start Trial	
			</Button>
			<Link href={"/sign-up"}>
				Login	
			</Link>	
		</>
	)
}

export default Toolbar;
