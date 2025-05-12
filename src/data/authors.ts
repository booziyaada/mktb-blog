import __authors from './jsons/__users.json'
import a1 from './avatars/1.jpg'
import { PostAuthorType } from './types'
import { Route } from '@/routers/types'

const as = [a1, a1, a1, a1, a1, a1, a1, a1, a1, a1]

const DEMO_AUTHORS: PostAuthorType[] = __authors.map((item, index) => ({
	...item,
	avatar: as[index],
	href: item.href as Route,
}))

export { DEMO_AUTHORS }
