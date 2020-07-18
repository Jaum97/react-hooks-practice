import { useState, ChangeEvent, useEffect } from "react";
import { IInputProps } from "./types";

export function useForm(data: IInputProps[]) {
  const [formData, setFormData] = useState(data);

  const handleUpdateData = (keyName: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const update = { [keyName]: e.target.value };

    setFormData((d) => ({ ...d, update }));
  };

  const updateItem = (item: IInputProps) => {
    return item.onChange
      ? item
      : { ...item, onChange: handleUpdateData(item.keyName) };
  };

  const updateFormData = () => setFormData((d) => d.map(updateItem));

  useEffect(updateFormData, []);

  return formData;
}
