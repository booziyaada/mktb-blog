import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '/public/logo.png'

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
	return (
		<Link
			href="/"
			className="ttnc-logo inline-block flex-shrink-0 text-primary-6000"
		>
			<Image
				src={logoImg}
				alt="Logo"
				// fill
				// width={40}
				// height={40}
				className="h-10 w-10 rounded-full object-cover"
			/>
		</Link>
	)
}

export default Logo
