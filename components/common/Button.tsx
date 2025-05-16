import React from 'react';
import { useRouter } from 'next/router';
import { ButtonProps } from '@/interfaces';


const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="whitespace-nowrap bg-sky-500 hover:bg-sky-700 px-5 py-2 bg-blue-500 text-white rounded">
    {label}
  </button>
);

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center">
        <Button label="Book Now" onClick={() => router.push('/rooms')} />
      </div>
    </>
  );
}