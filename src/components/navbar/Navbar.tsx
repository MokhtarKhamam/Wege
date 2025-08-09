"use client";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useColorScheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductCart } from "@/types/producte";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/components/ui/navbar";
import { useChangeLanguage } from "@/sections/navbar/hooks/useChangeLanguage";
import { useTranslation } from "react-i18next";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useCallback } from "react";

const options = ["en", "ar"];

const Navbar = ({ products }: { products: ProductCart[] }) => {
  const { mode, systemMode, setMode } = useColorScheme();

  const { t, i18n } = useTranslation();
  const { handleChangeLang, open, handleClick, anchorEl, handleClose } =
    useChangeLanguage();

  const toggleDarkTheme = useCallback(() => {
    if (mode) {
      const currMode = mode === "dark" ? "light" : "dark";
      setMode(currMode);
    }
  }, [mode, systemMode]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ mr: { xs: 2 } }}>
            <Link href="/">WEGE</Link>
          </Box>
          <Search>
            <SearchIconWrapper lang={i18n.language}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("Search…")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="small"
              color="inherit"
              onClick={() => toggleDarkTheme()}
            >
              {mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={() => handleChangeLang(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <Link href="/wishes" style={{ padding: "12px" }}>
              <FavoriteIcon sx={{ mt: 0.5 }} />
            </Link>
            <Link href="/cart" style={{ padding: "12px" }}>
              <Badge badgeContent={products.length} color="error">
                <AddShoppingCartIcon sx={{ mt: 0.5 }} />
              </Badge>
            </Link>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
