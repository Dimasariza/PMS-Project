import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
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
      color: ${theme.colors.alpha.black[50]};
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
            color: ${theme.palette.primary.dark};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.black[80]};
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
            color: ${theme.colors.alpha.black[50]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.black[90]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.06)};
            color: ${theme.colors.alpha.black[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.black[100]};
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
                background: ${theme.colors.alpha.black[100]};
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
  const { closeSidebar, shipID } = useContext(SidebarContext);
  const { pathname } = useRouter();
  const sideBarMenu = [
    { menu: "Dashboards", subMenu: [
      {
        title: "Ships Details",
        href: `/dashboards/ship-details?id=${shipID}`,
        icon: <DirectionsBoatFilledTwoToneIcon />
      },
      {
        title: "Scheduled Job",
        href: `/dashboards/scheduled-job?id=${shipID}`,
        icon: <CalendarMonthTwoToneIcon />
      },
      {
        title: "Unscheduled Job",
        href: `/dashboards/unscheduled-job?id=${shipID}`,
        icon: <ScheduleTwoToneIcon />
      },
    ]},
    { menu: "EQUIPMENT", subMenu: [
      {
        title: "Data Sheet",
        href: `/equipment/data-sheet?id=${shipID}`,
        icon: <TocTwoToneIcon />
      },
      {
        title: "Stock",
        href: `/equipment/stock?id=${shipID}`,
        icon: <HomeRepairServiceTwoToneIcon />
      },
    ]}, 
    { menu: "Members", subMenu: [
      {
        title: "Title Settings",
        href: `/members/title-settings?id=${shipID}`,
        icon: <BuildCircleTwoToneIcon />
      },
      {
        title: "Users",
        href: `/members/users?id=${shipID}`,
        icon: <AccountCircleTwoToneIcon />
      },
      {
        title: "Departments",
        href: `/members/departments?id=${shipID}`,
        icon: <EngineeringTwoToneIcon />
      },
    ]},
    { menu: "Notifications", subMenu: [
      {
        title: "Inbox",
        href: `/notification/inbox?id=${shipID}`,
        icon: <MailTwoToneIcon />
      },
      {
        title: "Approved",
        href: `/notification/approved?id=${shipID}`,
        icon: <CheckBoxTwoToneIcon />
      },
    ]},
  ];
  return (
    <MenuWrapper>
      {
        sideBarMenu.map(({menu, subMenu}, index) => 
          <List
            key={index}
            component="div"
            subheader={
              <ListSubheader component="div" disableSticky>
                { menu }
              </ListSubheader>
            }
          >
            <SubMenuWrapper>
              <List component="div" key={index}>
                {
                  subMenu.map(({title, href, icon}, subindex) => 
                    <ListItem component="div" key={subindex}>
                      <NextLink href={href} passHref style={{ textDecoration : "none" }}>
                        <Button
                          className={pathname.includes(href) ? 'active' : ''}
                          disableRipple
                          onClick={closeSidebar}
                          startIcon={icon}
                        >
                          {title}
                        </Button>
                      </NextLink>
                    </ListItem>
                  )
                }
              </List>
            </SubMenuWrapper>
          </List>
        )
      }
    </MenuWrapper>
  );
}

export default SidebarMenu;
