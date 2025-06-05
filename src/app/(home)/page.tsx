import React from 'react'
import SectionLargeSlider from '@/app/(home)/SectionLargeSlider'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import {
	DEMO_POSTS,
	DEMO_POSTS_AUDIO,
	DEMO_POSTS_GALLERY,
	DEMO_POSTS_VIDEO,
} from '@/data/posts'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import { DEMO_AUTHORS } from '@/data/authors'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories/SectionSliderNewCategories'
import SectionSliderPosts from '@/components/Sections/SectionSliderPosts'
import SectionMagazine1 from '@/components/Sections/SectionMagazine1'
import SectionAds from '@/components/Sections/SectionAds'
import SectionMagazine7 from '@/components/Sections/SectionMagazine7'
import SectionGridPosts from '@/components/Sections/SectionGridPosts'
import SectionMagazine8 from '@/components/Sections/SectionMagazine8'
import SectionMagazine9 from '@/components/Sections/SectionMagazine9'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox/SectionGridAuthorBox'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import SectionVideos from '@/components/Sections/SectionVideos'
import SectionLatestPosts from '@/components/Sections/SectionLatestPosts'
import SectionMagazine2 from '@/components/Sections/SectionMagazine2'
import axios from '@/utils/axios'
import { AxiosResponse } from 'axios'
import {
	Article,
	Benefit,
	IBenefitCard,
	Person,
	PostAuthorType,
	PostDataType,
} from '@/data/types'

//
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16)
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7)
//

export default async function Page() {
	const articlesData = (await axios.get<Article[]>('articles')).data
	const benefitsData = (await axios.get<Benefit[]>('benefits')).data
	const persons = (await axios.get<Person[]>('persons')).data

	const articles = articlesData.splice(0, 5).map<PostDataType>((article) => {
		return {
			...article,
			author: {
				...article.author,
				href: `/author/${article.author._id}`,
			},
			href: `/single/${article._id}`,
		}
	})

	const benefits = benefitsData.splice(0, 8).map<IBenefitCard>((benefit) => {
		return {
			...benefit,
			author: {
				...benefit.author,
				href: `/author/${benefit.author._id}`,
			},
			href: `/single/${benefit._id}`,
		}
	})

	const authors = persons.map<PostAuthorType>((person) => {
		return {
			...person,
			href: `/author/${person._id}`,
		}
	})

	return (
		<div className="nc-PageHome relative">
			<div className="container relative">
				<SectionLargeSlider
					className="pb-16 pt-10 md:py-16 lg:pb-28 lg:pt-20"
					posts={articles}
				/>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionSliderNewAuthors
						heading="உலமாக்கள்"
						subHeading="بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ"
						authors={authors.filter((_, i) => i < 10)}
					/>
				</div>

				{/* <SectionSliderNewCategories
					className="py-16 lg:py-28"
					heading="Top trending topics"
					subHeading="Discover 233 topics"
					categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
					categoryCardType="card4"
				/> */}

				{/* <div className="relative py-16">
					<BackgroundSection />
					<SectionSliderPosts
						postCardName="card9"
						heading="Explore latest audio articles"
						subHeading="Click on the icon to enjoy the music or podcast 🎧"
						posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
					/>
				</div> */}

				<SectionMagazine1 className="py-16 lg:py-28" posts={articles} />

				{/* <SectionAds /> */}

				{/* <SectionMagazine7
					className="py-16 lg:py-28"
					posts={DEMO_POSTS_GALLERY.filter((_, i) => i < 6)}
				/> */}
			</div>

			<div className="dark bg-neutral-900 text-neutral-100 dark:bg-black dark:bg-opacity-20">
				<div className="container relative">
					<SectionGridPosts
						className="py-16 lg:py-28"
						headingIsCenter
						postCardName="card10V2"
						heading="பலன்கள்"
						subHeading="وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا"
						posts={benefits}
						gridClass="md:grid-cols-2 lg:grid-cols-3"
					/>
				</div>
			</div>

			{/* <div className="container">
				<SectionMagazine8
					className="py-16 lg:py-28"
					posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
				/>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionMagazine9
						posts={DEMO_POSTS_AUDIO.filter((_, i) => i >= 6 && i < 15)}
					/>
				</div>

				<SectionGridAuthorBox
					className="py-16 lg:py-28"
					authors={authors.filter((_, i) => i < 10)}
				/>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionBecomeAnAuthor />
				</div>

				<SectionMagazine2
					className="py-16 lg:py-24"
					heading="Life styles 🎨 "
					posts={MAGAZINE2_POSTS}
				/>

				<div className="relative py-16">
					<BackgroundSection />
					<SectionSliderPosts
						postCardName="card11"
						heading="More design articles"
						subHeading="Over 1118 articles "
						posts={DEMO_POSTS.filter(
							(p, i) => i > 3 && i < 25 && p.type === 'standard',
						)}
					/>
				</div>

				<SectionSubscribe2 className="pt-16 lg:pt-28" />

				<SectionVideos className="py-16 lg:py-28" />

				<SectionLatestPosts className="pb-16 lg:pb-28" />
			</div> */}
		</div>
	)
}
