'use client'
import React, { FC, useState } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { IBenefitCard, PostDataType } from '@/data/types'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia'
import BenefitCardMeta from '@/components/PostCardMeta/BenefitCardMeta'
import Link from 'next/link'

export interface BenefitCardProps {
	className?: string
	post: IBenefitCard
}

const BenefitCard: FC<BenefitCardProps> = ({ className = 'h-full', post }) => {
	const { href } = post
	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className={`nc-Card10V2 relative flex flex-col ${className}`}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className="group aspect-h-12 aspect-w-16 relative z-0 block w-full flex-shrink-0 overflow-hidden rounded-3xl sm:aspect-h-9">
				<div>
					<div>{post.content}</div>
				</div>

				<Link
					href={href}
					className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
				></Link>
			</div>
			{/* <div className="absolute inset-x-3 top-3 flex items-start justify-between space-x-4 rtl:space-x-reverse">
				<CategoryBadgeList categories={categories} />
				<PostCardSaveAction />
			</div> */}

			<div className="mt-4 space-y-2.5 px-4">
				<BenefitCardMeta meta={post} />
			</div>
		</div>
	)
}

export default BenefitCard
