import { Route } from '@/routers/types'
import { StaticImageData } from 'next/image'

//  ######  CustomLink  ######## //
export interface CustomLink {
	label: string
	href: Route
	targetBlank?: boolean
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
	id: string | number
	name: string
	href: Route
	count?: number
	thumbnail?: string | StaticImageData
	desc?: string
	color?: TwMainColor | string
	taxonomy: 'category' | 'tag'
}

export interface Person {
	_id: number
	name: string
	bio?: string
}

export interface PostAuthorType extends Person {
	// firstName: string
	// lastName: string
	// avatar: string | StaticImageData
	// bgImage?: string | StaticImageData
	// email?: string
	// count: number
	// jobName: string
	href: Route
}

export interface Post {
	_id: string | number
	type:
		| 'standard'
		| 'video'
		| 'gallery'
		| 'audio'
		| 'ARTICLE'
		| 'PICTURE'
		| 'QNA'
		| 'BENEFIT'
	title: string
	lang: 'ar' | 'en' | 'tam'
	author: PostAuthorType
	translator?: PostAuthorType
	createdAt: string
	updatedAt: string
}

export interface Article extends Post {
	type: 'ARTICLE'
	content: string
	_content: Object
}

export interface Benefit extends Post {
	content: string
	arContent?: string
	source: string
}

export interface IBenefitCard extends Benefit {
	href: Route
}

export interface PostDataType extends Post {
	href: Route
	// categories: TaxonomyType[]
	// featuredImage: string | StaticImageData
	desc?: string
	// like: {
	// 	count: number
	// 	isLiked: boolean
	// }
	// bookmark: {
	// 	count: number
	// 	isBookmarked: boolean
	// }
	// commentCount: number
	// viewdCount: number
	// readingTime: number
	videoUrl?: string
	audioUrl?: string | string[]
	galleryImgs?: string[]
}

export type TwMainColor =
	| 'pink'
	| 'green'
	| 'yellow'
	| 'red'
	| 'indigo'
	| 'blue'
	| 'purple'
	| 'gray'
