export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  displayName: string;
  role: string;
}

export interface EmployeeUserInterface {
  busser: boolean;
  server: boolean;
  dishwasher: boolean;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
}
