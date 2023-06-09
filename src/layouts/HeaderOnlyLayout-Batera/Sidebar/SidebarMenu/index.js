import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';

import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

import DirectionsBoatFilledTwoToneIcon from '@mui/icons-material/DirectionsBoatFilledTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import TocTwoToneIcon from '@mui/icons-material/TocTwoTone';
import HomeRepairServiceTwoToneIcon from '@mui/icons-material/HomeRepairServiceTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;
  const url = process.env.PUBLIC_URL || ""
  return (
    <>
      {/* <MenuWrapper> */}
        {/* <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Overview UWU
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Dashboards
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href={url + "/batera/dashboards/ship-details"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/dashboards/ship-details') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DirectionsBoatFilledTwoToneIcon />}
                  >
                    Ships Details
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/dashboards/scheduled-job"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/dashboards/scheduled-job') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<CalendarMonthTwoToneIcon />}
                  >
                    Scheduled Job
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/dashboards/unscheduled-job"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/dashboards/unscheduled-job') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<ScheduleTwoToneIcon />}
                  >
                    Unscheduled Job
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              EQUIPMENT
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href={url + "/batera/equipment/data-sheet"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/equipment/data-sheet')
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<TocTwoToneIcon />}
                  >
                    Data Sheet
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/equipment/stock"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/equipment/stock')
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<HomeRepairServiceTwoToneIcon />}
                  >
                    Stock
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Members
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
            <ListItem component="div">
                <NextLink href={url + "/batera/members/title-settings"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/members/title-settings') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BuildCircleTwoToneIcon />}
                  >
                    Title Settings
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/members/users"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/members/users') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    Users
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/members/departments"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/members/departments')
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<EngineeringTwoToneIcon />}
                  >
                    Department
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              NOTIFICATION
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href={url + "/batera/notification/inbox"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/notification/inbox') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<MailTwoToneIcon />}
                  >
                    Inbox
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href={url + "/batera/notification/approved"} passHref>
                  <Button
                    className={
                      currentRoute.includes('/batera/notification/approved') ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<CheckBoxTwoToneIcon />}
                  >
                    Approved
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      {/* </MenuWrapper> */}
    </>
  );
}

export default SidebarMenu;
