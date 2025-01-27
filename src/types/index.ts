export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    hair: {
      color: string;
      type: string;
    };
    address: {
      address: string;
      postalCode: string;
    };
    company: {
      department: string;
    };
  }
  
  export interface ApiResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface DepartmentSummary {
    male: number;
    female: number;
    ageRange: string;
    hair: {
      [color: string]: number;
    };
    addressUser: {
      [key: string]: string;
    };
  }
  
  export interface GroupedData {
    [department: string]: DepartmentSummary;
  }

  export interface ApiError {
    message: string;
    status: number;
  }