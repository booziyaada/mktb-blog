import React, { FC } from 'react'
import { PostAuthorType } from '@/data/types'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Avatar from '@/components/Avatar/Avatar'
import Link from 'next/link'

export interface CardAuthorBoxProps {
	className?: string
	author: PostAuthorType
}

const CardAuthorBox: FC<CardAuthorBoxProps> = ({ className = '', author }) => {
	const { name: displayName, href = '/', avatar, jobName, count } = author
	return (
		<Link
			href={href}
			className={`nc-CardAuthorBox flex flex-col items-center justify-center rounded-3xl bg-white px-3 py-5 text-center dark:bg-neutral-900 sm:px-6 sm:py-7 ${className}`}
		>
			<Avatar
				sizeClass="w-20 h-20 text-2xl"
				radius="rounded-full"
				imgUrl={avatar}
				userName={displayName}
			/>
			<div className="mt-3">
				<h2 className={`text-sm font-medium sm:text-base`}>
					<span className="line-clamp-1">{displayName}</span>
				</h2>
				<span
					className={`mt-1 block text-sm text-neutral-500 dark:text-neutral-400`}
				>
					@{jobName}
				</span>
			</div>
			<div className="mt-4 flex items-center justify-center rounded-full bg-neutral-100 px-4 py-2 text-xs font-medium leading-none dark:bg-neutral-800">
				{count} <ArrowRightIcon className="ms-3 h-5 w-5 text-yellow-600" />
			</div>
		</Link>
	)
}

export default CardAuthorBox
