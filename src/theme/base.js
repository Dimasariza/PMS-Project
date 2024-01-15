import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';
import { DarkSpacesTheme } from './schemes/DarkSpacesTheme';
import { GreenFieldsTheme } from './schemes/GreenFieldsTheme';
import { PureLightTheme } from './schemes/PureLightTheme';

const themeMap = {
  NebulaFighterTheme,
  DarkSpacesTheme,
  GreenFieldsTheme,
  PureLightTheme
};

export function themeCreator(theme) {
  return themeMap[theme];
}
