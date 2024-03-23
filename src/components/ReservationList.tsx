import {
  Chip,
  ChipProps,
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

import { getFormattedTime } from 'src/utils/getFormattedTime';

type Props = {
  reservations: Reservation[];
  orderBy: {
    column:
      | keyof Reservation
      | `${'customer'}.${keyof Reservation['customer']}`
      | null;
    direction: 'asc' | 'desc';
  };
  handleOrderBy: any;
};

const ReservationList: FC<Props> = ({
  reservations,
  orderBy,
  handleOrderBy,
}) => {
  const colorMapper: { [key in ReservationStatus]: ChipProps['color'] } = {
    [ReservationStatus.checkedOut]: 'warning',
    [ReservationStatus.confirmed]: 'success',
    [ReservationStatus.seated]: 'info',
    [ReservationStatus.notConfirmed]: 'default',
  };
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
              {' '}
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                {' '}
                <TableSortLabel
                  active={orderBy.column === 'customer.firstName'}
                  direction={
                    orderBy.column === 'customer.firstName'
                      ? orderBy.direction
                      : 'asc'
                  }
                  onClick={() => handleOrderBy('customer.firstName')}>
                  First name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy.column === 'customer.lastName'}
                  direction={
                    orderBy.column === 'customer.lastName'
                      ? orderBy.direction
                      : 'asc'
                  }
                  onClick={() => handleOrderBy('customer.lastName')}>
                  Last name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy.column === 'quantity'}
                  direction={
                    orderBy.column === 'quantity' ? orderBy.direction : 'asc'
                  }
                  onClick={() => handleOrderBy('quantity')}>
                  Quantity
                </TableSortLabel>
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
                    {' '}
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
