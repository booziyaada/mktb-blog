'use client'

import React, { FC } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import musicWave from '@/images/musicWave.png'
import Link from 'next/link'
import Image from 'next/image'
import ButtonPlayMusicPlayer from '../ButtonPlayMusicPlayer'
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'

export interface Card16PodcastProps {
	className?: string
	post: PostDataType
	ratio?: string
}

const Card16Podcast: FC<Card16PodcastProps> = ({
	className = 'h-full',
	post,
	ratio = 'aspect-w-3 xl:aspect-w-4 aspect-h-3',
}) => {
	const { title, href, categories, desc, featuredImage, type: postType } = post
	const IS_AUDIO = postType === 'audio'

	const renderListenButtonDefault = (state?: 'playing') => {
		return (
			<div
				className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-neutral-50 text-primary-500`}
			>
				{state === 'playing' ? (
					<PauseIcon className="h-8 w-8" />
				) : (
					<PlayIcon className="ms-0.5 h-8 w-8 rtl:rotate-180" />
				)}
			</div>
		)
	}

	return (
		<div className={`nc-Card16Podcast relative flex flex-col ${className}`}>
			<Link
				href={href}
				className={`relative block w-full flex-shrink-0 overflow-hidden rounded-3xl ${ratio}`}
			>
				<Image
					fill
					alt=""
					sizes="(max-width: 600px) 480px, 800px"
					src={featuredImage}
					className="object-cover"
				/>
				<span className="bg-neutral-900 bg-opacity-30"></span>
			</Link>

			{/* ABSOLUTE */}
			<Link href={href} className="absolute inset-0"></Link>
			<span className="absolute inset-x-3 top-3">
				<CategoryBadgeList categories={categories} />
			</span>

			{/* MAIN CONTENT */}
			<div className="-mt-32 w-11/12 transform">
				<div
					className={`flex items-center space-x-4 px-5 rtl:space-x-reverse ${
						!IS_AUDIO ? 'relative z-[-1] opacity-0' : ''
					}`}
				>
					<div className={`flex-grow`}>
						<Image src={musicWave} alt="musicWave" />
					</div>
					<ButtonPlayMusicPlayer
						post={post}
						renderDefaultBtn={() => renderListenButtonDefault()}
						renderPlayingBtn={() => renderListenButtonDefault('playing')}
					/>
				</div>
				<div className="mt-5 flex flex-grow flex-col rounded-3xl rounded-ss-none bg-white p-5 shadow-xl dark:bg-neutral-900 dark:shadow-2xl">
					<h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg lg:text-xl">
						<Link href={href} className="line-clamp-1" title={title}>
							{title}
						</Link>
					</h2>
					<span className="mb-5 mt-3 block text-sm text-neutral-500 dark:text-neutral-400">
						<span className="line-clamp-2">{desc}</span>
					</span>
					<div className="mt-auto flex items-end justify-between">
						<PostCardLikeAndComment className="relative" />
						<PostCardSaveAction className="relative" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card16Podcast
