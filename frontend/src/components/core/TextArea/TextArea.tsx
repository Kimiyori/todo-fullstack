import { ChangeEvent, FC, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

type TextAreaProps = {
  text: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};
const TextArea: FC<TextAreaProps> = ({ text, placeholder, disabled, onChange, className }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = '30px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [text]);
  return (
    <Textarea
      className={className}
      ref={textareaRef}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={text}
    />
  );
};

export default TextArea;

const Textarea = styled.textarea`
  resize: none;
  flex-grow: 2;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.color.Secondary};
  color: ${(props) => props.theme.color.OnSecondary};
  text-align: center;
`;
