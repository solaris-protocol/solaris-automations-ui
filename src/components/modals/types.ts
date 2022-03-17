export type ModalType = 'stake' | 'leverage' | null;
export type SideModalType = 'orders' | null;
export type CommonModalType = ModalType | SideModalType;

export type CommonModalPropsType = {
  close: () => void;
};
