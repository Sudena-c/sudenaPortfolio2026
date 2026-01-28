
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  isDarkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = `w-full px-6 py-4 rounded-xl border transition-all outline-none focus:ring-2 ${
    isDarkMode 
      ? 'bg-neutral-900 border-neutral-800 focus:ring-white/20 text-white placeholder-neutral-600' 
      : 'bg-neutral-50 border-neutral-200 focus:ring-black/5 text-black placeholder-neutral-400'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-2">Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe" 
            className={inputClasses}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-2">Email</label>
          <input 
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com" 
            className={inputClasses}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider opacity-60 ml-2">Message</label>
        <textarea 
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..." 
          rows={5}
          className={inputClasses}
        />
      </div>
      <button 
        type="submit" 
        disabled={status !== 'idle'}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
          isDarkMode 
            ? 'bg-white text-black hover:bg-neutral-200' 
            : 'bg-black text-white hover:bg-neutral-800'
        } ${status !== 'idle' ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {status === 'idle' && (
          <>
            <span>Send Message</span>
            <Send size={18} />
          </>
        )}
        {status === 'sending' && <span>Sending...</span>}
        {status === 'success' && <span>Message Sent!</span>}
      </button>
    </form>
  );
};

export default ContactForm;
