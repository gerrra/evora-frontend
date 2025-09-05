import { Heading } from '@/shared/ui/Heading';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <Heading variant="h1">Welcome to Evora Portal</Heading>
        <p className="mt-4 text-gray-600 text-lg">
          Version 1.0.0 - Next.js 14 with TypeScript
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heading variant="h3" className="text-blue-600">Onboarding</Heading>
            <p className="mt-2 text-gray-600">
              Complete the setup process to get started with your project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heading variant="h3" className="text-green-600">Preview</Heading>
            <p className="mt-2 text-gray-600">
              Test your application across different device sizes and resolutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
