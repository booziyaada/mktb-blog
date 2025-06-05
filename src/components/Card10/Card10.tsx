'use client'

import React, { FC, useState } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia'
import BenefitCardMeta from '@/components/PostCardMeta/BenefitCardMeta'
import Link from 'next/link'

export interface Card10Props {
	className?: string
	post: PostDataType
}

const Card10: FC<Card10Props> = ({ className = 'h-full', post }) => {
	const { href, categories } = post
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className={`nc-Card10 relative flex flex-col ${className}`}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link href={href} className="absolute inset-0" />
			<div className="group aspect-h-7 aspect-w-9 relative z-0 block w-full flex-shrink-0 overflow-hidden rounded-3xl sm:aspect-h-9">
				<div>
					<PostFeaturedMedia post={post} isHover={isHover} />
				</div>

				<Link
					href={href}
					className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"
				></Link>
			</div>
			<div className="absolute inset-x-3 top-3 z-10 flex items-start justify-between space-x-4 rtl:space-x-reverse">
				<CategoryBadgeList categories={categories} />
				<PostCardSaveAction hidenReadingTime />
			</div>

			<div className="mt-4 space-y-2.5 rtl:space-x-reverse">
				<BenefitCardMeta meta={post} />
			</div>
		</div>
	)
}

export default Card10
