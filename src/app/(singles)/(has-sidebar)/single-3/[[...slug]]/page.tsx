import React from 'react'
import Image from 'next/image'
import SingleHeader from '@/app/(singles)/SingleHeader'

const PageSingleTemplate3 = ({}) => {
	return (
		<header className="relative z-10 bg-neutral-900 pt-16 dark:bg-black md:py-20 lg:py-28">
			{/* SINGLE HEADER */}
			<div className="dark container relative z-10">
				<div className="max-w-screen-md">
					<SingleHeader hiddenDesc />
				</div>
			</div>

			{/* FEATURED IMAGE */}
			<div className="mt-8 md:absolute md:bottom-0 md:end-0 md:top-0 md:mt-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
				<div className="absolute bottom-0 start-0 top-0 hidden w-1/5 bg-gradient-to-r from-neutral-900 dark:from-black md:block rtl:bg-gradient-to-l"></div>
				<Image
					className="block h-full w-full object-cover"
					src="https://images.com/photo-1554941068-a252680d25d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
					alt=""
					width={1635}
					height={774}
					sizes="(max-width: 1024px) 100vw, 1240px"
				/>
			</div>
		</header>
	)
}

export default PageSingleTemplate3
