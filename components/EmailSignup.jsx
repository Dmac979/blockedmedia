import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-16">
      <div className="flex border-b-2 border-blocked-black pb-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="JOIN THE WAITLIST"
          className="flex-1 bg-transparent py-3 text-blocked-black placeholder-gray-400 text-sm tracking-widest uppercase outline-none"
          required
        />
        <button
          type="submit"
          className="text-blocked-red font-extrabold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity px-4"
        >
          JOIN
        </button>
      </div>
      {status === 'success' && (
        <p className="text-blocked-red text-xs mt-3 tracking-widest uppercase">You are on the list.</p>
      )}
      {status === 'error' && (
        <p className="text-gray-500 text-xs mt-3 tracking-widest uppercase">Something went wrong. Try again.</p>
      )}
    </form>
  );
}