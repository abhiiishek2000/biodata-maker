import React from 'react';
import { BiodataFormData } from '@/utils/types';

interface IndianTemplateProps {
  data: BiodataFormData;
  photoUrl: string | null;
}

const IndianTemplate: React.FC<IndianTemplateProps> = ({ data, photoUrl }) => {
  return (
    <div className="relative w-[210mm] h-[297mm] bg-indian-template bg-cover p-8" id="biodata-preview">
      <div className="absolute top-0 left-0 w-full h-full bg-emerald-900/70">
        <div className="relative z-10 flex flex-col items-center p-8">
          {/* Header with Traditional Design */}
          <div className="w-full text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-2">॥ बायोडाटा ॥</h1>
            <h2 className="text-3xl text-yellow-400">{data.personal.fullName}</h2>
          </div>

          {/* Photo and Basic Info */}
          <div className="flex gap-8 mb-8">
            {photoUrl && (
              <div className="w-32 h-40 rounded-lg overflow-hidden border-4 border-yellow-400 p-1 bg-yellow-400">
                <img src={photoUrl} alt="Profile" className="w-full h-full object-cover rounded-lg" />
              </div>
            )}
            <div className="flex flex-col gap-2 text-yellow-50">
              <p><span className="font-semibold text-yellow-400">Date of Birth:</span> {data.personal.dateOfBirth}</p>
              <p><span className="font-semibold text-yellow-400">Religion:</span> {data.personal.religion}</p>
              <p><span className="font-semibold text-yellow-400">Marital Status:</span> {data.personal.maritalStatus}</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="w-full mb-8 bg-emerald-800/50 p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-400 pb-2">
              वैयक्तिक जानकारी (Personal Information)
            </h3>
            <div className="grid grid-cols-2 gap-4 text-yellow-50">
              {Object.entries(data.personal).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-400">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Family Information */}
          <div className="w-full mb-8 bg-emerald-800/50 p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-400 pb-2">
              पारिवारिक जानकारी (Family Information)
            </h3>
            <div className="grid grid-cols-2 gap-4 text-yellow-50">
              {Object.entries(data.family).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-400">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full bg-emerald-800/50 p-6 rounded-lg border-2 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-400 pb-2">
              संपर्क जानकारी (Contact Information)
            </h3>
            <div className="grid grid-cols-2 gap-4 text-yellow-50">
              {Object.entries(data.contact).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-yellow-400">
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

export default IndianTemplate;