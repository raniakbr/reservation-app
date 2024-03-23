import {
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { Reservation, ReservationStatus } from 'src/types/reservations';

import { OrderByType } from 'src/hooks/useFilterReservations';
import { getFormattedTime } from 'src/utils/getFormattedTime';

type Props = {
  reservations: Reservation[];
  orderBy: OrderByType;
  handleOrderBy: (column: OrderByType['column']) => void;
};

const ReservationList: FC<Props> = ({
  reservations,
  orderBy,
  handleOrderBy,
}) => {
  const colorMapper: {
    [key in ReservationStatus]: 'default' | 'info' | 'success' | 'warning';
  } = {
    [ReservationStatus.checkedOut]: 'warning',
    [ReservationStatus.confirmed]: 'success',
    [ReservationStatus.seated]: 'info',
    [ReservationStatus.notConfirmed]: 'default',
  };

  const renderTableSortLabel = (
    column: OrderByType['column'],
    label: string,
  ) => (
    <TableSortLabel
      active={orderBy.column === column}
      direction={orderBy.column === column ? orderBy.direction : 'asc'}
      onClick={() => handleOrderBy(column)}>
      {label}
    </TableSortLabel>
  );

  return (
    <Stack gap={2}>
      <Typography variant="h5">Search Result</Typography>
      <Typography variant="body1">
        {reservations.length} results found
      </Typography>

      <TableContainer>
        <Table>
          <TableHead sx={{ background: '#eee' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                {renderTableSortLabel('customer.firstName', 'First name')}
              </TableCell>
              <TableCell>
                {renderTableSortLabel('customer.lastName', 'Last name')}
              </TableCell>
              <TableCell>
                {renderTableSortLabel('quantity', 'Quantity')}
              </TableCell>
              <TableCell>Shift</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Guest Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map(
              ({
                id,
                quantity,
                customer,
                status,
                shift,
                start,
                end,
                guestNotes,
                businessDate,
              }) => (
                <TableRow key={id} hover>
                  <TableCell>{id}</TableCell>
                  <TableCell>
                    <Chip
                      label={status}
                      size="small"
                      color={colorMapper[status]}
                    />
                  </TableCell>
                  <TableCell>{customer.firstName}</TableCell>
                  <TableCell>{customer.lastName}</TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>{shift}</TableCell>
                  <TableCell>{businessDate}</TableCell>
                  <TableCell>{getFormattedTime(start)}</TableCell>
                  <TableCell>{getFormattedTime(end)}</TableCell>
                  <TableCell>{guestNotes}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ReservationList;
