import React, { FC } from 'react'
import NavigationItem, { NavItemType } from './NavigationItem'
import { NAVIGATION_DEMO_2 } from '@/data/navigation'

const navItemsData: NavItemType[] = [
	{
		id: '1',
		name: 'அறிமுகம்',
		href: '/',
	},
	{
		id: '2',
		name: 'கட்டுரைகள்',
		href: '/',
	},
	{
		id: '3',
		name: 'பலன்கள்',
		href: '/about',
	},
	{
		id: '4',
		name: 'நபர்கள்',
		href: '/contact',
	},
	{
		id: '5',
		name: 'சமூக வளைதளங்கள்',
		href: '/contact',
		type: 'dropdown',
		children: [
			{
				id: '1',
				// youtube in tamil
				name: 'யூடியூப்',
				href: 'https://www.youtube.com/',
			},
			{
				id: '2',
				// telegram in tamil
				name: 'டெலிகிராம்',
				href: 'https://telegram.org/',
			},
			{
				id: '3',
				// facebook in tamil
				name: 'பேஸ்புக்்',
				href: 'https://www.facebook.com/',
			},
			{
				id: '4',
				// whatsapp in tamil
				name: 'வாட்ஸ்அப்',
				href: 'https://www.whatsapp.com/',
			},
		],
	},
]

interface Props {
	className?: string
}

const Navigation: FC<Props> = ({ className = 'flex' }) => {
	return (
		<ul className={`nc-Navigation items-center ${className}`}>
			{navItemsData.map((item) => (
				<NavigationItem key={item.id} menuItem={item} />
			))}
		</ul>
	)
}

export default Navigation
