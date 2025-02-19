import React from 'react';
import { BiodataFormData } from '@/utils/types';

interface ModernTemplateProps {
  data: BiodataFormData;
  photoUrl: string | null;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data, photoUrl }) => {
  return (
    <div className="relative w-[210mm] h-[297mm] bg-modern-template bg-cover p-8" id="biodata-preview">
      <div className="absolute top-0 left-0 w-full h-full bg-white/95">
        <div className="relative z-10 flex flex-col items-center p-8">
          {/* Header */}
          <div className="w-full flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-red-600 mb-2">{data.personal.fullName}</h1>
              <p className="text-gray-600">{data.personal.occupation}</p>
            </div>
            {photoUrl && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-600">
                <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Quick Info */}
          <div className="w-full grid grid-cols-3 gap-4 mb-8 bg-red-50 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">Age</p>
              <p className="text-lg font-semibold text-red-600">
                {data.personal.dateOfBirth ? new Date().getFullYear() - new Date(data.personal.dateOfBirth).getFullYear() : '-'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Religion</p>
              <p className="text-lg font-semibold text-red-600">{data.personal.religion}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Marital Status</p>
              <p className="text-lg font-semibold text-red-600">{data.personal.maritalStatus}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-200 pb-2">
                  Personal Information
                </h3>
                <div className="space-y-2">
                  {Object.entries(data.personal).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-200 pb-2">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  {Object.entries(data.contact).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Family Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-red-200 pb-2">
                  Family Information
                </h3>
                <div className="space-y-2">
                  {Object.entries(data.family).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;