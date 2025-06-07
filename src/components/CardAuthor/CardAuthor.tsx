import React, { FC } from 'react'
import { PostAuthorType } from '@/data/types'
import Avatar from '@/components/Avatar/Avatar'
import Link from 'next/link'

export interface CardAuthorProps {
	className?: string
	author: PostAuthorType
}

const CardAuthor: FC<CardAuthorProps> = ({ className = '', author }) => {
	const { name: displayName, href = '/', avatar, jobName } = author
	return (
		<Link
			href={href}
			className={`nc-CardAuthor flex items-center ${className}`}
		>
			<Avatar
				sizeClass="h-10 w-10 text-base"
				containerClassName="flex-shrink-0 me-4"
				radius="rounded-full"
				imgUrl={avatar}
				userName={displayName}
			/>
			<div>
				<h2
					className={`text-sm font-medium text-neutral-900 dark:text-neutral-100 sm:text-base sm:font-semibold`}
				>
					{displayName}
				</h2>
				<span
					className={`mt-[2px] block text-xs text-neutral-500 dark:text-neutral-400`}
				>
					{jobName}
				</span>
			</div>
		</Link>
	)
}

export default CardAuthor
