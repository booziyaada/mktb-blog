import Image from 'next/image'
import React, { FC } from 'react'

export interface SocialsShareProps {
	className?: string
	itemClass?: string
}

export interface SocialType {
	id: string
	name: string
	icon: string
	href: string
}

const socials: SocialType[] = [
	{
		id: 'Telegram',
		name: 'Telegram',
		icon: '/telegram.svg',
		href: 'https://t.me/salafimaktabahmpm',
	},
	{
		id: 'Whatsapp',
		name: 'Whatsapp',
		icon: `/whatsapp.svg`,
		href: 'https://whatsapp.com/channel/0029VaiMMTWHrDZdp5zaWu00',
	},
	{
		id: 'Youtube',
		name: 'Youtube',
		icon: `/youtube.svg`,
		href: 'https://www.youtube.com/@salafimaktabahmpm',
	},
	{
		id: 'Facebook',
		name: 'Facebook',
		icon: `/facebook.svg`,
		href: 'https://www.facebook.com/salafimaktabahmpm',
	},
	{
		id: 'Email',
		name: 'Email',
		icon: `/email.svg`,
		href: 'salafimaktabahmpm@gmail.com',
	},
]

export const SOCIALS_DATA = socials

const SocialsShare: FC<SocialsShareProps> = ({
	className = 'grid gap-[6px]',
	itemClass = 'w-7 h-7 text-base hover:bg-neutral-100',
}) => {
	const renderItem = (item: SocialType, index: number) => {
		return (
			<a
				key={index}
				href={item.href}
				className={`flex items-center justify-center rounded-full leading-none text-neutral-6000 ${itemClass}`}
				title={`Share on ${item.name}`}
			>
				<Image alt={item.name} src={item.icon} width={10} height={10} />
				{/* <div dangerouslySetInnerHTML={{ __html: item.icon }}></div> */}
			</a>
		)
	}

	return (
		<div className={`nc-SocialsShare ${className}`} data-nc-id="SocialsShare">
			{socials.map(renderItem)}
		</div>
	)
}

export default SocialsShare
