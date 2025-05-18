import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  glitch?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  animation?: 'typing' | 'fade' | 'none';
}

export function AnimatedText({
  text,
  className,
  glitch = false,
  tag: Tag = 'h1',
  delay = 0,
  animation = 'none'
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState<string>(animation === 'typing' ? '' : text);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (animation === 'typing' && isMounted) {
      let i = 0;
      const typeText = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          setTimeout(typeText, 50);
        }
      };
      typeText();
    } else if (animation !== 'typing') {
      setDisplayText(text);
    }
  }, [text, animation, isMounted]);

  const baseClass = cn(
    className,
    animation === 'fade' && isMounted ? 'animate-fade-in' : '',
    animation === 'fade' && !isMounted ? 'opacity-0' : ''
  );

  if (glitch) {
    return (
      <Tag 
        className={cn('glitch', baseClass)} 
        data-text={text}
      >
        {displayText}
      </Tag>
    );
  }

  return <Tag className={baseClass}>{displayText}</Tag>;
}
