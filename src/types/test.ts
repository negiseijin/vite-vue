// 型キーの一覧:
type NavigationPages = 'home_page' | 'stickers' | 'about' | 'contact';

// 上記キーに対応するデータの型:
interface PageInfo {
  title: string;
  url: string;
  axTitle?: string;
}

export const navigationInfo: Record<NavigationPages, PageInfo> = {
  home_page: { title: 'Home', url: '/' },
  about: { title: 'About', url: '/about' },
  contact: { title: 'Contact', url: '/contact' },
  stickers: { title: 'Stickers', url: '/stickers/all' },
};
