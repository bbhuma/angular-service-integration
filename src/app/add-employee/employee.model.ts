export interface Employee {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    dob: string;
    gender: 'male' | 'female';
    department: string;
    resume: File | null;  // Updated to handle null
    bio: string;
    terms: boolean;
  }
  