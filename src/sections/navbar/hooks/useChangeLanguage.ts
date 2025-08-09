import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (newLocale: string) => {
    i18n.changeLanguage(newLocale);

    const segments = pathname.split("/");

    if (["en", "ar"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
    handleClose();
  };
  return { handleChangeLang, open, handleClick, anchorEl, handleClose };
};
