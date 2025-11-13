export interface ContactFormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
  };
}

export interface ContactInfo {
  _id?: string;
  email?: string;
  phone?: string;
  address?: string;
  location?: string;
  workingHours?: string;
  socialMediaLinks?: Array<{
    icon: string;
    url: string;
  }>;
}

