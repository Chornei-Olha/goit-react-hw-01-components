import PropTypes from 'prop-types';
import { BaseTable, Thead, Tr, Th, Tbody, Td } from './TransactionHistory.styled'


export const TransactionHistory = ({items})=>{
    return (<BaseTable>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>

  <Tbody>
    {items.map(({id, type, amount, currency})=>
    <Tr>
      <Td>{id}</Td>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>)}
  </Tbody>
</BaseTable>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string,
        })
    ),
}

