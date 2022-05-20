import { Header } from '@/components/header';
import { ReactNode } from 'react';
import { vertical_flex_container } from './MainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={vertical_flex_container}>
      <Header />
      {children}
    </div>
  );
};

export { MainLayout };
