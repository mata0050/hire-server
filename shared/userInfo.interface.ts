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


export interface EmployeeInterface extends UserInterface, EmployeeUserInterface {}

interface FireBaseInterface {
  uid: string;
  photoURL: string;
}

interface UserFirebaseInterface extends UserInterface, FireBaseInterface {}

export interface UserContextState {
  user: UserFirebaseInterface | null;
  userProfile: EmployeeInterface | null;
}