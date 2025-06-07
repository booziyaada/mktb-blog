import React, { FC } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import CardAuthor2 from '@/components/CardAuthor2/CardAuthor2'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import Image from 'next/image'
import Link from 'next/link'

export interface Card4Props {
	className?: string
	post: PostDataType
}

const Card4: FC<Card4Props> = ({ className = 'h-full', post }) => {
	const {
		title,
		href,
		featuredImage,
		categories,
		author,
		createdAt: date,
		readingTime,
	} = post

	return (
		<div
			className={`nc-Card4 group relative flex flex-col rounded-3xl bg-white dark:bg-neutral-900 ${className}`}
		>
			<span className="aspect-h-9 aspect-w-16 relative block w-full flex-shrink-0 overflow-hidden rounded-t-xl">
				<Image
					fill
					className="object-cover"
					alt=""
					sizes="(max-width: 600px) 480px, 800px"
					src={featuredImage}
				/>
			</span>

			<Link href={href} className="absolute inset-0"></Link>

			<div className="flex flex-grow flex-col p-4">
				<div className="mb-4 space-y-2.5">
					<CategoryBadgeList categories={categories} />
					<h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
						<Link href={href} className="line-clamp-2" title={title}>
							{title}
						</Link>
					</h2>
				</div>
				<div className="mt-auto flex items-end justify-between">
					<CardAuthor2
						readingTime={readingTime}
						createdAt={date}
						author={author}
					/>
					<PostCardSaveAction hidenReadingTime />
				</div>
			</div>
		</div>
	)
}

export default Card4
