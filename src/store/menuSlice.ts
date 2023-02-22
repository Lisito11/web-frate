import { StateCreator } from "zustand"

export interface MenuSlice {
    menu: string,
    openMenu: string,
    closeMenu: string,
    menuList: MenuItem[]
    changeMenu (open: string): void
}

type MenuItem = {
    name: string,
    link: string
}

const FADE_IN = 'fade-in';
const FADE_OUT = 'fade-out';
const HIDDEN = 'invisible'

const MENU_ITEMS = [
    {
        name: 'Inicio',
        link: '/'
    },
    {
        name: 'Historia',
        link: '/'
    },
    {
        name: 'Comunidades',
        link: '/'
    },
    {
        name: 'Equipos',
        link: '/'
    },
    {
        name: 'Actividades',
        link: '/'
    },
    {
        name: 'Contacto',
        link: '/'
    },
]

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
    menu: HIDDEN,
    menuList: MENU_ITEMS,
    openMenu: FADE_IN,
    closeMenu: FADE_OUT,
    changeMenu: (open) => set(() => ({ menu: open }))
})