import { isNonEmptyString } from '@sniptt/guards';
import { useRecoilValue } from 'recoil';

import { useCommandMenuOnItemClick } from '@/command-menu/hooks/useCommandMenuOnItemClick';
import { useSelectableList } from '@/ui/layout/selectable-list/hooks/useSelectableList';
import { ReactNode } from 'react';
import { IconArrowUpRight, IconComponent } from 'twenty-ui/display';
import { MenuItemCommand } from 'twenty-ui/navigation';

export type CommandMenuItemProps = {
  label: string;
  description?: string;
  to?: string;
  id: string;
  onClick?: () => void;
  Icon?: IconComponent;
  hotKeys?: string[];
  shouldCloseCommandMenuOnClick?: boolean;
  RightComponent?: ReactNode;
};

export const CommandMenuItem = ({
  label,
  description,
  to,
  id,
  onClick,
  Icon,
  hotKeys,
  RightComponent,
}: CommandMenuItemProps) => {
  const { onItemClick } = useCommandMenuOnItemClick();

  if (isNonEmptyString(to) && !Icon) {
    Icon = IconArrowUpRight;
  }

  const { isSelectedItemIdSelector } = useSelectableList();
  const isSelectedItemId = useRecoilValue(isSelectedItemIdSelector(id));

  return (
    <MenuItemCommand
      LeftIcon={Icon}
      text={label}
      description={description}
      hotKeys={hotKeys}
      onClick={() =>
        onItemClick({
          onClick,
          to,
        })
      }
      isSelected={isSelectedItemId}
      RightComponent={RightComponent}
    />
  );
};
