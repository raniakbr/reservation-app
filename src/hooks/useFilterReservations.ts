import { Reservation } from 'src/types/reservations';
import { getNestedValue } from 'src/utils/getNestedValue';
import { useState } from 'react';

export const useFilterReservations = (reservations: Reservation[]) => {
  const initialSearch = {
    customerName: '',
    status: '',
    shift: '',
    area: '',
    date: '',
  };

  const [filteredReservations, setFilteredReservations] =
    useState(reservations);
  const [searchCriteria, setSearchCriteria] = useState(initialSearch);
  const [orderBy, setOrderBy] = useState<{
    column:
      | keyof Reservation
      | `${'customer'}.${keyof Reservation['customer']}`
      | null;
    direction: 'asc' | 'desc';
  }>({
    column: null,
    direction: 'asc',
  });

  const clearSearch = () => {
    setSearchCriteria(initialSearch);
    setFilteredReservations(reservations);
  };

  const filterReservations = () => {
    let filtered = reservations;

    if (searchCriteria.customerName.trim() !== '') {
      filtered = filtered.filter(
        (reservation) =>
          reservation.customer.firstName
            .toLowerCase()
            .includes(searchCriteria.customerName.toLowerCase()) ||
          reservation.customer.lastName
            .toLowerCase()
            .includes(searchCriteria.customerName.toLowerCase()),
      );
    }
    if (searchCriteria.status !== '') {
      filtered = filtered.filter(
        (reservation) => reservation.status === searchCriteria.status,
      );
    }
    if (searchCriteria.shift !== '') {
      filtered = filtered.filter(
        (reservation) => reservation.shift === searchCriteria.shift,
      );
    }
    if (searchCriteria.area !== '') {
      filtered = filtered.filter(
        (reservation) => reservation.area === searchCriteria.area,
      );
    }
    if (searchCriteria.date === 'past') {
      filtered = filtered.filter(
        (reservation) => new Date(reservation.start) < new Date(),
      );
    } else if (searchCriteria.date === 'incoming') {
      filtered = filtered.filter(
        (reservation) => new Date(reservation.start) >= new Date(),
      );
    }

    setFilteredReservations(filtered);
  };

  const handleOrderBy = (column: keyof Reservation) => {
    if (orderBy.column === column) {
      setOrderBy({
        ...orderBy,
        direction: orderBy.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setOrderBy({
        column,
        direction: 'asc',
      });
    }

    filteredReservations.sort((a, b) => {
      let comparison = 0;
      if (
        orderBy.column &&
        getNestedValue(a, orderBy.column) > getNestedValue(b, orderBy.column)
      ) {
        comparison = 1;
      } else if (
        orderBy.column &&
        getNestedValue(a, orderBy.column) < getNestedValue(b, orderBy.column)
      ) {
        comparison = -1;
      }
      return orderBy.direction === 'asc' ? comparison : -comparison;
    });
  };

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
