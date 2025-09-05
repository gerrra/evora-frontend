'use client';

import { useState } from 'react';
import { Heading } from '@/shared/ui/Heading';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSkip = () => {
    console.log('Onboarding skipped');
    setCurrentStep(currentStep + 1);
  };

  const handleAccept = () => {
    console.log('Onboarding accepted');
    setCurrentStep(currentStep + 1);
  };

  const handleGenerate = () => {
    console.log('Generating content...');
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="text-center">
          <Heading variant="h2" className="text-green-600 mb-4">
            Onboarding Completed!
          </Heading>
          <p className="text-gray-600 mb-6">
            You have successfully completed the onboarding process.
          </p>
          <Button onClick={() => setIsCompleted(false)}>
            Start Over
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <Heading variant="h1">Onboarding</Heading>
        <p className="mt-2 text-gray-600">
          Step {currentStep} of 3
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <Heading variant="h3" className="mb-4">
          Question {currentStep}
        </Heading>
        <p className="text-gray-700 mb-6">
          This is a sample onboarding question. Please choose one of the options below to continue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            onClick={handleSkip}
            className="flex-1 sm:flex-none"
          >
            Пропустить
          </Button>
          <Button
            variant="secondary"
            onClick={handleAccept}
            className="flex-1 sm:flex-none"
          >
            Принять
          </Button>
          <Button
            variant="primary"
            onClick={handleGenerate}
            className="flex-1 sm:flex-none"
          >
            Сгенерировать
          </Button>
        </div>
      </Card>
    </div>
  );
}
