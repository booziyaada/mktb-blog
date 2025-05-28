'use client'
import React, { FC, useState } from 'react'
import NcImage from '@/components/NcImage/NcImage'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia'
import CardAuthor2 from '@/components/CardAuthor2/CardAuthor2'
import Link from 'next/link'

export interface Card10V3Props {
	className?: string
	post: PostDataType
	galleryType?: 1 | 2
}

const Card10V3: FC<Card10V3Props> = ({
	className = 'h-full',
	post,
	galleryType = 1,
}) => {
	const {
		title,
		href,
		categories,
		type: postType,
		galleryImgs,
		author,
		createdAt: date,
		readingTime,
	} = post
	const [isHover, setIsHover] = useState(false)

	const renderGallery2 = () => {
		if (!galleryImgs) return null
		return (
			<div className="grid h-full w-full grid-rows-2 gap-2">
				<div className="grid grid-cols-3 gap-2">
					<NcImage
						alt=""
						fill
						containerClassName="relative col-span-2"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[0]}
					/>
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[1]}
					/>
				</div>
				<div className="grid grid-cols-3 gap-2">
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[2]}
					/>
					<NcImage
						alt=""
						fill
						containerClassName="relative col-span-2"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[3]}
					/>
				</div>
			</div>
		)
	}

	const renderGallery = () => {
		if (!galleryImgs) return null
		return (
			<div className="grid h-full w-full grid-cols-3 gap-2">
				<div className="grid">
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[0]}
					/>
				</div>
				<div className="grid grid-rows-2 gap-2">
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[1]}
					/>
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[2]}
					/>
				</div>
				<div className="grid">
					<NcImage
						alt=""
						fill
						containerClassName="relative"
						className="absolute inset-0 h-full w-full object-cover"
						src={galleryImgs[3]}
					/>
				</div>
			</div>
		)
	}

	return (
		<div
			className={`nc-Card10V3 group relative flex flex-col ${className}`}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className="group aspect-h-16 aspect-w-16 relative z-0 block w-full flex-shrink-0 overflow-hidden rounded-3xl sm:aspect-h-9">
				<div>
					{postType !== 'gallery' && !!galleryImgs?.length ? (
						<PostFeaturedMedia post={post} isHover={isHover} />
					) : galleryType === 1 ? (
						renderGallery()
					) : (
						renderGallery2()
					)}
				</div>

				<Link
					href={href}
					className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"
				></Link>
			</div>
			<div className="absolute inset-x-3 top-3 flex items-start justify-between space-x-4 rtl:space-x-reverse">
				<CategoryBadgeList categories={categories} />
				<PostCardSaveAction />
			</div>

			<div className="mt-4 space-y-2.5 px-4">
				<h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
					<Link href={href} className="line-clamp-1" title={title}>
						{title}
					</Link>
				</h2>
				<CardAuthor2
					className="mt-3"
					author={author}
					hoverReadingTime={false}
					createdAt={date}
					readingTime={readingTime}
				/>
			</div>
		</div>
	)
}

export default Card10V3
