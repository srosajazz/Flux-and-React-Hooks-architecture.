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
            <img src="https://nb.scene7.com/is/image/NB/m880wt9_nb_02_i?$dw_pgp_hd$&wid=180&hei=180&qlt=85&resMode=bisharp&fmt=webp" alt="880v9"
           />
           </td>
           <td>
             <strong>greats shoes sale</strong>
             <span>$124.99</span>
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
        <button type="button">Your bag is empty</button>

        <Total>
          <span>TOTAL</span>
          <strong>U$1920,28</strong>
        </Total>
      </footer>
    </Container>
  )

}
