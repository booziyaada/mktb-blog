import React, { FC } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import { PostDataType } from '@/data/types'
import Link from 'next/link'

export interface PostCardMetaProps {
	className?: string
	meta: Pick<PostDataType, 'createdAt' | 'author'>
	hiddenAvatar?: boolean
	avatarSize?: string
}

const PostCardMeta: FC<PostCardMetaProps> = ({
	className = 'leading-none text-xs',
	meta,
	hiddenAvatar = false,
	avatarSize = 'h-7 w-7 text-sm',
}) => {
	const { createdAt: date, author } = meta

	return (
		<div
			className={`nc-PostCardMeta inline-flex flex-wrap items-center text-neutral-800 dark:text-neutral-200 ${className}`}
		>
			<Link
				href={author.href}
				className="relative flex items-center space-x-2 rtl:space-x-reverse"
			>
				{!hiddenAvatar && (
					<Avatar
						radius="rounded-full"
						sizeClass={avatarSize}
						// imgUrl={author.avatar}
						userName={author.name}
					/>
				)}
				<span className="block font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
					{author.name}
				</span>
			</Link>
			<>
				<span className="mx-[6px] font-medium text-neutral-500 dark:text-neutral-400">
					·
				</span>
				<span className="font-normal text-neutral-500 dark:text-neutral-400">
					{date}
				</span>
			</>
		</div>
	)
}

export default PostCardMeta
