import React, { FC } from 'react'
import NcImage from '@/components/NcImage/NcImage'
import SingleHeader from '@/app/(singles)/SingleHeader'

const PageSingleTemplate2 = ({}) => {
	return (
		<div className={`pt-8 lg:pt-16`}>
			{/* SINGLE HEADER */}
			<header className="container rounded-xl">
				<div className="mx-auto max-w-screen-md">
					<SingleHeader hiddenDesc />
				</div>
			</header>

			<div className="">
				<NcImage
					alt=""
					containerClassName="my-10 sm:my-12 relative aspect-w-16 aspect-h-12 md:aspect-h-9 lg:aspect-h-6"
					className="absolute inset-0 w-full object-cover"
					fill
					sizes="100vw"
					src="https://images.com/photos/347141/pexels-photo-347141.jpeg"
				/>
			</div>
		</div>
	)
}

export default PageSingleTemplate2
