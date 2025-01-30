export interface ICheckoutFormData {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IFormInputProps {
  label: string;
  name: string;
  type?: string;
  formMethods: any;
  required?: boolean;
}
