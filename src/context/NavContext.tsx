'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Page } from '@/lib/data';

interface NavContextValue {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavContext = createContext<NavContextValue>({
  currentPage: 'home',
  navigate: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    if (page === currentPage) return;
    const el = document.getElementById('page-transition');
    if (!el) { setCurrentPage(page); return; }
    el.style.transition = 'transform 300ms cubic-bezier(0.16,1,0.3,1)';
    el.style.transformOrigin = 'bottom';
    el.style.transform = 'scaleY(1)';
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      el.style.transformOrigin = 'top';
      el.style.transition = 'transform 350ms cubic-bezier(0.16,1,0.3,1)';
      el.style.transform = 'scaleY(0)';
    }, 300);
  }, [currentPage]);

  return (
    <NavContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
