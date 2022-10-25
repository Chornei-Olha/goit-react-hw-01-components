import PropTypes from 'prop-types';

import {
  BaseTable,
  THead,
  Th,
  Tr,
  Td,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
