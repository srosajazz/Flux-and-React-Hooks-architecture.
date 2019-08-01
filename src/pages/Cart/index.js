import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/26/D12-2683-026/D12-2683-026_detalhe1.jpg?resize=280:280" alt="Nike Roshe One"
           />
           </td>
           <td>
             <strong>greats shoes sale</strong>
             <span>U$129,90</span>
           </td>
           <td>
            <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>U$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Complete your order</button>

        <Total>
          <span>TOTAL</span>
          <strong>U$1920,28</strong>
        </Total>
      </footer>
    </Container>
  )

}
