import { StateCreator } from "zustand"

export interface MenuSlice {
    menu: string,
    openMenu: string,
    closeMenu: string,
    menuList: MenuItem[]
    changeMenu (open: string): void
    updateMenuItem (item: string): void
}

type MenuItem = {
    name: string,
    link: string,
    selected: string
}

const FADE_IN = 'fade-in';
const FADE_OUT = 'fade-out';
const HIDDEN = 'invisible'

const menuItems = [
    {
        name: 'Inicio',
        link: '/',
        selected: 'text-blue-600'
    },
    {
        name: 'Historia',
        link: '/historia-fml',
        selected: 'text-gray-400'
    },
    {
        name: 'Comunidades',
        link: '/comunidades',
        selected: 'text-gray-400'
        
    },
    {
        name: 'Equipos',
        link: '/equipos',
        selected: 'text-gray-400'

    },
    {
        name: 'Actividades',
        link: '/actividades',
        selected: 'text-gray-400'

    },
    {
        name: 'Contacto',
        link: '/contacto',
        selected: 'text-gray-400'

    },
]

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
    menu: HIDDEN,
    menuList: menuItems,
    openMenu: FADE_IN,
    closeMenu: FADE_OUT,
    changeMenu: (open) => set(() => ({ menu: open })),
    updateMenuItem: (selectedItem) => set((state) => ({
        menuList : state.menuList.map( (item) => {
            
            
        if (item.link === selectedItem) {
            console.log(item.link);
            console.log(selectedItem);
            item.selected = "text-blue-600"
            return item;
        }
        item.selected = 'text-gray-400'
        return item;
        }),
        
    }
    )),
})