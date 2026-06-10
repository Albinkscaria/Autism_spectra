interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

export function BookingSteps({ currentStep, steps }: BookingStepsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  index < currentStep
                    ? 'border-secondary-600 bg-secondary-600 text-white'
                    : index === currentStep
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-300 bg-white text-gray-500'
                }`}
              >
                {index < currentStep ? (
                  <span className="text-lg">✓</span>
                ) : (
                  <span className="text-base font-medium">{index + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-sm font-medium ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 ${
                  index < currentStep ? 'bg-secondary-600' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
