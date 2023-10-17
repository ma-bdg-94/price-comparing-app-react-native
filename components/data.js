import dandelion from '../assets/nuk-icons/png/2x/dandelion.png';
import grape from '../assets/nuk-icons/png/2x/grape.png';
import poppy from '../assets/nuk-icons/png/2x/poppy-seeds.png';
import wheat from '../assets/nuk-icons/png/2x/wheat-grains.png';
import peaches from '../assets/nuk-icons/png/2x/peaches.png';
import lemon from '../assets/nuk-icons/png/2x/lemon.png';
import pear from '../assets/nuk-icons/png/2x/pear.png';
import magnolia from '../assets/nuk-icons/png/2x/magnolia.png';
import acorn from '../assets/nuk-icons/png/2x/acorn.png';
import beans from '../assets/nuk-icons/png/2x/coffee-beans.png';
import newspaper from '../assets/nuk-icons/png/2x/newspaper.png'
import weekly from '../assets/nuk-icons/png/2x/7-days.png'
import monthly from '../assets/nuk-icons/png/2x/calendar.png'
import maple from '../assets/nuk-icons/png/2x/maple-leaf.png'
import figs from '../assets/nuk-icons/png/2x/figs.png'
import mustard from '../assets/nuk-icons/png/2x/mustard.png'
import caraway from '../assets/nuk-icons/png/2x/caraway.png'
import onion from '../assets/nuk-icons/png/2x/onion.png'
import cauliflower from '../assets/nuk-icons/png/2x/cauliflower.png'
import lettuce from '../assets/nuk-icons/png/2x/lettuce.png'

export const homeTabs = [
  { id: 1, title: { en: 'News', fr: 'Journal', ar: 'الأخبار' }, icon: newspaper },
  { id: 2, title: { en: 'Weekly', fr: 'Hebdomadaire', ar: 'أسبوعية' }, icon: weekly },
  { id: 3, title: { en: 'Monthly', fr: 'Mensuel', ar: 'شهرية' }, icon: monthly },
];

export const fruitTabs = [
  { id: 1, title: { en: 'Achenes', fr: 'Akènes', ar: 'أكنة' }, icon: dandelion },
  { id: 2, title: { en: 'Berries', fr: 'Baies', ar: 'عوز' }, icon: grape },
  { id: 3, title: { en: 'Capsules', fr: 'Capsules', ar: 'كبسوليات' }, icon: poppy },
  { id: 4, title: { en: 'Caryopsis', fr: 'Caryopses', ar: 'بر' }, icon: wheat },
  { id: 5, title: { en: 'Drupes', fr: 'Drupes', ar: 'حسل' }, icon: peaches },
  { id: 6, title: { en: 'Follicles', fr: 'Follicules', ar: 'جرابيات' }, icon: magnolia },
  { id: 7, title: { en: 'Hesperida', fr: 'Hespérides', ar: 'قوارص' }, icon: lemon },
  { id: 8, title: { en: 'Legumes', fr: 'Légumineuses', ar: 'بقول' }, icon: beans },
  { id: 9, title: { en: 'Nuts', fr: 'Noix', ar: 'مكسرات' }, icon: acorn },
  { id: 10, title: { en: 'Pomes', fr: 'Piridions', ar: 'تفاحيات' }, icon: pear },
  { id: 11, title: { en: 'Samaras', fr: 'Samares', ar: 'جناحيات' }, icon: maple },
  { id: 12, title: { en: 'Schizocarps', fr: 'Schizocarpes', ar: 'قرضات' }, icon: caraway },
  { id: 13, title: { en: 'Siliques', fr: 'Siliques', ar: 'خردل' }, icon: mustard },
  { id: 14, title: { en: 'Syconiums', fr: 'Sycones', ar: 'تين' }, icon: figs },
];

export const vegeTabs = [
  { id: 1, title: { en: 'Bulbs', fr: 'Bulbes', ar: 'بصليات' }, icon: onion },
  { id: 2, title: { en: 'Flowers', fr: 'Fleures', ar: 'زهور' }, icon: cauliflower },
  { id: 3, title: { en: 'Leaves', fr: 'Feuilles', ar: 'أوراق' }, icon: lettuce },
  { id: 4, title: { en: 'Roots', fr: 'Racines', ar: 'جذور' }, icon: 'calendar-month' },
  { id: 5, title: { en: 'Stems', fr: 'Tiges', ar: 'سيقان' }, icon: 'calendar-month' },
  { id: 6, title: { en: 'Tubers', fr: 'Tubercules', ar: 'درنات' }, icon: 'calendar-month' },
];

export const whiteMeatTabs = [
  { id: 1, title: { en: 'Chickens', fr: 'Poulets', ar: 'دجاج' }, icon: 'newspaper-variant' },
  { id: 2, title: { en: 'Ducks', fr: 'Canards', ar: 'بط' }, icon: 'view-week' },
  { id: 3, title: { en: 'Geese', fr: 'Oies', ar: 'إوز' }, icon: 'calendar-month' },
  { id: 4, title: { en: 'Hares', fr: 'Lièvres', ar: 'أرانب' }, icon: 'calendar-month' },
  { id: 5, title: { en: 'Pheasants', fr: 'Faisants', ar: 'حجل' }, icon: 'calendar-month' },
  { id: 6, title: { en: 'Pigeons', fr: 'Pigeons', ar: 'حمام' }, icon: 'calendar-month' },
  { id: 7, title: { en: 'Quails', fr: 'Cailles', ar: 'سمان' }, icon: 'calendar-month' },
  { id: 8, title: { en: 'Turkeys', fr: 'Pigeons', ar: 'دجاج رومي' }, icon: 'calendar-month' },
];

export const redMeatTabs = [
  { id: 1, title: { en: 'Cattles', fr: 'Boeufs', ar: 'بقر' }, icon: 'newspaper-variant' },
  { id: 2, title: { en: 'Sheeps', fr: 'Moutons', ar: 'ضأن' }, icon: 'view-week' },
  { id: 3, title: { en: 'Goats', fr: 'Chèvres', ar: 'ماعز' }, icon: 'calendar-month' },
  { id: 4, title: { en: 'Camels', fr: 'Chameaux', ar: 'إبل' }, icon: 'calendar-month' },
];

export const fishTabs = [
  { id: 1, title: { en: 'Fishes', fr: 'Poissons', ar: 'أسماك' }, icon: 'newspaper-variant' },
  { id: 2, title: { en: 'Octopi', fr: 'Poulpes', ar: 'أخطبوط' }, icon: 'view-week' },
  {
    id: 3,
    title: { en: 'Seafood', fr: 'Fruits de Mer', ar: 'غلال البحر' },
    icon: 'calendar-month',
  },
];

export const otherProductsTabs =  [
  { id: 1, title: { en: 'Eggs', fr: 'Oeufs', ar: 'بيض' }, icon: 'newspaper-variant' },
  { id: 2, title: { en: 'Honey', fr: 'Miel', ar: 'عسل' }, icon: 'view-week' },
  {
    id: 3,
    title: { en: 'Fresh Milk', fr: 'Lait Frais', ar: 'حليب طازج' },
    icon: 'calendar-month',
  },
];

