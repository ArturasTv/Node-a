import { TFunction } from "i18next";

// TODO: Investigate why we cannot use t directly
export const generateNavigationItemsWithTranslation = (t: TFunction) => {
  return [
    {
      title: t("linkedList"),
      href: "/linked-list",
    },
    {
      title: t("doublyLinkedList"),
      href: "/doubly-linked-list",
    },
  ];
};
