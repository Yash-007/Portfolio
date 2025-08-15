import React from 'react';

export default function Quote() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="text-6xl text-accent mb-8">"</div>
        <blockquote className="text-xl md:text-2xl font-light text-text-secondary mb-6 italic">
          If you want to be great in a particular area, you have to obsess over it. A lot people say they want to be great
          , but they're not willing to make the sacrifices necessary to acheive greatness. and That's totally fine.
          After all, greatness is not for everybody.
        </blockquote>
        <div className="text-accent font-mono">
          <span className="text-text">―</span> Kobe Bryant
        </div>
      </div>
    </div>
  );
}
