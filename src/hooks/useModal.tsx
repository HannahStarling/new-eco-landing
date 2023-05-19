'use client';

import { useState } from 'react';

export const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return { modalOpened, setModalOpened };
};
