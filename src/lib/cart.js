const KEY='saqr_cart_v1';
export const loadCart=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}};
export const saveCart=c=>localStorage.setItem(KEY,JSON.stringify(c));
export const addToCart=(item)=>{const c=loadCart(); const i=c.findIndex(x=>x.id===item.id); if(i>=0)c[i].quantity+=item.quantity||1; else c.push({...item,quantity:item.quantity||1}); saveCart(c); return c};
export const removeFromCart=id=>{const c=loadCart().filter(x=>x.id!==id);saveCart(c);return c};
export const updateQty=(id,q)=>{const c=loadCart().map(x=>x.id===id?{...x,quantity:Math.max(1,q)}:x);saveCart(c);return c};
export const clearCart=()=>{localStorage.removeItem(KEY)};
