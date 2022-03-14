import { createContext, ReactNode, useContext, useState } from 'react';

import { popularCoffee } from '../json/popularCoffee';

type Product = {
  id: number;
  news: boolean;
  title: string;
  image: string;
  ml: number;
  stars: number;
  price: number;
  amount: number;
}

type CartProviderProps = {
  children: ReactNode;
}

type UpdateProductAmount = {
  productId: number;
  amount: number;
}

type CartContextData = {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = async (productId: number) => {
    try {
      const allProduct = popularCoffee.find(product => product.id === productId);

      const updatedCart = [...cart];

      // Verificar se o produto existe no carrinho
      const productsExists = updatedCart.find( product => product.id === productId);

      // Essa variavel contem a quantidade de estoque dos produtos;
      const currentAmount = productsExists ? productsExists.amount : 0;
      const amount = currentAmount + 1;

      if(productsExists){
        productsExists.amount = amount;
      }else{
        const newProduct = {
          ...allProduct,
          amount: 1
        };

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      console.log('Produto adicionado');

    } catch {
      console.log('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if(productIndex >= 0){
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);

      }else{
        throw Error();
      }
    } catch {
      console.log('Erro na remoção do produto');
    }
  };

  const updateProductAmount = ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount <= 0){
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if(productExists){
        productExists.amount = amount;
        setCart(updatedCart);
      }else{
        throw Error();
      }

    } catch {
      console.log('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}