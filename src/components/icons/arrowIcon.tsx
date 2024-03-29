import React from 'react';

function ArrowIcon(props: { className: string }) {
  const { className } = props;

  return (
    <>
      <svg
        width='800px'
        height='800px'
        viewBox='0 0 1024 1024'
        className={className}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z'
          fill='#000000'
        />
      </svg>
    </>
  );
}
