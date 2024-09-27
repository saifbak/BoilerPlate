import {useRef, useState} from 'react';

const useHome = () => {
  const [name, setName] = useState<string>('Saif');
  const initialName = useRef<string>(name);

  const handleChangeName = (value: string): void => {
    setName(value);
  };

  return {
    name,
    initialName,
    handleChangeName,
  };
};

export default useHome;
