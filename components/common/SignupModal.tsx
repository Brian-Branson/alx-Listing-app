import React from 'react';

interface SignupModalProps {
  onClose: () => void;
  onSwitch: () => void;
}

export default function SignupModal({ onClose, onSwitch }: SignupModalProps) {
  return (
    <div className="fixed inset-0 bg-gray bg-opacity-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
          <input type="Re-enter password" placeholder="Re-enter Password" className="w-full p-2 mb-4 border rounded" />
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button onClick={onSwitch} className="text-green-600 hover:underline">Login</button>
        </p>
        <button onClick={onClose} className="absolute position top-75 right-190 text-black-600 hover:text-black">✕</button>
      </div>
    </div>
  );
}
