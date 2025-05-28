import React, { FC } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import { CardAuthor2Props } from './CardAuthor2'
import Link from 'next/link'

export interface CardAuthor2WhiteProps extends CardAuthor2Props {}

const CardAuthor2White: FC<CardAuthor2WhiteProps> = ({
	className = '',
	author,
	readingTime,
	createdAt: date,
}) => {
	const { name: displayName, href = '/', avatar } = author
	return (
		<Link
			href={href}
			className={`nc-CardAuthor2White relative inline-flex items-center ${className}`}
		>
			<Avatar
				sizeClass="h-10 w-10 text-base"
				containerClassName="flex-shrink-0 mr-3"
				radius="rounded-full"
				imgUrl={avatar}
				userName={displayName}
			/>
			<div>
				<h2
					className={`text-sm font-medium text-neutral-200 hover:text-white dark:text-neutral-700 dark:hover:text-black`}
				>
					{displayName}
				</h2>
				<span
					className={`mt-1 flex items-center text-xs text-neutral-300 dark:text-neutral-700`}
				>
					<span>{date}</span>
					{readingTime && (
						<>
							<span className="mx-1 opacity-0 transition-opacity group-hover:opacity-100">
								·
							</span>
							<span className="opacity-0 transition-opacity group-hover:opacity-100">
								{readingTime} min read
							</span>
						</>
					)}
				</span>
			</div>
		</Link>
	)
}

export default CardAuthor2White
