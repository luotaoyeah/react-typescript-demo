import { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface LoginContextProps {
  tabUtil?: {
    addTab: (id: string) => void;
    removeTab: (id: string) => void;
  };
  updateActive?: (activeItem: { [key: string]: string } | string) => void;
}

const LoginContext: React.Context<LoginContextProps> = createContext({});

export default LoginContext;
