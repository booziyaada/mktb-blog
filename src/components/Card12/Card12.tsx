import React, { FC } from 'react'
import NcImage from '@/components/NcImage/NcImage'
import { PostDataType } from '@/data/types'
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import Link from 'next/link'

export interface Card12Props {
	className?: string
	post: PostDataType
}

const Card12: FC<Card12Props> = ({ className = 'h-full', post }) => {
	const { title, href, featuredImage, desc, type: postType } = post

	return (
		<div className={`nc-Card12 group relative flex flex-col ${className}`}>
			<Link
				href={href}
				className="aspect-h-3 aspect-w-4 relative block h-0 w-full flex-shrink-0 flex-grow overflow-hidden rounded-3xl"
			>
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage}
					alt={title}
					fill
				/>
				<span>
					<PostTypeFeaturedIcon
						className="absolute bottom-2 start-2"
						postType={postType}
						wrapSize="w-8 h-8"
						iconSize="w-4 h-4"
					/>
				</span>
			</Link>

			<div className="mt-5 flex flex-col pe-10 sm:mt-8">
				<h2
					className={`nc-card-title block font-semibold text-neutral-900 transition-colors dark:text-neutral-100 sm:text-lg lg:text-2xl`}
				>
					<Link href={href} className="line-clamp-2" title={title}>
						{title}
					</Link>
				</h2>
				<span className="mt-4 hidden text-neutral-500 dark:text-neutral-400 sm:block">
					<span className="line-clamp-2"> {desc}</span>
				</span>
				<PostCardMeta className="mt-5 text-sm" meta={post} />
			</div>
		</div>
	)
}

export default Card12
