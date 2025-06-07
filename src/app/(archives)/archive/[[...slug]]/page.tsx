import React, { FC } from 'react'
import ModalCategories from '../../ModalCategories'
import ModalTags from '../../ModalTags'
import { DEMO_POSTS } from '@/data/posts'
import { PostDataType } from '@/data/types'
import { DEMO_CATEGORIES, DEMO_TAGS } from '@/data/taxonomies'
import { DEMO_AUTHORS } from '@/data/authors'
import Pagination from '@/components/Pagination/Pagination'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import Card11 from '@/components/Card11/Card11'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox'
import ButtonSecondary from '@/components/Button/ButtonSecondary'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import Image from 'next/image'

// Tag and category have same data type - we will use one demo data
const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 16)

const PageArchive = ({}) => {
	const FILTERS = [
		{ name: 'Most Recent' },
		{ name: 'Curated by Admin' },
		{ name: 'Most Appreciated' },
		{ name: 'Most Discussed' },
		{ name: 'Most Viewed' },
	]

	return (
		<div className={`nc-PageArchive`}>
			{/* HEADER */}
			<div className="mx-auto w-full px-2 xl:max-w-screen-2xl">
				<div className="aspect-h-13 aspect-w-16 relative z-0 overflow-hidden rounded-3xl sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 md:rounded-[40px]">
					<Image
						alt="archive"
						fill
						src="https://images.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						className="h-full w-full rounded-3xl object-cover md:rounded-[40px]"
						sizes="(max-width: 1280px) 100vw, 1536px"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
						<h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl">
							Garden
						</h2>
						<span className="mt-4 block text-neutral-300">115 Articles</span>
					</div>
				</div>
			</div>
			{/* ====================== END HEADER ====================== */}

			<div className="container space-y-16 pb-16 pt-10 lg:space-y-28 lg:pb-28 lg:pt-20">
				<div>
					<div className="flex flex-col sm:flex-row sm:justify-between">
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
					<div className="mt-8 grid gap-6 sm:grid-cols-2 md:gap-8 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
						{posts.map((post) => (
							<Card11 key={post._id} post={post} />
						))}
					</div>

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
					<SectionGridCategoryBox
						categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
					/>
					<div className="mx-auto mt-10 text-center md:mt-16">
						<ButtonSecondary loading>Show me more</ButtonSecondary>
					</div>
				</div>

				{/* === SECTION 5 === */}
				<SectionSliderNewAuthors
					heading="Top elite authors"
					subHeading="Discover our elite writers"
					authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
				/>

				{/* SUBCRIBES */}
				<SectionSubscribe2 />
			</div>
		</div>
	)
}

export default PageArchive
