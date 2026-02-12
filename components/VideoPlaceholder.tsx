import React from 'react';

interface VideoPlaceholderProps {
  variant: 'performance' | 'creative' | 'neutral' | 'events' | 'resources';
  className?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ variant, className = '' }) => {
  const getGradient = () => {
    switch (variant) {
      case 'performance':
        return 'from-black via-[#001a40] to-black';
      case 'creative':
        return 'from-black via-[#400000] to-black';
      case 'events':
        return 'from-black via-[#403000] to-black';
      case 'resources':
        return 'from-black via-[#004020] to-black';
      case 'neutral':
      default:
        return 'from-black via-[#1a1a1a] to-black';
    }
  };

  const getAccentColor = () => {
    switch (variant) {
      case 'performance': return '#0066FF';
      case 'creative': return '#D90000';
      case 'events': return '#FFB800';
      case 'resources': return '#00FF85';
      default: return '#ffffff';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-60`} />
      
      {/* Animated Grid/Noise Effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${getAccentColor()} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-current rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-float" 
           style={{ color: getAccentColor(), animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-current rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-float" 
           style={{ color: getAccentColor(), animationDuration: '15s', animationDelay: '-5s' }} />
    </div>
  );
};

export default VideoPlaceholder;
