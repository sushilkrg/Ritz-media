import React from 'react';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const CTA: React.FC<CallToActionProps> = ({
  title = "Ready to Elevate Your Brand?",
  subtitle = "Let's discuss your next brand-elevating campaign",
  buttonText = "Schedule Free Consultation",
  onButtonClick,
}) => {
  return (
    <section className="w-full max-w-full mx-auto py-12 px-20">
      <div className="bg-[#f5f5f5] rounded-sm py-16 px-6 text-center flex flex-col items-center justify-center shadow-sm">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-3">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-800 font-normal mb-8 max-w-2xl">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="bg-[#c89238] hover:bg-[#b3802e] text-white font-medium px-8 py-3.5 rounded transition-colors duration-200 text-sm md:text-base cursor-pointer shadow-sm active:scale-[0.98]"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTA;