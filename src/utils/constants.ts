export const TEMPLATES = {
    chinese: {
      name: 'Chinese New Year Style',
      description: 'Red background with cherry blossoms',
      previewImage: '/templates/chinese.jpg'
    },
    islamic: {
      name: 'Islamic Style',
      description: 'Dark blue with golden lanterns',
      previewImage: '/templates/islamic.jpg'
    },
    indian: {
      name: 'Indian Traditional',
      description: 'Green and yellow with lotus motifs',
      previewImage: '/templates/indian.jpg'
    },
    modern: {
      name: 'Modern Style',
      description: 'Clean red floral pattern',
      previewImage: '/templates/modern.jpg'
    }
  };
  
  export const INITIAL_FORM_DATA = {
    personal: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      religion: '',
      nationality: '',
      height: '',
      weight: '',
      bloodGroup: '',
      education: '',
      occupation: '',
    },
    family: {
      fatherName: '',
      fatherOccupation: '',
      motherName: '',
      motherOccupation: '',
      siblings: '',
      familyType: '',
      familyValues: '',
    },
    contact: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    }
  };
  
  export const STEPS = [
    { id: 1, name: 'Personal Details' },
    { id: 2, name: 'Family Details' },
    { id: 3, name: 'Contact Details' },
    { id: 4, name: 'Select Template' },
  ];