'use client';

import { useClickAway } from '@uidotdev/usehooks';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';

import Button from '@/components/common/Button';

const Menu = (props: Common.MenuProps) => {
  const { value, items, buttonClasses, dialogPosition = 'left', onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const ref = useClickAway<HTMLDialogElement>((event) => {
    if (buttonRef.current?.contains(event.target as Node)) {
      return;
    }
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        classes={buttonClasses}
        type="button"
        variant="contain"
        size="sm"
        ref={buttonRef}
        onClick={handleOpenModal}
      >
        {value?.label}
      </Button>
      <dialog
        className={classNames(
          'bg-primary-400 right-0 mt-2 !block overflow-hidden rounded-xl p-2 transition-all duration-200 ease-in-out',
          {
            'left-0': dialogPosition === 'left',
            'right-0 left-[unset]': dialogPosition === 'right',
            'opacity-0': !isOpen,
            'opacity-100': isOpen,
          },
        )}
        ref={ref}
        open={isOpen}
      >
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Button
                type="button"
                variant="clear"
                size="sm"
                classes="!px-2"
                onClick={() => {
                  onChange(item);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </dialog>
    </div>
  );
};

export default Menu;
