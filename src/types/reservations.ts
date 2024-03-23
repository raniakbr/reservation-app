export type Reservation = {
  id: number;
  businessDate: string;
  status: ReservationStatus;
  shift: ReservationShift;
  start: string;
  end: string;
  quantity: number;
  customer: {
    firstName: string;
    lastName: string;
  };
  area: ReservationArea;
  guestNotes: '';
};

export const enum ReservationStatus {
  confirmed = 'CONFIRMED',
  seated = 'SEATED',
  checkedOut = 'CHECKED OUT',
  notConfirmed = 'NOT CONFIRMED',
}

export const enum ReservationShift {
  breakfast = 'BREAKFAST',
  lunch = 'LUNCH',
  dinner = 'DINNER',
}

export const enum ReservationArea {
  bar = 'BAR',
  mainRoom = 'MAIN ROOM',
}
