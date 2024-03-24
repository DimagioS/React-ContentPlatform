import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';

export interface SidebarItemType {
  path: string;
  text: string;
  theme?: AppLinkTheme;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
