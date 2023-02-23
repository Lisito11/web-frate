import { create } from 'zustand'
import { createMenuSlice, MenuSlice } from './createMenuSlice';


export const useFrateStore = create<MenuSlice>()((...a) => ({
    ...createMenuSlice(...a),
}))