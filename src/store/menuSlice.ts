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
    link: string,
    selected: Boolean
}

const FADE_IN = 'fade-in';
const FADE_OUT = 'fade-out';
const HIDDEN = 'invisible'

const MENU_ITEMS = [
    {
        name: 'Inicio',
        link: '/',
        selected: false
    },
    {
        name: 'Historia',
        link: '/historia-fml',
        selected: false
    },
    {
        name: 'Comunidades',
        link: '/comunidades',
        selected: false
        
    },
    {
        name: 'Equipos',
        link: '/equipos',
        selected: false

    },
    {
        name: 'Actividades',
        link: '/actividades',
        selected: false

    },
    {
        name: 'Contacto',
        link: '/contacto',
        selected: false

    },
]

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
    menu: HIDDEN,
    menuList: MENU_ITEMS,
    openMenu: FADE_IN,
    closeMenu: FADE_OUT,
    changeMenu: (open) => set(() => ({ menu: open }))
})