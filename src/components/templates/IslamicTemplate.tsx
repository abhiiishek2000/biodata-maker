import React from 'react';
import { BiodataFormData } from '@/utils/types';

interface IslamicTemplateProps {
  data: BiodataFormData;
  photoUrl: string | null;
}

const IslamicTemplate: React.FC<IslamicTemplateProps> = ({ data, photoUrl }) => {
  return (
    <div className="relative w-[210mm] h-[297mm] bg-islamic-template bg-cover p-8" id="biodata-preview">
      <div className="absolute top-0 left-0 w-full h-full bg-navy-900/90">
        <div className="relative z-10 flex flex-col items-center p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-yellow-500 mb-6">Biodata</h1>

          {/* Photo and Basic Info */}
          <div className="flex gap-8 mb-8">
            {photoUrl && (
              <div className="w-32 h-40 rounded-lg overflow-hidden border-4 border-yellow-500">
                <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex flex-col gap-2 text-white">
              <h2 className="text-2xl font-bold text-yellow-500">{data.personal.fullName}</h2>
              <p>Date of Birth: {data.personal.dateOfBirth}</p>
              <p>Religion: {data.personal.religion}</p>
              <p>Marital Status: {data.personal.maritalStatus}</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="w-full mb-8 bg-navy-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              {Object.entries(data.personal).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-500">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Family Information */}
          <div className="w-full mb-8 bg-navy-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
              Family Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              {Object.entries(data.family).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-500">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full bg-navy-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
              Contact Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              {Object.entries(data.contact).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-500">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicTemplate;