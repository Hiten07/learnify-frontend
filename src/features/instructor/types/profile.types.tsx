export interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  bio: string;
  instructordetails: {
    qualification: string;
    experience: number;
    bio: string;
  };
  paymentDetails?: {
    upiId?: string;
    bankAccount?: string;
  };
}