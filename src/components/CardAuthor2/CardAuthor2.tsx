import React, { FC } from 'react'
import { PostDataType } from '@/data/types'
import Avatar from '@/components/Avatar/Avatar'
import Link from 'next/link'

export interface CardAuthor2Props
	extends Pick<PostDataType, 'createdAt' | 'author'> {
	className?: string
	// readingTime?: PostDataType['readingTime']
	hoverReadingTime?: boolean
}

const CardAuthor2: FC<CardAuthor2Props> = ({
	className = '',
	author,
	// readingTime,
	createdAt: date,
	hoverReadingTime = true,
}) => {
	// const { name: displayName, href = '/', avatar } = author
	const { name: displayName, href } = author
	return (
		<Link
			href={href}
			className={`nc-CardAuthor2 relative inline-flex items-center ${className}`}
		>
			<Avatar
				sizeClass="h-10 w-10 text-base"
				containerClassName="flex-shrink-0 me-3"
				radius="rounded-full"
				// imgUrl={avatar}
				userName={displayName}
			/>
			<div>
				<h2
					className={`text-sm font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white`}
				>
					{displayName}
				</h2>
				<span
					className={`mt-1 flex items-center text-xs text-neutral-500 dark:text-neutral-400`}
				>
					<span>{date}</span>
					{/* {readingTime && (
						<>
							<span
								className={`mx-1 hidden transition-opacity lg:inline ${
									hoverReadingTime ? 'opacity-0 group-hover:opacity-100' : ''
								}`}
							>
								·
							</span>
							<span
								className={`hidden transition-opacity lg:inline ${
									hoverReadingTime ? 'opacity-0 group-hover:opacity-100' : ''
								}`}
							>
								{readingTime} min read
							</span>
						</>
					)} */}
				</span>
			</div>
		</Link>
	)
}

export default CardAuthor2
