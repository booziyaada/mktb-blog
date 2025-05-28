import React, { FC } from 'react'
import NcImage from '@/components/NcImage/NcImage'
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import Link from 'next/link'

export interface Card3Props {
	className?: string
	post: PostDataType
}

const Card3: FC<Card3Props> = ({ className = 'h-full', post }) => {
	const {
		title,
		href,
		readingTime,
		featuredImage,
		desc,
		categories,
		type: postType,
	} = post

	return (
		<div
			className={`nc-Card3 group relative flex flex-row items-center ${className}`}
		>
			<div className="flex flex-grow flex-col">
				<div className="space-y-3.5">
					<CategoryBadgeList categories={categories} />
					<Link href={href} className="block">
						<h2
							className={`nc-card-title block text-sm font-medium text-neutral-900 dark:text-neutral-100 sm:text-base sm:font-semibold xl:text-lg`}
						>
							<span className="line-clamp-2" title={title}>
								{title}
							</span>
						</h2>
						<div className="hidden sm:mt-2 sm:block">
							<span className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
								{desc}
							</span>
						</div>
					</Link>

					<PostCardMeta meta={{ ...post }} />
				</div>
				<div className="mt-5 flex flex-wrap items-center justify-between">
					<PostCardLikeAndComment />
					<PostCardSaveAction readingTime={readingTime} />
				</div>
			</div>

			<div
				className={`z-0 mb-5 ms-3 block w-24 flex-shrink-0 overflow-hidden rounded-3xl sm:mb-0 sm:ms-6 sm:w-36 md:w-44 xl:w-56`}
			>
				<Link
					href={href}
					className="aspect-h-1 aspect-w-1 relative block h-0 w-full"
				>
					<NcImage
						containerClassName="absolute inset-0"
						src={featuredImage}
						fill
						alt={title}
					/>
					<span>
						<PostTypeFeaturedIcon
							className="absolute bottom-2 left-2"
							postType={postType}
							wrapSize="w-8 h-8"
							iconSize="w-4 h-4"
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Card3
