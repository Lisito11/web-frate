import { create } from 'zustand'
import { createMenuSlice, MenuSlice } from './menuSlice'


export const useFrateStore = create<MenuSlice>()((...a) => ({
    ...createMenuSlice(...a),
}))