import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
useEffect(() => {
  const savedItems = JSON.parse(localStorage.getItem('dynamicList')) || [];
  setItems(savedItems);
}, []);
