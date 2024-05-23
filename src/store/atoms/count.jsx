import { atom, selector } from "recoil"

// make sure you do not have same keys 
// for different atoms
export const countAtom = atom({
    key:"countAtom",  // how you uniqueley identify atom
    default:0,
});


//here i am defining selector 
//a selector that depends only on count atom
export const evenSelector = selector({
    key:"iamuniquestringname",
    get:({get})=>{
        const count = get(countAtom);
        return count%2;
    }
})

//Todo creation application with filtering logic
//todos ,filter


