//imports

const PricingCard = ({ active }: { active: string }) => {
	return (
		<div className="w-full md:flex items-start justify-around py-8">
			{/* free plan */}
			<div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36"
					height="33"
					fill="string"
					className="mb-4"
				>
					<path
						fill="#fff"
						stroke="#3843D0"
						strokeWidth="3"
						d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
					></path>
				</svg>
			</div>
		</div>
	)
}

export default PricingCard;
