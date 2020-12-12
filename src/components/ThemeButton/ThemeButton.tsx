import React from 'react';

interface Props {
  isDarkMode: boolean;
  changeTheme: () => void;
}

const ThemeButton: React.FC<Props> = ({ isDarkMode, changeTheme }) =>
  isDarkMode ? (
    <span
      role="img"
      title="light-mode"
      aria-label="light-mode"
      onClick={changeTheme}
    >
      ☀️
    </span>
  ) : (
    <span
      role="img"
      title="dark-mode"
      aria-label="dark-mode"
      onClick={changeTheme}
    >
      🌙
    </span>
  );

export default ThemeButton;
