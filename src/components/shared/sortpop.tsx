import { ArrowUpDown } from 'lucide-react';
import React from 'react';

const SortPop = () => {
    return (
      <a href='/' className="flex bg-gray-50 items-center rounded-2xl px-5">
        <ArrowUpDown size={14.5} className='mr-1'/>
        <div className='mr-1'>Cортировка по: </div>
        <span className='text-primary'>рейтингу</span>
      </a>
    );
};

export default SortPop;