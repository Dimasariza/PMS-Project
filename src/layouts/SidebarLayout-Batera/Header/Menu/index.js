import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  IconButton,
} from '@mui/material';
import { useRef, useState } from 'react';
import Link from 'src/components/Link';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NextLink from 'next/link';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu({setOpenSideBar}) {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
        sx={{
          display: 'block'
        }}
      >
        {/* <NextLink href="/" passHref> */}
          <IconButton title='' onClick={() => {setOpenSideBar(true); console.log("Its clicked")}}>
            <MenuTwoToneIcon/>
          </IconButton>
        {/* </NextLink> */}
        {/* <List disablePadding component={Box} display="flex">
          
        </List> */}
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={Link} href="/">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/modals">
          Modals
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
