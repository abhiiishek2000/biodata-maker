'use client';

import React, { useRef } from 'react';
import { Image } from 'lucide-react';

const PersonalForm = ({ data, photoPreview, onPhotoUpload, onUpdate }) => {
  const fileInputRef = useRef(null);

  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      {/* Photo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Upload Photo</label>
        <div 
          onClick={handlePhotoClick}
          className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 relative overflow-hidden"
        >
          {photoPreview ? (
            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="text-center">
              <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-500">Upload Photo</span>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onPhotoUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Enter full name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time of Birth</label>
          <input
            type="time"
            value={data.timeOfBirth}
            onChange={(e) => handleChange('timeOfBirth', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            value={data.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Marital Status</label>
          <select
            value={data.maritalStatus}
            onChange={(e) => handleChange('maritalStatus', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Status</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Religion</label>
          <input
            type="text"
            value={data.religion}
            onChange={(e) => handleChange('religion', e.target.value)}
            placeholder="Enter religion"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nationality</label>
          <input
            type="text"
            value={data.nationality}
            onChange={(e) => handleChange('nationality', e.target.value)}
            placeholder="Enter nationality"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Height</label>
          <input
            type="text"
            value={data.height}
            onChange={(e) => handleChange('height', e.target.value)}
            placeholder="e.g., 5'8''"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nakshatra</label>
          <input
            type="text"
            value={data.nakshatra}
            onChange={(e) => handleChange('nakshatra', e.target.value)}
            placeholder="Enter nakshatra"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gotra</label>
          <input
            type="text"
            value={data.gotra}
            onChange={(e) => handleChange('gotra', e.target.value)}
            placeholder="Enter gotra"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Education</label>
          <input
            type="text"
            value={data.education}
            onChange={(e) => handleChange('education', e.target.value)}
            placeholder="Enter highest education"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Occupation</label>
          <input
            type="text"
            value={data.occupation}
            onChange={(e) => handleChange('occupation', e.target.value)}
            placeholder="Enter occupation"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;