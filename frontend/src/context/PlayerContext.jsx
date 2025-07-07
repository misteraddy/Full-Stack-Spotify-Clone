import { useContext } from "react";

export const PlayerContext = useContext();

export function PlayerContextProvider({ children }) {
  const contextValue = {};

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
}
