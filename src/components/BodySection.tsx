import React from 'react';
import { Reservation } from 'src/types/reservations';
import ReservationList from './ReservationList';
import SearchSection from './SearchSection';
import { Stack } from '@mui/material';
import reservationData from '../mocks/reservationData.json';
import { useFilterReservations } from 'src/hooks/useFilterReservations';

const BodySection = () => {
  const { reservations } = reservationData as { reservations: Reservation[] };

  const {
    searchCriteria,
    setSearchCriteria,
    filterReservations,
    clearSearch,
    filteredReservations,
    orderBy,
    handleOrderBy,
  } = useFilterReservations(reservations);

  return (
    <Stack gap={4}>
      <SearchSection
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        filterReservations={filterReservations}
        clearSearch={clearSearch}
      />
      <ReservationList
        reservations={filteredReservations}
        orderBy={orderBy}
        handleOrderBy={handleOrderBy}
      />
    </Stack>
  );
};

export default BodySection;
