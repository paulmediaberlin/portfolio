import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type ActiveVideoContextValue = {
  activeId: string | null;
  setActive: (id: string) => void;
  clearActive: (id?: string) => void;
};

const ActiveVideoContext = createContext<ActiveVideoContextValue | undefined>(undefined);

export const ActiveVideoProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const value = useMemo<ActiveVideoContextValue>(
    () => ({
      activeId,
      setActive: (id: string) => setActiveId(id),
      clearActive: (id?: string) => setActiveId((current) => (id === undefined || current === id ? null : current)),
    }),
    [activeId],
  );

  return <ActiveVideoContext.Provider value={value}>{children}</ActiveVideoContext.Provider>;
};

export const useActiveVideo = () => useContext(ActiveVideoContext);
