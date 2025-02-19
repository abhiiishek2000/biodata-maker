export interface PersonalInfo {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  religion: string;
  nationality: string;
  height: string;
  weight: string;
  bloodGroup: string;
  education: string;
  occupation: string;
}

export interface FamilyInfo {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  familyValues: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface BiodataFormData {
  personal: PersonalInfo;
  family: FamilyInfo;
  contact: ContactInfo;
}