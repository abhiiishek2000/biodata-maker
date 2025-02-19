'use client';

import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const FamilyForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const handleSiblingChange = (index, field, value) => {
    const newSiblings = [...data.siblings];
    newSiblings[index] = {
      ...newSiblings[index],
      [field]: value
    };
    handleChange('siblings', newSiblings);
  };

  const addSibling = () => {
    handleChange('siblings', [...data.siblings, { name: '', relation: '', maritalStatus: '' }]);
  };

  const removeSibling = (index) => {
    handleChange('siblings', data.siblings.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Parents Information */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Father's Name</label>
          <input
            type="text"
            value={data.fatherName}
            onChange={(e) => handleChange('fatherName', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Father's Occupation</label>
          <input
            type="text"
            value={data.fatherOccupation}
            onChange={(e) => handleChange('fatherOccupation', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mother's Name</label>
          <input
            type="text"
            value={data.motherName}
            onChange={(e) => handleChange('motherName', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mother's Occupation</label>
          <input
            type="text"
            value={data.motherOccupation}
            onChange={(e) => handleChange('motherOccupation', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Siblings Information */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium">Siblings</label>
          <button
            type="button"
            onClick={addSibling}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
          >
            <Plus size={20} />
            Add Sibling
          </button>
        </div>

        {data.siblings.map((sibling, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4 relative">
            <button
              type="button"
              onClick={() => removeSibling(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={sibling.name}
                onChange={(e) => handleSiblingChange(index, 'name', e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Relation</label>
              <select
                value={sibling.relation}
                onChange={(e) => handleSiblingChange(index, 'relation', e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Relation</option>
                <option value="elder_brother">Elder Brother</option>
                <option value="younger_brother">Younger Brother</option>
                <option value="elder_sister">Elder Sister</option>
                <option value="younger_sister">Younger Sister</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Marital Status</label>
              <select
                value={sibling.maritalStatus}
                onChange={(e) => handleSiblingChange(index, 'maritalStatus', e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyForm;