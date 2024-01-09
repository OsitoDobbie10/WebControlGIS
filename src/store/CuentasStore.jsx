import zustand, { create } from "zustand";
import {MostrarCuentas} from "../index";

export const UseCuentas = create((get,set)=>({
  cuentaItemSelect: [],
  datacuentas: [],
  mostrarCuentas: async (p) => {
    const response = await MostrarCuentas(p);
    set({ datacuentas: response });
    set({ cuentaItemSelect: response });
    return response;
  },
}));