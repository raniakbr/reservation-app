import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import {
  areaSelectData,
  dateSelectData,
  shiftsSelectData,
  statusSelectData,
} from 'src/data/selectOptions';

type Props = {
  searchCriteria: any;
  setSearchCriteria: any;
  filterReservations: any;
  clearSearch: any;
};

const SearchSection: FC<Props> = ({
  searchCriteria,
  setSearchCriteria,
  filterReservations,
  clearSearch,
}) => {
  const handleSearchCriteriaChange = (name: string, value: string) => {
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  return (
    <>
      <Typography variant="h5">Search </Typography>
      <Typography variant="body1">
        Search for a customer by name, status, area, or shift.
      </Typography>
      <Stack direction={'row'} gap={1}>
        <TextField
          size="small"
          label="Customer name"
          placeholder="Type a customer name"
          variant="outlined"
          fullWidth
          value={searchCriteria.customerName}
          onChange={(e) =>
            handleSearchCriteriaChange('customerName', e.target.value)
          }
        />

        <FormControl fullWidth>
          <InputLabel id="reservation-status-label" size="small">
            Status
          </InputLabel>
          <Select
            size="small"
            labelId="reservation-status-label"
            value={searchCriteria.status || ''}
            label="Status"
            onChange={(e) =>
              handleSearchCriteriaChange('status', e.target.value)
            }>
            <MenuItem value="">All</MenuItem>
            {statusSelectData.map(({ label, value, id }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="reservation-shifts-label" size="small">
            Shifts
          </InputLabel>
          <Select
            labelId="reservation-shifts-label"
            size="small"
            value={searchCriteria.shift || ''}
            label="Shifts"
            onChange={(e) =>
              handleSearchCriteriaChange('shift', e.target.value)
            }>
            <MenuItem value="">All</MenuItem>
            {shiftsSelectData.map(({ label, value, id }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="reservation-area-label" size="small">
            Area
          </InputLabel>
          <Select
            labelId="reservation-area-label"
            size="small"
            value={searchCriteria.area || ''}
            label="Area"
            onChange={(e) =>
              handleSearchCriteriaChange('area', e.target.value)
            }>
            <MenuItem value="">All</MenuItem>
            {areaSelectData.map(({ label, value, id }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="reservation-date-label" size="small">
            Date
          </InputLabel>
          <Select
            labelId="reservation-date-label"
            size="small"
            value={searchCriteria.date || ''}
            label="Date"
            onChange={(e) =>
              handleSearchCriteriaChange('date', e.target.value)
            }>
            <MenuItem value="">All</MenuItem>
            {dateSelectData.map(({ label, value, id }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack direction={'row'} gap={2} justifyContent={'flex-end'}>
        <Button onClick={clearSearch} type="submit">
          Clear filters
        </Button>
        <Button onClick={filterReservations} variant="contained">
          Search
        </Button>
      </Stack>
    </>
  );
};

export default SearchSection;
