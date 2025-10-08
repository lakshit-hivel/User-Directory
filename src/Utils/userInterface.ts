interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  height: number;
  weight: number;
  address: Address;
  birthDate: string;
  company: {
    name: string;
    title: string;
    department: string;
    address: Address;
  };
  university: string;
  role: string;
}
