export type ButtonProps = {
  variant?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  dataAtribut?: string;
};