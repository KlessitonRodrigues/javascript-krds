import { GlobalState } from '../../hooks/useGlobalContext/state';

export const toggleTheme = (global: GlobalState): GlobalState => ({
  ...global,
  theme: global.theme === 'cian' ? 'cianDark' : 'cian',
});

export const toggleSettingsOpen = (global: GlobalState): GlobalState => ({
  ...global,
  sidePanel: { ...global.sidePanel, settings: !global.sidePanel.settings },
});

export const toggleTagsOpen = (global: GlobalState): GlobalState => ({
  ...global,
  sidePanel: { ...global.sidePanel, tags: !global.sidePanel.tags },
});
