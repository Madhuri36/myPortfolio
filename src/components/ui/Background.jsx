import React from 'react';

 const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* 1. The Mesh Gradients (Blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-orange-600/20 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[300px] -rotate-12 bg-yellow-500/10 blur-[100px]" />

      {/* 2. The Grid System */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 3. The Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />
    </div>
  );
};

export default Background;