
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react';

interface ProfileInfoProps {
  isDarkMode: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ isDarkMode }) => {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#', label: '@sudena.design' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#', label: 'Sudena Design' },
    { name: 'Behance', icon: <ExternalLink size={20} />, url: '#', label: 'sudena_portfolio' },
  ];

  return (
    <section id="profile-info" className={`py-20 border-t ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">The Designer</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Sudena is a Communication Design student with a passion for narrative-driven aesthetics. Her work often explores the delicate balance between structural rigidity and organic expression.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              When I'm not designing, you'll probably find me dancing in the air, sketching in a notebook, capturing a 
              fleeting moment with my camera, or listening to my favorite songs. I also 
              like cooking from time to time. These hobbies keep me curious, energized, and creatively inspired.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest opacity-50">Reach Out Directly</h4>
            <div className="space-y-3">
              <a href="mailto:hello@sudena.design" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <Mail size={20} className="text-neutral-500" />
                <span className="text-lg font-medium">sudena.swork@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <Phone size={20} className="text-neutral-500" />
                <span className="text-lg font-medium">+91 7016016528</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-3xl space-y-8 ${isDarkMode ? 'bg-neutral-900/50' : 'bg-neutral-50'}`}>
          <h4 className="text-sm font-bold uppercase tracking-widest opacity-50">Digital Presence</h4>
          <div className="grid grid-cols-1 gap-4">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  isDarkMode 
                    ? 'border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700' 
                    : 'border-neutral-200 hover:bg-white hover:border-neutral-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                    {social.icon}
                  </div>
                  <div>
                    <p className="font-bold">{social.name}</p>
                    <p className="text-sm opacity-50">{social.label}</p>
                  </div>
                </div>
                <ExternalLink size={16} className="opacity-30" />
              </a>
            ))}
          </div>
          <div className="pt-4 text-sm opacity-40 italic">
            Currently accepting freelance inquiries and internship opportunities for Fall 2025.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
