import avatar1 from '@/data/avatars/1.jpg'

export const avatarImgs = [
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
	avatar1,
]

const personNames = [
	'Kailey Greer',
	'Karli Costa',
	'Camren Barnes',
	'Belinda Ritter',
	'Jameson Dickerson',
	'Giada Mann',
	'Evie Osborn',
	'Juliet Mcpherson',
	'Charlize Raymond',
	'Amaris Pittman',
	'Arnav Morris',
	'Malakai Casey',
	'Nevaeh Henry',
	'Mireya Roman',
	'Anthony Wyatt',
	'Mike Orr',
	'Azul Hull',
	'Derick Hubbard',
]

const tagNames = [
	'Life',
	'Travel',
	'Music',
	'Beauty',
	'Beach',
	'Hotdog',
	'Car',
	'Bike',
	'Wordpress',
	'Php',
	'Javascript',
	'Vue',
	'Reactjs',
	'Androind',
]

const featuredImgs = [
	'', '', '', '', '', '', '', '', '', '', '', '', '', '',
];

export const imgHigtQualitys = [
	'', '', '', '', '', '', '', '', '', '', '', '', '', '',
];

const aTitles = [
	'adipiscing bibendum est ultricies integer quis auctor elit sed vulputate',
	'in arcu cursus euismod quis viverra nibh cras pulvinar mattis',
	'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
	'et leo duis ut diam quam nulla porttitor massa id',
	'turpis cursus in hac habitasse platea dictumst quisque sagittis purus',
	'ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt',
	'interdum velit euismod in pellentesque massa placerat duis ultricies lacus',
	'fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque',
	'sagittis vitae et leo duis ut diam quam nulla porttitor',
	'in mollis nunc sed id semper risus in hendrerit gravida',
	'tellus integer feugiat scelerisque varius morbi enim nunc faucibus a',
	'eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci',
	'non sodales neque sodales ut etiam sit amet nisl purus',
]

function _getTitleRd() {
	return aTitles[Math.floor(Math.random() * aTitles.length)]
}
function _getPersonNameRd() {
	return personNames[Math.floor(Math.random() * personNames.length)]
}

function _getImgRd() {
	return featuredImgs[Math.floor(Math.random() * featuredImgs.length)]
}

function _getImgHightQualityRd() {
	return imgHigtQualitys[Math.floor(Math.random() * imgHigtQualitys.length)]
}

function _getTagNameRd() {
	return tagNames[Math.floor(Math.random() * tagNames.length)]
}
function _getAvatarRd() {
	return avatarImgs[Math.floor(Math.random() * avatarImgs.length)]
}

export {
	_getImgRd,
	_getTagNameRd,
	_getAvatarRd,
	_getImgHightQualityRd,
	_getTitleRd,
	_getPersonNameRd,
}
