import React, { FC } from 'react'
import { PostDataType } from '@/data/types'
import HeaderFilter from './HeaderFilter'
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'
import CardAuthor2 from '@/components/CardAuthor2/CardAuthor2'
import Image from 'next/image'
import Link from 'next/link'
import { DEMO_POSTS } from '@/data/posts'

const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16)

export interface SectionMagazine6Props {
	posts?: PostDataType[]
	heading?: string
	className?: string
}

const SectionMagazine6: FC<SectionMagazine6Props> = ({
	posts = MAGAZINE1_POSTS,
	heading = 'Latest Articles 🎈 ',
	className = '',
}) => {
	const renderMain = () => {
		const {
			featuredImage,
			author,
			title,
			createdAt: date,
			desc,
			href,
			readingTime,
		} = posts[0]
		const subPosts = posts.filter((_, i) => i > 0)
		return (
			<main className="relative">
				{/* Image */}
				<div className="aspect-h-9 aspect-w-9 overflow-hidden rounded-3xl md:aspect-h-5 lg:rounded-[40px]">
					<Image
						fill
						alt=""
						sizes="(max-width: 1024px) 100vw, 1280px"
						src={featuredImage}
						className="object-cover"
					/>
					<div>
						<span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"></span>
					</div>

					{/* CONTENT */}
					<div className="dark group absolute flex max-w-2xl flex-col justify-end p-5 md:w-1/2 lg:w-2/3 lg:p-14">
						<div className="">
							<h2 className="text-base font-semibold text-white hover:text-neutral-300 md:text-xl lg:text-2xl xl:text-3xl">
								<Link href={href} className="line-clamp-3">
									{title}
								</Link>
							</h2>
							<span className="mt-5 hidden text-base text-neutral-200 lg:block">
								{desc}
							</span>
						</div>

						<div className="mt-7">
							<CardAuthor2
								readingTime={readingTime}
								createdAt={date}
								author={author}
							/>
						</div>
					</div>
				</div>

				{/* RIGHT */}
				<div className="mt-5 h-96 overflow-hidden rounded-3xl bg-neutral-100 p-5 dark:bg-neutral-800 md:absolute md:bottom-3 md:end-3 md:top-3 md:mt-0 md:h-auto md:w-1/2 md:bg-white md:dark:bg-neutral-900 lg:w-1/3 lg:rounded-[34px] lg:p-8 xl:bg-opacity-80 xl:backdrop-blur-xl xl:backdrop-filter xl:dark:bg-opacity-80">
					<div className="hiddenScrollbar flow-root h-full w-full overflow-y-auto">
						<div className="-my-5 divide-y divide-neutral-200 dark:divide-neutral-700 md:-my-7">
							{subPosts.map((post, i) => (
								<div key={i} className="block py-5 lg:py-7">
									<h2 className="nc-card-title text-sm font-semibold lg:text-base">
										<Link href={post.href} className="line-clamp-2">
											{post.title}
										</Link>
									</h2>
									<PostCardMeta
										className="mt-4 text-xs sm:text-sm"
										meta={post}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		)
	}

	return (
		<div className={`nc-SectionMagazine6 ${className}`}>
			<HeaderFilter heading={heading} />
			{posts[0] && renderMain()}
		</div>
	)
}

export default SectionMagazine6
