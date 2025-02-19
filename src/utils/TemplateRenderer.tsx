'use client';

import React from 'react';
import { BiodataFormData } from './types';
import ChineseTemplate from '@/components/templates/ChineseTemplate';
import IslamicTemplate from '@/components/templates/IslamicTemplate';
import IndianTemplate from '@/components/templates/IndianTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';

interface TemplateRendererProps {
  template: string;
  data: BiodataFormData;
  photoUrl: string | null;
}

const TemplateRenderer: React.FC<TemplateRendererProps> = ({ template, data, photoUrl }) => {
  switch (template) {
    case 'chinese':
      return <ChineseTemplate data={data} photoUrl={photoUrl} />;
    case 'islamic':
      return <IslamicTemplate data={data} photoUrl={photoUrl} />;
    case 'indian':
      return <IndianTemplate data={data} photoUrl={photoUrl} />;
    case 'modern':
      return <ModernTemplate data={data} photoUrl={photoUrl} />;
    default:
      return null;
  }
};

export default TemplateRenderer;