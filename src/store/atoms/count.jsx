import { atom } from "recoil"

// make sure you do not have same keys 
// for different atoms
export const countAtom = atom({
    key:"countAtom",  // how you uniqueley identify atom
    default:0,
});


