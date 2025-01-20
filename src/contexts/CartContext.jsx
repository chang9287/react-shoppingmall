import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, showAlert = true) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.category === product.category
    );

    if(existingItemIndex !== -1) {
      const confirmAdd = window.confirm(
        "동일한 상품이 장바구니에 있습니다. 그대로 담으시겠습니까?"
      )
      if ( confirmAdd ) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += product.quantity;
        setCart(updatedCart);
        if(showAlert) alert('상품이 장바구니에 등록되었습니다.')
      }
    }else{
      setCart((prevCart) => [...prevCart, { ...product, quantity: product.quantity }]);
      if(showAlert) alert('상품이 장바구니에 등록되었습니다.')
    }
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); //특정 인덱스 삭제
  }

  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, getCartCount}}>
      {children}
    </CartContext.Provider>
  );
};