import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  /* 장바구니 상품 추가 */
  const addToCart = (product, showAlert = true) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    //장바구니에 동일한 상품이 있는지 확인
    if(existingItemIndex !== -1) {
      const confirmAdd = window.confirm(
        "동일한 상품이 장바구니에 있습니다. 그대로 담으시겠습니까?"
      )
      //동일한 상품이 있으면 확인 후 등록
      if(confirmAdd) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += product.quantity;
        setCart(updatedCart);
        if(showAlert) alert('상품이 장바구니에 등록되었습니다.')
      }
    }else{
      //동일한 상품이 없다면 그냥 등록
      setCart((prevCart) => [...prevCart, { ...product, quantity: product.quantity }]);
      if(showAlert) alert('상품이 장바구니에 등록되었습니다.')
    }
  }

  /* 장바구니 제거 */
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  /* 장바구니 모든 상품 수량 계산 */
  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  /* 상품의 수량 증가 감소 */
  const updateQuantity = (id, type) => {
    setCart(prevCart => prevCart.map(item => {
      if(item.id === id) {
        const newQuantity = type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return{...item, quantity: newQuantity};
      }
      return item;
    }));
  };

  /* input 수정 기능 */
  const setQuantityDirectly = (id, value) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, getCartCount, updateQuantity, setQuantityDirectly}}>
      {children}
    </CartContext.Provider>
  );
};