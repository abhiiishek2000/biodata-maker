'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Save, Image, Download } from 'lucide-react';
import PersonalForm from './forms/PersonalForm';
import FamilyForm from './forms/FamilyForm';
import ContactForm from './forms/ContactForm';
import BiodataPreview from './BiodataPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TEMPLATES = [
  {
    id: 'chinese',
    name: 'Template 1',
    image: '/templates/chinese.png',
    description: 'Red background with cherry blossoms'
  },
  {
    id: 'islamic',
    name: 'Template 2',
    image: '/templates/islamic.png',
    description: 'Dark blue with golden lanterns'
  },
  {
    id: 'indian',
    name: 'Template 3',
    image: '/templates/indian.png',
    description: 'Green and yellow with lotus'
  },
  {
    id: 'modern',
    name: 'Template 4',
    image: '/templates/modern.png',
    description: 'Clean red floral pattern'
  }
];

const BiodataForm = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      gender: '',
      maritalStatus: '',
      religion: '',
      nationality: '',
      height: '',
      education: '',
      occupation: '',
      nakshatra: '',
      gotra: ''
    },
    family: {
      fatherName: '',
      fatherOccupation: '',
      motherName: '',
      motherOccupation: '',
      siblings: [
        {
          name: '',
          relation: '',
          maritalStatus: ''
        }
      ]
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
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormUpdate = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleExport = async (format = 'pdf') => {
    const element = document.getElementById('biodata-preview');
    if (!element) return;
  
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: 'white'
      });
  
      if (format === 'png') {
        // Export as PNG
        const link = document.createElement('a');
        link.download = 'biodata.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } else {
        // Export as PDF
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('biodata.pdf');
      }
    } catch (error) {
      console.error('Error generating file:', error);
      alert('Error generating file. Please try again.');
    }
  };

  if (showPreview && selectedTemplate) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
  <button
    onClick={() => setShowPreview(false)}
    className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
  >
    ← Back to Edit
  </button>
  <div className="flex gap-2">
    <button
      onClick={() => handleExport('png')}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
    >
      <Image className="w-5 h-5" />
      Export PNG
    </button>
    <button
      onClick={() => handleExport('pdf')}
      className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600"
    >
      <Download className="w-5 h-5" />
      Export PDF
    </button>
  </div>
</div>
        <BiodataPreview 
          data={formData}
          photoPreview={photoPreview}
          template={selectedTemplate}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="space-y-8">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <PersonalForm
            data={formData.personal}
            photoPreview={photoPreview}
            onPhotoUpload={handlePhotoUpload}
            onUpdate={(data) => handleFormUpdate('personal', data)}
          />
        </div>

        {/* Family Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Family Information</h2>
          <FamilyForm
            data={formData.family}
            onUpdate={(data) => handleFormUpdate('family', data)}
          />
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <ContactForm
            data={formData.contact}
            onUpdate={(data) => handleFormUpdate('contact', data)}
          />
        </div>

        {/* Template Selection */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Choose Template</h2>
          <div className="grid grid-cols-2 gap-6">
            {TEMPLATES.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  selectedTemplate?.id === template.id 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="h-48 w-full">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg">{template.name}</h4>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Button */}
        {selectedTemplate && (
          <div className="flex justify-end">
            <button
              onClick={() => setShowPreview(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <Image className="w-5 h-5" />
              Preview & Generate PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiodataForm;