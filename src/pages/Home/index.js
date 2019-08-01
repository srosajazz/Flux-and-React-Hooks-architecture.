import React from 'react';
import { MdAddShoppingCart} from 'react-icons/md';

import { ProductList} from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$142,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$168,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$147,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$127,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$147,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
      <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
      />
      <strong>Nike Roshe One</strong>
      <span>U$187,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff"/> 5
        </div>
        <span>Adding to Cart shop</span>
      </button>
      </li>
    </ProductList>

  );
}
