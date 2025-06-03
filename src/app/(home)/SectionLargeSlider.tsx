'use client'

import CardLarge1 from '@/components/CardLarge1/CardLarge1'
import Heading from '@/components/Heading/Heading'
import NcImage from '@/components/NcImage/NcImage'
import { PostDataType } from '@/data/types'
import { title } from 'process'
import React, { FC, useState } from 'react'

export interface SectionLargeSliderProps {
	className?: string
	heading?: string
	posts: PostDataType[]
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
	posts,
	heading = 'உலமாக்களின் வார்த்தைகள் தமிழ் மொழியில்',
	className = '',
}) => {
	const [indexActive, setIndexActive] = useState(0)

	const handleClickNext = () => {
		setIndexActive((state) => {
			if (state >= posts.length - 1) {
				return 0
			}
			return state + 1
		})
	}

	const handleClickPrev = () => {
		setIndexActive((state) => {
			if (state === 0) {
				return posts.length - 1
			}
			return state - 1
		})
	}

	return (
		<div className={`nc-SectionLargeSlider relative ${className}`}>
			{!!heading && (
				<Heading desc="மக்தபாஹ் அஸ்ஸுன்னாஹ் வஸ்ஸலஃபிய்யாஹ்">{heading}</Heading>
			)}
			<div className="flex flex-row-reverse">
				<div className="nc-CardLarge1__right relative block w-full md:w-4/5 lg:w-2/3">
					<NcImage
						containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
						className="absolute inset-0 rounded-3xl object-cover"
						src={'/quran_light.avif'}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						priority
					/>
				</div>
			</div>
			{posts.map((item, index) => {
				if (indexActive !== index) return null
				return (
					<CardLarge1
						key={index}
						onClickNext={handleClickNext}
						onClickPrev={handleClickPrev}
						post={item}
					/>
				)
			})}
		</div>
	)
}

export default SectionLargeSlider
