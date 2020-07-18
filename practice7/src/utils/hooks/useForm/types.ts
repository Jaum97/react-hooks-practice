import { ChangeEvent } from "react";

export interface IOption {
  label: string;
  value: string;
}

export interface IInputProps {
  className: string;
  containerClass: string;
  disabled: boolean;
  id: string;
  keyName: string;
  label: string;
  mask?: string;
  value: string | IOption;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validator?: (value: any) => boolean;
  errorMessage?: string;
  placeholder?: string;
}
