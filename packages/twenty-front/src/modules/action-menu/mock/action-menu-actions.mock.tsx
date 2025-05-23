import { Action } from '@/action-menu/actions/components/Action';
import { SingleRecordActionKeys } from '@/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';
import { ActionConfig } from '@/action-menu/actions/types/ActionConfig';
import { ActionScope } from '@/action-menu/actions/types/ActionScope';
import { ActionType } from '@/action-menu/actions/types/ActionType';
import { ActionViewType } from '@/action-menu/actions/types/ActionViewType';
import { msg } from '@lingui/core/macro';
import { IconFileExport, IconHeart, IconTrash } from 'twenty-ui/display';

export const createMockActionMenuActions = ({
  deleteMock,
  addToFavoritesMock,
  exportMock,
}: {
  deleteMock: () => void;
  addToFavoritesMock: () => void;
  exportMock: () => void;
}): ActionConfig[] => [
  {
    type: ActionType.Standard,
    scope: ActionScope.RecordSelection,
    key: SingleRecordActionKeys.ADD_TO_FAVORITES,
    label: msg`Add to favorites`,
    shortLabel: msg`Add to favorites`,
    position: 2,
    isPinned: true,
    Icon: IconHeart,
    shouldBeRegistered: () => true,
    availableOn: [
      ActionViewType.INDEX_PAGE_SINGLE_RECORD_SELECTION,
      ActionViewType.SHOW_PAGE,
    ],
    component: <Action onClick={addToFavoritesMock} />,
  },
  {
    type: ActionType.Standard,
    scope: ActionScope.RecordSelection,
    key: SingleRecordActionKeys.EXPORT,
    label: msg`Export`,
    shortLabel: msg`Export`,
    position: 4,
    Icon: IconFileExport,
    accent: 'default',
    isPinned: false,
    shouldBeRegistered: () => true,
    availableOn: [
      ActionViewType.SHOW_PAGE,
      ActionViewType.INDEX_PAGE_SINGLE_RECORD_SELECTION,
    ],
    component: <Action onClick={exportMock} />,
  },
  {
    type: ActionType.Standard,
    scope: ActionScope.RecordSelection,
    key: SingleRecordActionKeys.DELETE,
    label: msg`Delete`,
    shortLabel: msg`Delete`,
    position: 7,
    Icon: IconTrash,
    accent: 'default',
    isPinned: true,
    shouldBeRegistered: () => true,
    availableOn: [
      ActionViewType.INDEX_PAGE_SINGLE_RECORD_SELECTION,
      ActionViewType.SHOW_PAGE,
    ],
    component: <Action onClick={deleteMock} />,
  },
];
