import React, { FC } from 'react'
import Card2 from '@/components/Card2/Card2'
import { PostDataType } from '@/data/types'
import Card6 from '@/components/Card6/Card6'
import HeaderFilter from './HeaderFilter'

export interface SectionMagazine1Props {
	posts: PostDataType[]
	heading?: string
	className?: string
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
	posts,
	heading = 'Latest Articles 🎈 ',
	className = '',
}) => {
	return (
		<div className={`nc-SectionMagazine1 ${className}`}>
			<HeaderFilter
				heading={'கட்டுரைகள்'}
				desc="وَفِي نُسْخَتِهَا هُدًى وَرَحْمَةٌ لِّلَّذِينَ هُمْ لِرَبِّهِمْ يَرْهَبُونَ"
			/>
			{!posts.length && <span>Nothing we found!</span>}
			<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
				{posts[0] && <Card2 size="large" post={posts[0]} />}
				<div className="grid gap-6 md:gap-8">
					{posts
						.filter((_, i) => i < 4 && i > 0)
						.map((item, index) => (
							<Card6 key={index} post={item} />
						))}
				</div>
			</div>
		</div>
	)
}

export default SectionMagazine1
