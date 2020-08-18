import React, { InputHTMLAttributes, useEffect, useRef, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const { registerField, fieldName, defaultValue = '' } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(prev => !prev);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} >
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Input;
