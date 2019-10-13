/* eslint-disable @typescript-eslint/no-empty-interface */
import { RootState as ActualState } from "./store";

// Hack because `node_modules/vuex/types/vue.d.ts` is hardcoded to use this.
export interface RootState extends ActualState {}
