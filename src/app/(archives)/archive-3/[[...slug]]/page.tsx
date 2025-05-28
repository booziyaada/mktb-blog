import React from 'react'
import ModalCategories from '../../ModalCategories'
import ModalTags from '../../ModalTags'
import { DEMO_POSTS_VIDEO } from '@/data/posts'
import { DEMO_CATEGORIES, DEMO_TAGS } from '@/data/taxonomies'
import { DEMO_AUTHORS } from '@/data/authors'
import Pagination from '@/components/Pagination/Pagination'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox'
import ButtonSecondary from '@/components/Button/ButtonSecondary'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import Card10V2 from '@/components/Card10/Card10V2'

const PageArchiveVideo = ({}) => {
	const FILTERS = [
		{ name: 'Most Recent' },
		{ name: 'Curated by Admin' },
		{ name: 'Most Appreciated' },
		{ name: 'Most Discussed' },
		{ name: 'Most Viewed' },
	]

	return (
		<div className={`nc-PageArchiveVideo`}>
			<div className="dark bg-neutral-900/95 text-white">
				<div className="container py-16 lg:py-28">
					{/* HEADER */}
					<h2 className="inline-block align-middle text-5xl font-semibold md:text-6xl">
						Videos
					</h2>
					<span className="mt-4 block text-neutral-300">1100 Videos</span>
					{/* ====================== END HEADER ====================== */}
					<div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<div className="flex space-x-2.5 rtl:space-x-reverse">
							<ModalCategories categories={DEMO_CATEGORIES} />
							<ModalTags tags={DEMO_TAGS} />
						</div>
						<div className="my-4 block w-full border-b border-neutral-500 sm:hidden"></div>
						<div className="flex justify-end">
							<ArchiveFilterListBox lists={FILTERS} />
						</div>
					</div>

					{/* LOOP ITEMS */}
					<div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-10 lg:grid-cols-3">
						{DEMO_POSTS_VIDEO.map((post) => (
							<Card10V2 key={post._id} post={post} />
						))}
					</div>

					{/* PAGINATIONS */}
					<div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 lg:mt-16 rtl:space-x-reverse">
						<Pagination />
						<ButtonPrimary>Show me more</ButtonPrimary>
					</div>
				</div>
			</div>

			<div className="container space-y-16 py-16 lg:space-y-28 lg:py-28">
				{/* MORE SECTIONS */}
				{/* === SECTION 5 === */}
				<SectionSliderNewAuthors
					heading="Top elite authors"
					subHeading="Discover our elite writers"
					authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
				/>

				{/* === SECTION 5 === */}
				<div className="relative py-16">
					<BackgroundSection />
					<SectionGridCategoryBox
						categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
					/>
					<div className="mx-auto mt-10 text-center md:mt-16">
						<ButtonSecondary>Show me more</ButtonSecondary>
					</div>
				</div>

				{/* SUBCRIBES */}
				<SectionSubscribe2 />
			</div>
		</div>
	)
}

export default PageArchiveVideo
