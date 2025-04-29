import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const Settings = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        padding: '30px',
      }}
    >
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: theme === 'dark' ? '#333' : '#ddd',
          color: theme === 'dark' ? '#fff' : '#000',
          cursor: 'pointer',
          transition: '0.3s',
        }}
      >
        {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default Settings;
