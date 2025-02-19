'use client';

import React from 'react';

const BiodataPreview = ({ data, photoPreview, template }) => {
  return (
    <div className="w-full bg-white p-8" id="biodata-preview">
      <div className={`relative w-full min-h-[297mm] p-8 rounded-lg overflow-hidden`}
           style={{backgroundImage: `url(${template.image})`, backgroundSize: 'cover'}}>
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="relative z-10">
          {/* Header with Photo */}
          <div className="flex items-start gap-8 mb-8">
            {photoPreview && (
              <div className="w-32 h-40 rounded overflow-hidden border-4 border-gray-300">
                <img src={photoPreview} alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">{data.personal.fullName}</h1>
              <p className="text-gray-600">{data.personal.occupation}</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
              Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div><span className="font-medium">Date of Birth:</span> {data.personal.dateOfBirth}</div>
              <div><span className="font-medium">Time of Birth:</span> {data.personal.timeOfBirth}</div>
              <div><span className="font-medium">Gender:</span> {data.personal.gender}</div>
              <div><span className="font-medium">Religion:</span> {data.personal.religion}</div>
              <div><span className="font-medium">Nationality:</span> {data.personal.nationality}</div>
              <div><span className="font-medium">Marital Status:</span> {data.personal.maritalStatus}</div>
              <div><span className="font-medium">Height:</span> {data.personal.height}</div>
              <div><span className="font-medium">Nakshatra:</span> {data.personal.nakshatra}</div>
              <div><span className="font-medium">Gotra:</span> {data.personal.gotra}</div>
              <div><span className="font-medium">Education:</span> {data.personal.education}</div>
              <div><span className="font-medium">Occupation:</span> {data.personal.occupation}</div>
            </div>
          </div>

          {/* Family Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
              Family Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div><span className="font-medium">Father's Name:</span> {data.family.fatherName}</div>
              <div><span className="font-medium">Father's Occupation:</span> {data.family.fatherOccupation}</div>
              <div><span className="font-medium">Mother's Name:</span> {data.family.motherName}</div>
              <div><span className="font-medium">Mother's Occupation:</span> {data.family.motherOccupation}</div>
            </div>

            {/* Siblings Information */}
            {data.family.siblings && data.family.siblings.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Siblings</h3>
                <div className="space-y-2">
                  {data.family.siblings.map((sibling, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4">
                      <div><span className="font-medium">Name:</span> {sibling.name}</div>
                      <div><span className="font-medium">Relation:</span> {sibling.relation?.replace('_', ' ')}</div>
                      <div><span className="font-medium">Status:</span> {sibling.maritalStatus}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
              Contact Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div><span className="font-medium">Email:</span> {data.contact.email}</div>
              <div><span className="font-medium">Phone:</span> {data.contact.phone}</div>
              <div><span className="font-medium">Address:</span> {data.contact.address}</div>
              <div><span className="font-medium">City:</span> {data.contact.city}</div>
              <div><span className="font-medium">State:</span> {data.contact.state}</div>
              <div><span className="font-medium">Country:</span> {data.contact.country}</div>
              <div><span className="font-medium">Pincode:</span> {data.contact.pincode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPreview;