'use client'

import React, { FC } from 'react'
import Logo from '@/components/Logo/Logo'
import MenuBar from '@/components/MenuBar/MenuBar'
import LangDropdown from './LangDropdown'
import AvatarDropdown from './AvatarDropdown'
import TemplatesDropdown from './TemplatesDropdown'
import NotifyDropdown from './NotifyDropdown'
import SwitchDarkMode from '../SwitchDarkMode/SwitchDarkMode'
import Input from '../Input/Input'
import SearchModal from './SearchModal'

export interface MainNav2Props {
	className?: string
}

const MainNav2: FC<MainNav2Props> = ({ className = '' }) => {
	const renderSearchForm = () => {
		return (
			<div className="group relative">
				<div className="absolute inset-0"></div>
				<Input
					type="search"
					placeholder="Search items"
					className="!w-40 pr-5 group-hover:border-slate-300 dark:placeholder:text-neutral-400 dark:group-hover:border-slate-400 md:!w-full md:pr-10"
					sizeClass="h-[42px] pl-4 py-3"
					autoFocus={false}
				/>
				<span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
					<svg
						className="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 22L20 20"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<div className="absolute inset-0"></div>
			</div>
		)
	}

	return (
		<div className="nc-MainNav2 relative z-10 bg-white dark:bg-slate-900">
			<div className="container">
				<div className="flex h-20 justify-between">
					<div className="flex flex-1 items-center md:hidden">
						<MenuBar />
					</div>

					<div className="flex items-center space-x-3 sm:space-x-8 lg:flex-1 rtl:space-x-reverse">
						<Logo />

						<div className="hidden h-10 border-s border-slate-200 dark:border-slate-700 md:block"></div>

						<div className="hidden max-w-xs flex-grow sm:block">
							<SearchModal renderTrigger={renderSearchForm} />
						</div>
					</div>

					<div className="flex flex-1 items-center justify-end">
						<TemplatesDropdown />
						<LangDropdown />
						<SwitchDarkMode />
						<NotifyDropdown className="hidden md:block" />
						{/* <AvatarDropdown /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainNav2
