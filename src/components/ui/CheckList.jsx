import React from 'react';
import { CheckCircle } from 'lucide-react';

const CheckList = ({ items, dark = false }) => (
  <ul className="space-y-3 mt-6">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <CheckCircle className={`${dark ? 'text-primary-500' : 'text-success-500'} mr-3 flex-shrink-0 mt-1`} size={20} />
        <span className={`${dark ? 'text-secondary-300' : 'text-secondary-700'}`}>{item}</span>
      </li>
    ))}
  </ul>
);

export default CheckList;