import React from 'react';

export const WindowIcons = {
  OneLeaf: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <rect x="15" y="15" width="70" height="70" rx="1" />
      <line x1="85" y1="50" x2="80" y2="50" strokeWidth="3" />
    </svg>
  ),
  TwoLeaves: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <line x1="50" y1="10" x2="50" y2="90" />
      <rect x="15" y="15" width="32" height="70" rx="1" />
      <rect x="53" y="15" width="32" height="70" rx="1" />
      <line x1="48" y1="50" x2="52" y2="50" strokeWidth="3" />
    </svg>
  ),
  FrenchDoor: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="20"
        y="5"
        width="60"
        height="90"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <line x1="50" y1="5" x2="50" y2="95" />
      <rect x="25" y="10" width="22" height="80" rx="1" />
      <rect x="53" y="10" width="22" height="80" rx="1" />
      <line x1="48" y1="50" x2="52" y2="50" strokeWidth="3" />
    </svg>
  ),
  Fixed: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <path d="M90 90L10 10" strokeDasharray="4 4" className="opacity-20" />
      <path d="M10 90L90 10" strokeDasharray="4 4" className="opacity-20" />
    </svg>
  ),
  Sliding: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="5"
        y="20"
        width="90"
        height="60"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <line x1="50" y1="20" x2="50" y2="80" />
      <path d="M30 50l-5 5m0 0l5 5m-5-5h15" strokeWidth="1.5" className="opacity-60" />
      <path d="M70 50l5 5m0 0l-5 5m5-5H55" strokeWidth="1.5" className="opacity-60" />
    </svg>
  ),
  Composite: ({ selected }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 ${selected ? 'stroke-orange-500' : 'stroke-slate-400'}`}
      fill="none"
      strokeWidth="2"
    >
      <rect
        x="5"
        y="10"
        width="90"
        height="80"
        rx="2"
        className={selected ? 'fill-orange-50' : 'fill-white'}
      />
      <line x1="33" y1="10" x2="33" y2="90" />
      <line x1="66" y1="10" x2="66" y2="90" />
      <path d="M80 50h5" strokeWidth="2" />
    </svg>
  ),
};
