import React from 'react'
import ModalCategories from '../../ModalCategories'
import ModalTags from '../../ModalTags'
import { DEMO_POSTS_AUDIO } from '@/data/posts'
import { PostDataType } from '@/data/types'
import { DEMO_CATEGORIES, DEMO_TAGS } from '@/data/taxonomies'
import { DEMO_AUTHORS } from '@/data/authors'
import Pagination from '@/components/Pagination/Pagination'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import NcImage from '@/components/NcImage/NcImage'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import Card16Podcast from '@/components/Card16Podcast/Card16Podcast'
import Card15Podcast from '@/components/Card15Podcast/Card15Podcast'

const PageArchiveAudio = ({}) => {
	const FILTERS = [
		{ name: 'Most Recent' },
		{ name: 'Curated by Admin' },
		{ name: 'Most Appreciated' },
		{ name: 'Most Discussed' },
		{ name: 'Most Viewed' },
	]

	const renderSection = (sectionPosts: PostDataType[]) => {
		const loopPosts = sectionPosts.filter((_, i) => i > 2)
		return (
			<div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8 lg:mt-10 lg:grid-cols-3">
				<Card16Podcast post={sectionPosts[0]} />
				<Card16Podcast post={sectionPosts[1]} />
				<Card16Podcast post={sectionPosts[2]} />
				<div className="md:col-span-2 lg:col-span-3">
					<div className={`grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3`}>
						{loopPosts.map((p, i) => (
							<Card15Podcast key={i} post={p} />
						))}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={`nc-PageArchiveAudio`}>
			{/* HEADER */}
			<div className="mx-auto w-full px-2 xl:max-w-screen-2xl">
				<div className="aspect-h-12 aspect-w-16 relative z-0 overflow-hidden rounded-3xl sm:aspect-h-7 lg:aspect-h-6 xl:aspect-h-5 2xl:aspect-h-4">
					<NcImage
						alt="archive"
						fill
						containerClassName="absolute inset-0"
						src="https://images.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						className="h-full w-full object-cover"
						sizes="(max-width: 1280px) 100vw, 1536px"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
						<h2 className="ml-3 inline-block align-middle text-5xl font-semibold md:text-7xl">
							Podcast
						</h2>
						<span className="mt-4 block text-neutral-300">122 Podcast</span>
					</div>
				</div>
			</div>
			{/* ====================== END HEADER ====================== */}

			<div className="container space-y-16 py-16 lg:space-y-28 lg:pb-28 lg:pt-20">
				<div>
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<div className="flex space-x-2.5 rtl:space-x-reverse">
							<ModalCategories categories={DEMO_CATEGORIES} />
							<ModalTags tags={DEMO_TAGS} />
						</div>
						<div className="my-4 block w-full border-b border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
						<div className="flex justify-end">
							<ArchiveFilterListBox lists={FILTERS} />
						</div>
					</div>

					{/* LOOP ITEMS */}
					{renderSection(DEMO_POSTS_AUDIO.filter((_, i) => i < 29))}

					{/* PAGINATIONS */}
					<div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 lg:mt-16">
						<Pagination />
						<ButtonPrimary>Show me more</ButtonPrimary>
					</div>
				</div>

				{/* MORE SECTIONS */}
				{/* === SECTION 5 === */}
				<div className="relative py-16">
					<BackgroundSection />
					<SectionSliderNewAuthors
						heading="Top elite authors"
						subHeading="Discover our elite writers"
						authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
					/>
				</div>

				{/* SUBCRIBES */}
				<SectionSubscribe2 />
			</div>
		</div>
	)
}

export default PageArchiveAudio
