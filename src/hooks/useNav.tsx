import { useState } from "react";

function useNav(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

export default useNav;
