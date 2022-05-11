import classNames from 'classnames';
import { Header, NavBarGroup } from '@components';
import { Outlet } from 'react-router-dom';

type DocumentationLayoutProps = {
  children?: React.ReactNode;
  blank?: boolean;
  className?: string;
  documentName?: string;
};

export default function DocumentationLayout({
  children,
  documentName,
  blank = false,
  className
}: DocumentationLayoutProps) {
  if (blank) {
    return <div className='min-h-full'>{children}</div>;
  }
  return (
    <div className='max-w-6xl w-full mx-auto prose prose-lg'>
      <Outlet />
    </div>
  );
}

export const Footer = () => {
  return <footer>Here's a footer</footer>;
};
