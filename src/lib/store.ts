import { create } from 'zustand';

interface AppState {
  isMobileMenuOpen: boolean;
  isContactFormOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openContactForm: () => void;
  closeContactForm: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMobileMenuOpen: false,
  isContactFormOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openContactForm: () => set({ isContactFormOpen: true, isMobileMenuOpen: false }),
  closeContactForm: () => set({ isContactFormOpen: false }),
}));





