export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  photo?: {
    filename: string;
    path: string;
  };
  viewCount: number;
}
