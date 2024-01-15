import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  lighten,
  darken
} from '@mui/material';
import NextLink from 'next/link';
import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        color: ${theme.colors.alpha.black[70]};
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          width: {
            xs: '210px',
            sm: theme.sidebar.width,
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? darken(theme.colors.alpha.black[100], 0.5)
              : alpha(lighten(theme.header.background, 0.1), 1),
          boxShadow:
            theme.palette.mode === 'dark' ? 'none' : theme.sidebar.boxShadow 
        }}
      >
        <Scrollbar >
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: '100%',
              }}
            >
              <NextLink href={"/ship-list"} passHref>
                <img
                  src="/static/images/logo/logo-batera.svg"
                  alt="Logo Batera"
                  height={"70px"}
                  style={{ marginLeft : "1rem", cursor : "pointer" }}
                />
              </NextLink>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.black[20]
            }}
          />
          <SidebarMenu />
        </Scrollbar>
      </SidebarWrapper>

      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? darken(theme.colors.alpha.black[100], 0.5)
                : theme.colors.alpha.white[100]
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
                {/* <Logo /> */}
                <NextLink href={"/ship-list"} passHref>
                  <img
                    src="/static/images/logo/logo-batera.svg"
                    alt="Logo Batera"
                    height={"70px"}
                    style={{ marginLeft : "1rem", cursor : "pointer" }}
                  />
                </NextLink>
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
