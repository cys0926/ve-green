import HomeImage from '$/images/banner/home.png';
import DiaryImage from '$/images/banner/diary.png';
import ShopImage from '$/images/banner/shop.png';
import ProfileImage from '$/images/banner/profile.png';

const NAV_LINKS = [
  {
    href: '/',
    title: '홈',
    imageSrc: HomeImage,
  },
  {
    href: '/shop',
    title: '쇼핑',
    imageSrc: ShopImage,
  },
  {
    href: '/diary',
    title: '식물 일기',
    imageSrc: DiaryImage,
  },
  {
    href: '/profile',
    title: '내정보',
    imageSrc: ProfileImage,
  },
];

export default NAV_LINKS;
