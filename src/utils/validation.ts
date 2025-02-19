import { BiodataFormData } from './types';

export const validatePersonalInfo = (data: BiodataFormData['personal']) => {
  const errors: Record<string, string> = {};

  if (!data.fullName) {
    errors.fullName = 'Full name is required';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  if (!data.gender) {
    errors.gender = 'Gender is required';
  }

  if (!data.religion) {
    errors.religion = 'Religion is required';
  }

  if (!data.maritalStatus) {
    errors.maritalStatus = 'Marital status is required';
  }

  return errors;
};

export const validateFamilyInfo = (data: BiodataFormData['family']) => {
  const errors: Record<string, string> = {};

  if (!data.fatherName) {
    errors.fatherName = "Father's name is required";
  }

  if (!data.motherName) {
    errors.motherName = "Mother's name is required";
  }

  return errors;
};

export const validateContactInfo = (data: BiodataFormData['contact']) => {
  const errors: Record<string, string> = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!data.phone) {
    errors.phone = 'Phone number is required';
  }

  if (!data.address) {
    errors.address = 'Address is required';
  }

  return errors;
};

export const validateFormData = (data: BiodataFormData) => {
  return {
    personal: validatePersonalInfo(data.personal),
    family: validateFamilyInfo(data.family),
    contact: validateContactInfo(data.contact)
  };
};