export interface Campaign {
  body: string;
  date: string;
  description: string;
  id: string;
  name: string;
  status: string;
  subject: string;
  to: string[];
}

export interface GetById {
  // Define the structure of the data from the second endpoint
  // For example:
  // someField: string;
  // anotherField: number;
}
