import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Globe2, X, Languages } from 'lucide-react';

/**
 * SDF: independent site-wide machine-translation widget.
 * Depends on GTranslate's hosted free Website Translator Widget. No API key.
 * Does not change page content, existing components, routes or layout.
 * Automatic translations are NOT human reviewed; verify legal/donation wording.
 */
const SCRIPT_ID = 'sdf-gtranslate-widget-script';
const LANGUAGES = ['en', 'hi', 'bn'];

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
  const [target, setTarget] = useState<HTMLElement | null>(null);

  // Add a tiny mount point INSIDE the existing navbar, without replacing Navbar.tsx.
  // Desktop: after Donate Now CTA, at the far-right edge. Mobile: after the menu icon.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const host = document.createElement('div');
    host.className = 'sdf-language-navbar-host';
    host.setAttribute('translate', 'no');
    let mounted = true;
    let animationFrame = 0;

    const position = () => {
      if (!mounted) return;
      const nav = document.querySelector('header nav[aria-label="Main Navigation"]');
      if (!nav) {
        if (host.parentElement) host.remove();
        setTarget(current => current === null ? current : null);
        return;
      }
      const parts = Array.from(nav.children) as HTMLElement[];
      const destination = media.matches
        ? parts.find(el => el.classList.contains('hidden') && el.classList.contains('lg:flex') && !!el.querySelector('a.rounded-full'))
        : parts.find(el => el.classList.contains('lg:hidden') && !!el.querySelector('button'));
      if (!destination) return;
      if (host.parentElement !== destination || destination.lastElementChild !== host) {
        destination.appendChild(host);
      }
      setTarget(current => current === host ? current : host);
    };

    const schedule = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(position);
    };
    position();
    // Navbar can disappear/reappear on route changes; reconnect when needed.
    const observer = new MutationObserver(schedule);
    observer.observe(document.getElementById('root') || document.body, {childList:true,subtree:true});
    media.addEventListener('change', schedule);
    window.addEventListener('popstate', schedule);
    return () => {
      mounted = false;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      media.removeEventListener('change', schedule);
      window.removeEventListener('popstate', schedule);
      host.remove();
    };
  }, []);

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

  if (!target) return null;
  return createPortal(
    <div className="sdf-language-nav" translate="no">
      <style>{`
        .sdf-language-navbar-host {position:relative; display:flex; align-items:center; margin-left:12px; margin-right:0; flex-shrink:0;}
        .sdf-language-nav {position:relative; font-family:inherit; direction:ltr;}
        .sdf-language-toggle {display:inline-flex; align-items:center; gap:7px; padding:9px 11px; border:1px solid rgba(221,190,137,.55); border-radius:999px; background:rgba(255,255,255,.055); color:#F8F5EA; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap;}
        .sdf-language-toggle:hover,.sdf-language-toggle:focus-visible {background:#11675E; outline:2px solid #DCC18B; outline-offset:2px;}
        .sdf-language-panel {position:absolute; z-index:110; top:calc(100% + 12px); right:0; width:260px; max-width:calc(100vw - 24px); padding:16px; background:#FAF7EC; color:#123D3B; border:1px solid #DCCCA9; border-radius:15px; box-shadow:0 16px 48px rgba(0,22,25,.33); direction:ltr;}
        .sdf-language-title {font-size:14px; font-weight:700; margin-bottom:8px;}
        .sdf-language-note {font-size:11px; color:#576963; line-height:1.5; margin:9px 0 0;}
        .sdf-gtranslate-wrapper {min-height:40px;}
        .sdf-gtranslate-wrapper select {width:100%; max-width:100%; min-height:39px; border:1px solid #A4C8BC; border-radius:9px; color:#173F3C; background:#fff; font-size:13px;}
        @media(max-width:1023px){.sdf-language-navbar-host {margin-left:9px; margin-right:0;}.sdf-language-toggle {padding:8px 10px;}.sdf-language-panel {right:-45px;}}
        @media(max-width:380px){.sdf-language-toggle span{display:none}.sdf-language-panel{right:-45px}}
      `}</style>
      <button className="sdf-language-toggle" type="button"
        onClick={() => setIsOpen(open => !open)} aria-expanded={isOpen}
        aria-controls="sdf-language-panel" aria-label="Choose website language">
        {isOpen ? <X size={16}/> : <Globe2 size={16}/>} <span>Language</span>
      </button>
      <section id="sdf-language-panel" className="sdf-language-panel"
        style={{display:isOpen?'block':'none'}} aria-label="Translate website">
        <div className="sdf-language-title"><Languages size={16} style={{display:'inline-block',verticalAlign:'-3px',marginRight:7}}/>Select Language</div>
        <div className="sdf-gtranslate-wrapper" />
        {scriptFailed && <p role="alert" className="sdf-language-note">Translation service could not load. Please check your connection.</p>}
        <p className="sdf-language-note">English (default) · हिन्दी · বাংলা. Switch languages anytime, including back to English. Automatic translations: refer to the original English text for official donation and legal details.</p>
      </section>
    </div>, target
  );
};
