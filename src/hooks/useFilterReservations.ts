import { useEffect, useState } from 'react';

import { Reservation } from 'src/types/reservations';
import { getNestedValue } from 'src/utils/getNestedValue';

export type OrderByType = {
  column:
    | keyof Reservation
    | `${'customer'}.${keyof Reservation['customer']}`
    | null;
  direction: 'asc' | 'desc';
};

export type SearchCriteriaType = {
  customerName: string;
  status: string;
  shift: string;
  area: string;
  date: string;
};

export const useFilterReservations = (reservations: Reservation[]) => {
  const initialSearch = {
    customerName: '',
    status: '',
    shift: '',
    area: '',
    date: '',
  };

  const [filteredReservations, setFilteredReservations] = useState<
    Reservation[]
  >([]);
  const [searchCriteria, setSearchCriteria] = useState(initialSearch);
  const [orderBy, setOrderBy] = useState<OrderByType>({
    column: null,
    direction: 'asc',
  });

  const clearSearch = () => {
    setSearchCriteria(initialSearch);
  };

  const filterReservations = () => {
    const filtered = reservations.filter((reservation) => {
      return (
        (searchCriteria.customerName.trim() === '' ||
          reservation.customer.firstName
            .toLowerCase()
            .includes(searchCriteria.customerName.toLowerCase()) ||
          reservation.customer.lastName
            .toLowerCase()
            .includes(searchCriteria.customerName.toLowerCase())) &&
        (searchCriteria.status === '' ||
          reservation.status === searchCriteria.status) &&
        (searchCriteria.shift === '' ||
          reservation.shift === searchCriteria.shift) &&
        (searchCriteria.area === '' ||
          reservation.area === searchCriteria.area) &&
        (searchCriteria.date !== 'past' ||
          new Date(reservation.start) < new Date()) &&
        (searchCriteria.date !== 'incoming' ||
          new Date(reservation.start) >= new Date())
      );
    });

    if (orderBy.column) {
      filtered.sort((a, b) => {
        const aValue = orderBy.column && getNestedValue(a, orderBy.column);
        const bValue = orderBy.column && getNestedValue(b, orderBy.column);
        return orderBy.direction === 'asc'
          ? compareValues(aValue, bValue)
          : -compareValues(aValue, bValue);
      });
    }

    setFilteredReservations(filtered);
  };

  const handleOrderBy = (column: OrderByType['column']) => {
    if (orderBy.column === column) {
      setOrderBy({
        ...orderBy,
        direction: orderBy.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setOrderBy({ column, direction: 'asc' });
    }
  };

  const compareValues = (a: any, b: any) => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  };

  useEffect(() => {
    filterReservations();
  }, [reservations, searchCriteria, orderBy]);

  return {
    searchCriteria,
    setSearchCriteria,
    filterReservations,
    clearSearch,
    filteredReservations,
    orderBy,
    handleOrderBy,
  };
};
