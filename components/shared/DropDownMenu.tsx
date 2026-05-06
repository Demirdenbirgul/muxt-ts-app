'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SxProps, Theme } from "@mui/material";

interface Props {
  buttonName: string;
  menuOptions: string[];
  sx?: SxProps<Theme>; 
}

const DropDownMenu = ({ buttonName, menuOptions, sx }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{color:"white", textTransform:"none", ...sx}}
      >
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
       {buttonName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {menuOptions.map((option) => {
          return <MenuItem onClick={handleClose}>{option}</MenuItem>;
        })}
      </Menu>
    </div>
  );
};

export default DropDownMenu;
