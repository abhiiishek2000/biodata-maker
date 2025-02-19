'use client';

import React from 'react';
import { ContactInfo } from '@/utils/types';

interface ContactFormProps {
  data: ContactInfo;
  onUpdate: (data: ContactInfo) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ data, onUpdate }) => {
  const handleChange = (field: keyof ContactInfo, value: string) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label className="mb-1 text-sm font-medium">Address</label>
          <textarea
            value={data.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">City</label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">State</label>
          <input
            type="text"
            value={data.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Country</label>
          <input
            type="text"
            value={data.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Pincode</label>
          <input
            type="text"
            value={data.pincode}
            onChange={(e) => handleChange('pincode', e.target.value)}
            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;