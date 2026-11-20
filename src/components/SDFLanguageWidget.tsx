import React, { useEffect, useState } from 'react';
import { Globe2, X, Languages } from 'lucide-react';

/**
 * SDF: independent site-wide machine-translation widget.
 * Depends on GTranslate's hosted free Website Translator Widget. No API key.
 * Does not change page content, existing components, routes or layout.
 * Automatic translations are NOT human reviewed; verify legal/donation wording.
 */
const SCRIPT_ID = 'sdf-gtranslate-widget-script';
const LANGUAGES = ['en', 'hi', 'bn', 'or', 'ta', 'te', 'mr', 'gu', 'pa', 'ur', 'kn', 'ml'];

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      native_language_names: boolean;
      detect_browser_language: boolean;
      languages: string[];
      wrapper_selector: string;
    };
  }
}

export const SDFLanguageWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: 'en',
      native_language_names: true,
      detect_browser_language: false,
      languages: LANGUAGES,
      wrapper_selector: '.sdf-gtranslate-wrapper',
    };

    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://cdn.gtranslate.net/widgets/latest/dropdown.js';
    script.async = true;
    script.onerror = () => setScriptFailed(true);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="sdf-language-float" translate="no">
      <style>{`
        .sdf-language-float { position:fixed; right:14px; top:40%; transform:translateY(-50%); z-index:999; font-family:inherit; }
        .sdf-language-toggle { display:flex; align-items:center; gap:7px; background:#0B5652; color:#FFF8EB; border:1px solid #C5A76C; box-shadow:0 8px 25px rgba(0,20,22,.25); border-radius:999px; padding:11px 13px; cursor:pointer; font-size:12px; font-weight:650; }
        .sdf-language-toggle:hover,.sdf-language-toggle:focus-visible { background:#117166; outline:2px solid #DCC18B; outline-offset:2px; }
        .sdf-language-panel { position:absolute; right:0; top:calc(100% + 10px); width:240px; max-width:calc(100vw - 30px); padding:17px; background:#FAF7EC; color:#123D3B; border:1px solid #DCCCA9; border-radius:17px; box-shadow:0 16px 48px rgba(0,22,25,.33); }
        .sdf-language-title { font-size:14px; font-weight:700; margin-bottom:5px; }
        .sdf-language-note { font-size:11px; color:#576963; line-height:1.5; margin:9px 0 0; }
        .sdf-gtranslate-wrapper { min-height:40px; }
        .sdf-gtranslate-wrapper select { width:100%; max-width:100%; min-height:39px; border:1px solid #A4C8BC; border-radius:9px; color:#173F3C; background:#fff; font-size:13px; }
        @media(max-width:640px) { .sdf-language-float { top:auto; bottom:92px; transform:none; right:12px; } .sdf-language-toggle { padding:11px; } .sdf-language-panel { top:auto; bottom:calc(100% + 9px); } }
      `}</style>
      <button
        className="sdf-language-toggle"
        type="button"
        onClick={() => setIsOpen(current => !current)}
        aria-expanded={isOpen}
        aria-controls="sdf-language-panel"
        aria-label={isOpen ? 'Close language selection' : 'Choose website language'}
      >
        {isOpen ? <X size={18} /> : <Globe2 size={18} />}
        <span>{isOpen ? 'Close' : 'Language'}</span>
      </button>
      <section id="sdf-language-panel" className="sdf-language-panel" style={{ display: isOpen ? 'block' : 'none' }} aria-label="Translate website">
        <div className="sdf-language-title"><Languages size={16} style={{display:'inline-block',verticalAlign:'-3px',marginRight:7}}/>Select Language</div>
        <div className="sdf-gtranslate-wrapper" />
        {scriptFailed && <p role="alert" className="sdf-language-note">Translation service could not load. Please check your connection or retry later.</p>}
        <p className="sdf-language-note">Automatic translation • 12 languages. Please refer to the English version for official donation and legal details.</p>
      </section>
    </div>
  );
};
