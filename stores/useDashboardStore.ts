import { create } from 'zustand';

interface DashboardState {
  selectedPeriod: string;
  selectedCategory: string;
  searchQuery: string;
  setSelectedPeriod: (period: string) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  selectedPeriod: '30days',
  selectedCategory: 'all',
  searchQuery: '',
  setSelectedPeriod: (period) => set({ selectedPeriod: period }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () =>
    set({
      selectedPeriod: '30days',
      selectedCategory: 'all',
      searchQuery: '',
    }),
}));
