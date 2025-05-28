import React, { FC } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia'
import Link from 'next/link'
import Image from 'next/image'

export interface Card9Props {
	className?: string
	ratio?: string
	post: PostDataType
	hoverClass?: string
}

const Card9: FC<Card9Props> = ({
	className = 'h-full',
	ratio = 'aspect-w-3 aspect-h-3 sm:aspect-h-4',
	post,
	hoverClass = '',
}) => {
	const {
		title,
		href,
		featuredImage,
		categories,
		author,
		createdAt: date,
		type: postType,
	} = post

	const renderMeta = () => {
		return (
			<div className="inline-flex items-center text-xs text-neutral-300">
				<div className="block">
					<h2 className="block text-base font-semibold text-white sm:text-lg">
						<span className="line-clamp-2" title={title}>
							{title}
						</span>
					</h2>
					<Link href={author.href} className="relative mt-2.5 flex">
						<span className="block truncate font-medium text-neutral-200 hover:text-white">
							{author.name}
						</span>
						<span className="mx-[6px] font-medium">·</span>
						<span className="truncate font-normal">{date}</span>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div
			className={`nc-Card9 group relative z-0 flex flex-col overflow-hidden rounded-3xl ${hoverClass} ${className}`}
		>
			<div className="absolute inset-x-0 top-0 z-[-1] flex items-center justify-between p-3 opacity-0 transition-all duration-300 group-hover:z-10 group-hover:opacity-100">
				<PostCardLikeAndComment className="relative" />
				<PostCardSaveAction hidenReadingTime className="relative" />
			</div>
			<div className={`relative flex w-full items-start ${ratio}`}></div>
			{postType === 'audio' ? (
				<div className="absolute inset-0">
					<PostFeaturedMedia post={post} />
				</div>
			) : (
				<Link href={href}>
					<Image
						fill
						alt=""
						className="h-full w-full rounded-3xl object-cover"
						src={featuredImage}
						sizes="(max-width: 600px) 480px, 500px"
					/>
					<PostTypeFeaturedIcon
						className="absolute left-3 top-3 group-hover:hidden"
						postType={postType}
						wrapSize="w-7 h-7"
						iconSize="w-4 h-4"
					/>
					<span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
				</Link>
			)}
			<Link
				href={href}
				className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-50"
			></Link>
			<div className="absolute inset-x-0 bottom-0 flex flex-grow flex-col p-4">
				<Link href={href} className="absolute inset-0"></Link>
				<div className="mb-3">
					<CategoryBadgeList categories={categories} />
				</div>
				{renderMeta()}
			</div>
		</div>
	)
}

export default Card9
