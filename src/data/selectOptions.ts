import {
  ReservationArea,
  ReservationShift,
  ReservationStatus,
} from 'src/types/reservations';

export const statusSelectData = [
  { id: 1, label: 'Check out', value: ReservationStatus.checkedOut },
  { id: 2, label: 'Confirmed', value: ReservationStatus.confirmed },
  { id: 3, label: 'Not confirmed', value: ReservationStatus.notConfirmed },
  { id: 4, label: 'Seated', value: ReservationStatus.seated },
];

export const shiftsSelectData = [
  { id: 1, label: 'Breakfast', value: ReservationShift.breakfast },
  { id: 2, label: 'Dinner', value: ReservationShift.dinner },
  { id: 3, label: 'Lunch', value: ReservationShift.lunch },
];

export const areaSelectData = [
  { id: 1, label: 'Bar', value: ReservationArea.bar },
  { id: 2, label: 'Main room', value: ReservationArea.mainRoom },
];

export const dateSelectData = [
  { id: 1, label: 'Past dates', value: 'past' },
  { id: 2, label: 'Incoming dates', value: 'incoming' },
];
