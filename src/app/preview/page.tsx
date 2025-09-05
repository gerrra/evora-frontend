'use client';

import { useState } from 'react';
import { Heading } from '@/shared/ui/Heading';
import { Button } from '@/shared/ui/Button';

type DeviceSize = 'mobile' | 'tablet' | 'desktop';

export default function PreviewPage() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceSize>('mobile');

  const deviceSizes = {
    mobile: { width: '320px', label: '320px' },
    tablet: { width: '768px', label: '768px' },
    desktop: { width: '1024px', label: '1024px' },
  };

  const getContainerClass = () => {
    const sizeClasses = {
      mobile: 'w-[320px]',
      tablet: 'w-[768px]',
      desktop: 'w-[1024px]',
    };
    return sizeClasses[selectedDevice];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <Heading variant="h1">Preview</Heading>
        <p className="mt-2 text-gray-600">
          Test your application across different device sizes
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
          {Object.entries(deviceSizes).map(([device, config]) => (
            <Button
              key={device}
              variant={selectedDevice === device ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedDevice(device as DeviceSize)}
              className="min-w-[80px]"
            >
              {config.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className={`${getContainerClass()} border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg`}>
          <div className="h-96 flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <Heading variant="h3" className="text-gray-600 mb-2">
                Preview will appear here
              </Heading>
              <p className="text-gray-500 text-sm">
                Device: {deviceSizes[selectedDevice].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
